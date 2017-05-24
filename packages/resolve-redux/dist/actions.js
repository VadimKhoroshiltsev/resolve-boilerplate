'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var MERGE = exports.MERGE = '@@resolve/PROJECTION_STATE_MERGE';
var FETCH_MORE = exports.FETCH_MORE = '@@resolve/PROJECTION_FETCH_MORE';
var SEND_COMMAND = exports.SEND_COMMAND = '@@resolve/SEND_COMMAND';

function merge(projectionName, state) {
    return {
        type: MERGE,
        projectionName: projectionName,
        state: state
    };
}

function sendCommand(_ref) {
    var command = _ref.command,
        aggregateId = _ref.aggregateId,
        aggregateName = _ref.aggregateName,
        payload = _ref.payload;

    return {
        type: SEND_COMMAND,
        command: command,
        aggregateId: aggregateId,
        aggregateName: aggregateName,
        payload: payload
    };
}

function fetchMore(projectionName, query) {
    return {
        type: FETCH_MORE,
        projectionName: projectionName,
        query: query
    };
}

exports.default = {
    merge: merge,
    sendCommand: sendCommand,
    fetchMore: fetchMore
};