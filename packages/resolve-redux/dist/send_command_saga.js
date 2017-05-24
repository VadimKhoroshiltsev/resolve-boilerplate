'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = sendCommandSaga;

var _effects = require('redux-saga/effects');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = [sendCommandSaga].map(_regenerator2.default.mark);

function sendCommandSaga(_ref2, _ref) {
    var sendCommand = _ref2.sendCommand;
    var action = (0, _objectWithoutProperties3.default)(_ref, []);
    var command, aggregateId, aggregateName, payload;
    return _regenerator2.default.wrap(function sendCommandSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    command = action.command, aggregateId = action.aggregateId, aggregateName = action.aggregateName, payload = action.payload;

                    if (!(command && aggregateId && aggregateName)) {
                        _context.next = 14;
                        break;
                    }

                    _context.prev = 2;
                    _context.next = 5;
                    return (0, _effects.call)(sendCommand, {
                        type: command.type,
                        aggregateId: aggregateId,
                        aggregateName: aggregateName,
                        payload: payload
                    });

                case 5:
                    _context.next = 14;
                    break;

                case 7:
                    _context.prev = 7;
                    _context.t0 = _context['catch'](2);

                    delete action.command;
                    action.status = 'error';
                    action.error = _context.t0;
                    _context.next = 14;
                    return (0, _effects.put)(action);

                case 14:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[2, 7]]);
}