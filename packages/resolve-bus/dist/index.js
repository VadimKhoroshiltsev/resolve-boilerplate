"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

exports.default = function (_ref) {
    var driver = _ref.driver;

    var eventHandlersMap = new _map2.default();

    function trigger(event) {
        var handlers = eventHandlersMap.get(event.type) || [];
        handlers.forEach(function (handler) {
            return handler(event);
        });
    }

    driver.setTrigger(trigger);

    return {
        emitEvent: function emitEvent(event) {
            return driver.publish(event);
        },
        onEvent: function onEvent(eventTypes, callback) {
            eventTypes.forEach(function (eventType) {
                var handlers = eventHandlersMap.get(eventType) || [];
                handlers.push(callback);
                eventHandlersMap.set(eventType, handlers);
            });

            return function () {
                eventTypes.forEach(function (eventType) {
                    var handlers = eventHandlersMap.get(eventType).filter(function (item) {
                        return item !== callback;
                    });
                    eventHandlersMap.set(eventType, handlers);
                });
            };
        }
    };
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }