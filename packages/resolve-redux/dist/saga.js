'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = saga;

var _effects = require('redux-saga/effects');

var _send_command_saga = require('./send_command_saga');

var _send_command_saga2 = _interopRequireDefault(_send_command_saga);

var _fetch_more_saga = require('./fetch_more_saga');

var _fetch_more_saga2 = _interopRequireDefault(_fetch_more_saga);

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [saga].map(_regenerator2.default.mark);

function saga(args) {
    return _regenerator2.default.wrap(function saga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.takeEvery)('*', _send_command_saga2.default, args);

                case 2:
                    _context.next = 4;
                    return (0, _effects.takeEvery)(_actions.FETCH_MORE, _fetch_more_saga2.default, args);

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}