'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (_ref) {
    var url = _ref.url,
        collection = _ref.collection;

    var promise = void 0;

    function getCollection() {
        if (!promise) {
            promise = _mongodb.MongoClient.connect(url).then(function (db) {
                return db.collection(collection);
            }).then(function (coll) {
                return coll.createIndex('timestamp').then(function () {
                    return coll.createIndex('aggregateId');
                }).then(function () {
                    return coll;
                });
            });
        }

        return promise;
    }

    return {
        saveEvent: function saveEvent(event) {
            return getCollection().then(function (coll) {
                return coll.insert(event);
            });
        },
        loadEventsByTypes: function loadEventsByTypes(types, callback) {
            return getCollection().then(function (coll) {
                return loadEvents(coll, { type: { $in: types } }, callback);
            });
        },
        loadEventsByAggregateId: function loadEventsByAggregateId(aggregateId, callback) {
            return getCollection().then(function (coll) {
                return loadEvents(coll, { aggregateId: aggregateId }, callback);
            });
        }
    };
};

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadEvents(coll, query, callback) {
    var doneResolver = null;
    var donePromise = new _promise2.default(function (resolve) {
        return doneResolver = resolve;
    });
    var workerPromise = _promise2.default.resolve();

    var cursorStream = coll.find(query, { sort: 'timestamp' }).stream();

    cursorStream.on('data', function (item) {
        return workerPromise = workerPromise.then(function () {
            return callback(item);
        });
    });

    cursorStream.on('end', function () {
        return workerPromise = workerPromise.then(doneResolver);
    });

    return donePromise;
}