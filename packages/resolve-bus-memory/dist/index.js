"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var handler = function handler() {};

    return {
        setTrigger: function setTrigger(callback) {
            return handler = callback;
        },
        publish: function publish(event) {
            return handler(event);
        }
    };
};