"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function updateState(projection, event, state) {
    return projection.eventHandlers[event.type](state, event);
}

var executor = function executor(_ref) {
    var store = _ref.store,
        bus = _ref.bus,
        projection = _ref.projection;

    var eventTypes = (0, _keys2.default)(projection.eventHandlers);
    var initialStateFunc = projection.initialState || function () {
        return {};
    };
    var state = initialStateFunc();

    var handler = function handler(event) {
        return state = updateState(projection, event, state);
    };

    var result = null;
    return function () {
        result = result || store.loadEventsByTypes(eventTypes, handler).then(function () {
            bus.onEvent(eventTypes, handler);
        });

        return result.then(function () {
            return state;
        });
    };
};

exports.default = function (_ref2) {
    var store = _ref2.store,
        bus = _ref2.bus,
        projections = _ref2.projections;

    var executors = projections.reduce(function (result, projection) {
        result[projection.name.toLowerCase()] = executor({
            store: store,
            bus: bus,
            projection: projection
        });
        return result;
    }, {});

    return function (name) {
        var executor = executors[name.toLowerCase()];

        if (executor === undefined) {
            return _promise2.default.reject(new Error("The '" + name + "' projection is not found"));
        }

        return executor();
    };
};