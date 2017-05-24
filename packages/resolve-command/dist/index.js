'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyCommand(command) {
    if (!command.aggregateId) return _promise2.default.reject('"aggregateId" argument is required');
    if (!command.aggregateName) return _promise2.default.reject('"aggregateName" argument is required');
    if (!command.type) return _promise2.default.reject('"type" argument is required');

    return _promise2.default.resolve(command);
}

function getAggregateState(aggregate, aggregateId, store) {
    var initialStateFunc = aggregate.initialState || function () {
        return {};
    };
    var handlers = aggregate.eventHandlers;
    var aggregateState = initialStateFunc();

    if (!handlers) {
        return _promise2.default.resolve(aggregateState);
    }

    return store.loadEventsByAggregateId(aggregateId, function (event) {
        var handler = handlers[event.type];
        if (handler) {
            aggregateState = handler(aggregateState, event);
        }
    }).then(function () {
        return aggregateState;
    });
}

function executeCommand(command, aggregate, store) {
    return getAggregateState(aggregate, command.aggregateId, store).then(function (aggregateState) {
        var handler = aggregate.commands[command.type];
        var event = handler(aggregateState, command);

        if (!event.type) {
            return _promise2.default.reject('event type is required');
        }

        event.aggregateId = command.aggregateId;
        event.timestamp = Date.now();
        return event;
    });
}

function saveEvent(event, store) {
    return store.saveEvent(event).then(function () {
        return event;
    });
}

function publishEvent(event, bus) {
    bus.emitEvent(event);
    return event;
}

var createExecutor = function createExecutor(_ref) {
    var store = _ref.store,
        bus = _ref.bus,
        aggregate = _ref.aggregate;
    return function (command) {
        return executeCommand(command, aggregate, store).then(function (event) {
            return saveEvent(event, store);
        }).then(function (event) {
            return publishEvent(event, bus);
        });
    };
};

exports.default = function (_ref2) {
    var store = _ref2.store,
        bus = _ref2.bus,
        aggregates = _ref2.aggregates;

    var executors = aggregates.reduce(function (result, aggregate) {
        result[aggregate.name.toLowerCase()] = createExecutor({
            store: store,
            bus: bus,
            aggregate: aggregate
        });
        return result;
    }, {});

    return function (command) {
        return verifyCommand(command).then(function () {
            return executors[command.aggregateName.toLowerCase()](command);
        });
    };
};