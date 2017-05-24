'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = fetchMoreSaga;

var _effects = require('redux-saga/effects');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [fetchMoreSaga].map(_regenerator2.default.mark);

function fetchMoreSaga(_ref, _ref2) {
    var fetchMore = _ref.fetchMore;
    var projectionName = _ref2.projectionName,
        query = _ref2.query;
    var state;
    return _regenerator2.default.wrap(function fetchMoreSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.call)(fetchMore, projectionName, query);

                case 2:
                    state = _context.sent;
                    _context.next = 5;
                    return (0, _effects.put)(_actions2.default.merge(projectionName, state));

                case 5:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}