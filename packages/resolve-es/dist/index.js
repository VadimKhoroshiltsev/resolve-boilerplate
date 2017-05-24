"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var driver = _ref.driver;

    var onEventSavedCallbacks = [];

    return {
        saveEvent: function saveEvent(event) {
            return driver.saveEvent(event).then(function () {
                return onEventSavedCallbacks.forEach(function (cb) {
                    return cb(event);
                });
            });
        },

        loadEventsByTypes: driver.loadEventsByTypes,

        loadEventsByAggregateId: driver.loadEventsByAggregateId,

        onEventSaved: function onEventSaved(callback) {
            onEventSavedCallbacks.push(callback);
            return function () {
                return onEventSavedCallbacks = onEventSavedCallbacks.filter(function (item) {
                    return item !== callback;
                });
            };
        }
    };
};