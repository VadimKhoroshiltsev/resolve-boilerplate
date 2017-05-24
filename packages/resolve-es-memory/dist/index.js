"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compareEvents = function compareEvents(a, b) {
    return a.timestamp - b.timestamp;
};

exports.default = function (events) {
    var store = events || [];

    return {
        saveEvent: function saveEvent(event) {
            store.push(event);
            return _promise2.default.resolve();
        },

        loadEventsByTypes: function loadEventsByTypes(types, callback) {
            return _promise2.default.resolve(store.filter(function (event) {
                return types.includes(event.type);
            }).sort(compareEvents).forEach(callback));
        },

        loadEventsByAggregateId: function loadEventsByAggregateId(id, callback) {
            return _promise2.default.resolve(store.filter(function (event) {
                return event.aggregateId === id;
            }).sort(compareEvents).forEach(callback));
        }
    };
};