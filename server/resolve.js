import createStore from "../packages/resolve-es/dist";
import esDriver from "../packages/resolve-es-file/dist";
import createBus from "../packages/resolve-bus/dist";
import busDriver from "../packages/resolve-bus-memory/dist";
import commandHandler from "../packages/resolve-command/dist";
import query from "../packages/resolve-query/dist";

import todoAggregate from "./aggregates";
import todosProjection from "../projections";

const eventStore = createStore({
  driver: esDriver({ pathToFile: "./db.json" })
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
  projections: [todosProjection]
});

export default {
  subscribe: bus.onEvent,
  execute,
  query: queries
};
