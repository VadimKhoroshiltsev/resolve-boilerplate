'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = todos;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _ActionTypes = require('../constants/ActionTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes.ADD_TODO:
      return [{
        id: state.reduce(function (maxId, todo) {
          return Math.max(todo.id, maxId);
        }, -1) + 1,
        completed: false,
        text: action.text
      }].concat((0, _toConsumableArray3.default)(state));

    case _ActionTypes.DELETE_TODO:
      return state.filter(function (todo) {
        return todo.id !== action.id;
      });

    case _ActionTypes.EDIT_TODO:
      return state.map(function (todo) {
        return todo.id === action.id ? (0, _extends3.default)({}, todo, { text: action.text }) : todo;
      });

    case _ActionTypes.COMPLETE_TODO:
      return state.map(function (todo) {
        return todo.id === action.id ? (0, _extends3.default)({}, todo, { completed: !todo.completed }) : todo;
      });

    case _ActionTypes.COMPLETE_ALL:
      var areAllMarked = state.every(function (todo) {
        return todo.completed;
      });
      return state.map(function (todo) {
        return (0, _extends3.default)({}, todo, {
          completed: !areAllMarked
        });
      });

    case _ActionTypes.CLEAR_COMPLETED:
      return state.filter(function (todo) {
        return todo.completed === false;
      });

    default:
      return state;
  }
}