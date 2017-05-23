'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('todomvc-app-css/index.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = require('../components/MainSection');

var _MainSection2 = _interopRequireDefault(_MainSection);

var _actions = require('../actions');

var TodoActions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Repositories\\Resolve\\resolve-boilerplate\\containers\\App.js';


var App = function App(_ref) {
  var todos = _ref.todos,
      actions = _ref.actions;
  return _react2.default.createElement('div', { className: 'todoapp', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: _index.stylesheet }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  })), _react2.default.createElement(_Header2.default, { addTodo: actions.addTodo, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement(_MainSection2.default, { todos: todos, actions: actions, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }));
};

App.propTypes = {
  todos: _propTypes2.default.array.isRequired,
  actions: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: state.todos
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(TodoActions, dispatch)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);