'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENCODING = 'utf8';

var loadEvents = function loadEvents(path) {
    return new _promise2.default(function (resolve, reject) {
        return _fs2.default.readFile(path, ENCODING, function (err, content) {
            if (err && err.code !== 'ENOENT') {
                reject(err);
                return;
            }
            resolve(content ? JSON.parse('[' + content.replace(/,$/, '') + ']') : []);
        });
    });
};

var compareEvents = function compareEvents(a, b) {
    return a.timestamp - b.timestamp;
};

exports.default = function (_ref) {
    var pathToFile = _ref.pathToFile;
    return {
        saveEvent: function saveEvent(event) {
            return new _promise2.default(function (resolve, reject) {
                return _fs2.default.appendFile(pathToFile, (0, _stringify2.default)(event, null, 2) + ',', ENCODING, function (err) {
                    return err ? reject(err) : resolve();
                });
            });
        },

        loadEventsByTypes: function loadEventsByTypes(types, callback) {
            return loadEvents(pathToFile).then(function (events) {
                return events.filter(function (event) {
                    return types.includes(event.type);
                }).sort(compareEvents).forEach(callback);
            });
        },

        loadEventsByAggregateId: function loadEventsByAggregateId(id, callback) {
            return loadEvents(pathToFile).then(function (events) {
                return events.filter(function (event) {
                    return event.aggregateId === id;
                }).sort(compareEvents).forEach(callback);
            });
        }
    };
};