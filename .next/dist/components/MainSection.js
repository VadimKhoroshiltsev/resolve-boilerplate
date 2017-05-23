'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TodoItem = require('./TodoItem');

var _TodoItem2 = _interopRequireDefault(_TodoItem);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _TodoFilters = require('../constants/TodoFilters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _TODO_FILTERS,
    _jsxFileName = 'D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\MainSection.js';

var TODO_FILTERS = (_TODO_FILTERS = {}, (0, _defineProperty3.default)(_TODO_FILTERS, _TodoFilters.SHOW_ALL, function () {
  return true;
}), (0, _defineProperty3.default)(_TODO_FILTERS, _TodoFilters.SHOW_ACTIVE, function (todo) {
  return !todo.completed;
}), (0, _defineProperty3.default)(_TODO_FILTERS, _TodoFilters.SHOW_COMPLETED, function (todo) {
  return todo.completed;
}), _TODO_FILTERS);

var MainSection = function (_Component) {
  (0, _inherits3.default)(MainSection, _Component);

  function MainSection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MainSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MainSection.__proto__ || (0, _getPrototypeOf2.default)(MainSection)).call.apply(_ref, [this].concat(args))), _this), _this.state = { filter: _TodoFilters.SHOW_ALL }, _this.handleClearCompleted = function () {
      _this.props.actions.clearCompleted();
    }, _this.handleShow = function (filter) {
      _this.setState({ filter: filter });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MainSection, [{
    key: 'renderToggleAll',
    value: function renderToggleAll(completedCount) {
      var _props = this.props,
          todos = _props.todos,
          actions = _props.actions;

      if (todos.length > 0) {
        return _react2.default.createElement('input', { className: 'toggle-all',
          type: 'checkbox',
          checked: completedCount === todos.length,
          onChange: actions.completeAll, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        });
      }
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter(completedCount) {
      var todos = this.props.todos;
      var filter = this.state.filter;

      var activeCount = todos.length - completedCount;

      if (todos.length) {
        return _react2.default.createElement(_Footer2.default, { completedCount: completedCount,
          activeCount: activeCount,
          filter: filter,
          onClearCompleted: this.handleClearCompleted,
          onShow: this.handleShow, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          todos = _props2.todos,
          actions = _props2.actions;
      var filter = this.state.filter;

      var filteredTodos = todos.filter(TODO_FILTERS[filter]);
      var completedCount = todos.reduce(function (count, todo) {
        return todo.completed ? count + 1 : count;
      }, 0);

      return _react2.default.createElement('section', { className: 'main', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.renderToggleAll(completedCount), _react2.default.createElement('ul', { className: 'todo-list', __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, filteredTodos.map(function (todo) {
        return _react2.default.createElement(_TodoItem2.default, (0, _extends3.default)({ key: todo.id, todo: todo }, actions, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }));
      })), this.renderFooter(completedCount));
    }
  }]);

  return MainSection;
}(_react.Component);

MainSection.propTypes = {
  todos: _propTypes2.default.array.isRequired,
  actions: _propTypes2.default.object.isRequired
};
exports.default = MainSection;