const createStore = require('../packages/resolve-es/dist').default
const esDriver = require('../packages/resolve-es-file/dist').default
const createBus = require('../packages/resolve-bus/dist').default
const busDriver = require('../packages/resolve-bus-memory/dist').default
const commandHandler = require('../packages/resolve-command/dist').default
const query = require('../packages/resolve-query/dist').default

const todoAggregate = require('./aggregates');

const eventStore = createStore({
    driver: esDriver({ pathToFile: './db.json' })
});

const bus = createBus({ driver: busDriver() });

const execute = commandHandler({
    store: eventStore,
    bus,
    aggregates: [todoAggregate]
});

const queries = query({
    store: eventStore,
    bus,
    projections: []
});

module.exports = {
    bus,
    execute,
    queries
}
