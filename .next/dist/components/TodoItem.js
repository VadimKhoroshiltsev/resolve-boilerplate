'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoTextInput = require('./TodoTextInput');

var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\TodoItem.js';


var TodoItem = function (_Component) {
  (0, _inherits3.default)(TodoItem, _Component);

  function TodoItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TodoItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TodoItem.__proto__ || (0, _getPrototypeOf2.default)(TodoItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      editing: false
    }, _this.handleDoubleClick = function () {
      _this.setState({ editing: true });
    }, _this.handleSave = function (id, text) {
      if (text.length === 0) {
        _this.props.deleteTodo(id);
      } else {
        _this.props.editTodo(id, text);
      }
      _this.setState({ editing: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TodoItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          todo = _props.todo,
          completeTodo = _props.completeTodo,
          deleteTodo = _props.deleteTodo;

      var element = void 0;
      if (this.state.editing) {
        element = _react2.default.createElement(_TodoTextInput2.default, { text: todo.text,
          editing: this.state.editing,
          onSave: function onSave(text) {
            return _this2.handleSave(todo.id, text);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      } else {
        element = _react2.default.createElement('div', { className: 'view', __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }, _react2.default.createElement('input', { className: 'toggle',
          type: 'checkbox',
          checked: todo.completed,
          onChange: function onChange() {
            return completeTodo(todo.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }), _react2.default.createElement('label', { onDoubleClick: this.handleDoubleClick, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, todo.text), _react2.default.createElement('button', { className: 'destroy',
          onClick: function onClick() {
            return deleteTodo(todo.id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }));
      }

      return _react2.default.createElement('li', { className: (0, _classnames2.default)({
          completed: todo.completed,
          editing: this.state.editing
        }), __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, element);
    }
  }]);

  return TodoItem;
}(_react.Component);

TodoItem.propTypes = {
  todo: _propTypes2.default.object.isRequired,
  editTodo: _propTypes2.default.func.isRequired,
  deleteTodo: _propTypes2.default.func.isRequired,
  completeTodo: _propTypes2.default.func.isRequired
};
exports.default = TodoItem;