'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = createReducer;

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createReducer(_ref, extendReducer) {
    var name = _ref.name,
        eventHandlers = _ref.eventHandlers;

    var handlers = (0, _extends4.default)({}, eventHandlers, (0, _defineProperty3.default)({}, _actions.MERGE, function (state, action) {
        if (action.projectionName === name) {
            return state.merge(action.state);
        }
        return state;
    }));

    return function () {
        var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var action = arguments[1];

        var eventHandler = handlers[action.type];

        if (eventHandler) {
            return eventHandler(state, action);
        }

        if (extendReducer) {
            return extendReducer(state, action);
        }

        return state;
    };
}