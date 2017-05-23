
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 565:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(560);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\TodoTextInput.js';


var TodoTextInput = function (_Component) {
  (0, _inherits3.default)(TodoTextInput, _Component);

  function TodoTextInput() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TodoTextInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TodoTextInput.__proto__ || (0, _getPrototypeOf2.default)(TodoTextInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      text: _this.props.text || ''
    }, _this.handleSubmit = function (e) {
      var text = e.target.value.trim();
      if (e.which === 13) {
        _this.props.onSave(text);
        if (_this.props.newTodo) {
          _this.setState({ text: '' });
        }
      }
    }, _this.handleChange = function (e) {
      _this.setState({ text: e.target.value });
    }, _this.handleBlur = function (e) {
      if (!_this.props.newTodo) {
        _this.props.onSave(e.target.value);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TodoTextInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', { className: (0, _classnames2.default)({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        }),
        type: 'text',
        placeholder: this.props.placeholder,
        autoFocus: 'true',
        value: this.state.text,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onKeyDown: this.handleSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      });
    }
  }]);

  return TodoTextInput;
}(_react.Component);

TodoTextInput.propTypes = {
  onSave: _propTypes2.default.func.isRequired,
  text: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  editing: _propTypes2.default.bool,
  newTodo: _propTypes2.default.bool
};
exports.default = TodoTextInput;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\TodoTextInput.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\TodoTextInput.js"); } } })();

/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var DELETE_TODO = exports.DELETE_TODO = 'DELETE_TODO';
var EDIT_TODO = exports.EDIT_TODO = 'EDIT_TODO';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';
var COMPLETE_ALL = exports.COMPLETE_ALL = 'COMPLETE_ALL';
var CLEAR_COMPLETED = exports.CLEAR_COMPLETED = 'CLEAR_COMPLETED';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\constants\\ActionTypes.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\constants\\ActionTypes.js"); } } })();

/***/ }),

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SHOW_ALL = exports.SHOW_ALL = 'show_all';
var SHOW_COMPLETED = exports.SHOW_COMPLETED = 'show_completed';
var SHOW_ACTIVE = exports.SHOW_ACTIVE = 'show_active';

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\constants\\TodoFilters.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\constants\\TodoFilters.js"); } } })();

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__(559);

var _reactRedux = __webpack_require__(570);

var _App = __webpack_require__(593);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(594);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Repositories\\Resolve\\resolve-boilerplate\\pages\\index.js?entry';


var store = (0, _redux.createStore)(_reducers2.default);

exports.default = function () {
  return _react2.default.createElement(_reactRedux.Provider, { store: store, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_App2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 588:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

var _ActionTypes = __webpack_require__(566);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addTodo = exports.addTodo = function addTodo(text) {
  return { type: types.ADD_TODO, text: text };
};
var deleteTodo = exports.deleteTodo = function deleteTodo(id) {
  return { type: types.DELETE_TODO, id: id };
};
var editTodo = exports.editTodo = function editTodo(id, text) {
  return { type: types.EDIT_TODO, id: id, text: text };
};
var completeTodo = exports.completeTodo = function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id: id };
};
var completeAll = exports.completeAll = function completeAll() {
  return { type: types.COMPLETE_ALL };
};
var clearCompleted = exports.clearCompleted = function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\actions\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\actions\\index.js"); } } })();

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(563);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(560);

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoFilters = __webpack_require__(567);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _FILTER_TITLES,
    _jsxFileName = 'D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\Footer.js';

var FILTER_TITLES = (_FILTER_TITLES = {}, (0, _defineProperty3.default)(_FILTER_TITLES, _TodoFilters.SHOW_ALL, 'All'), (0, _defineProperty3.default)(_FILTER_TITLES, _TodoFilters.SHOW_ACTIVE, 'Active'), (0, _defineProperty3.default)(_FILTER_TITLES, _TodoFilters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);

var Footer = function (_Component) {
  (0, _inherits3.default)(Footer, _Component);

  function Footer() {
    (0, _classCallCheck3.default)(this, Footer);

    return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Footer, [{
    key: 'renderTodoCount',
    value: function renderTodoCount() {
      var activeCount = this.props.activeCount;

      var itemWord = activeCount === 1 ? 'item' : 'items';

      return _react2.default.createElement('span', { className: 'todo-count', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, activeCount || 'No'), ' ', itemWord, ' left');
    }
  }, {
    key: 'renderFilterLink',
    value: function renderFilterLink(filter) {
      var title = FILTER_TITLES[filter];
      var _props = this.props,
          selectedFilter = _props.filter,
          onShow = _props.onShow;

      return _react2.default.createElement('a', { className: (0, _classnames2.default)({ selected: filter === selectedFilter }),
        style: { cursor: 'pointer' },
        onClick: function onClick() {
          return onShow(filter);
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, title);
    }
  }, {
    key: 'renderClearButton',
    value: function renderClearButton() {
      var _props2 = this.props,
          completedCount = _props2.completedCount,
          onClearCompleted = _props2.onClearCompleted;

      if (completedCount > 0) {
        return _react2.default.createElement('button', { className: 'clear-completed',
          onClick: onClearCompleted, __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, 'Clear completed');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('footer', { className: 'footer', __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, this.renderTodoCount(), _react2.default.createElement('ul', { className: 'filters', __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, [_TodoFilters.SHOW_ALL, _TodoFilters.SHOW_ACTIVE, _TodoFilters.SHOW_COMPLETED].map(function (filter) {
        return _react2.default.createElement('li', { key: filter, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, _this2.renderFilterLink(filter));
      })), this.renderClearButton());
    }
  }]);

  return Footer;
}(_react.Component);

Footer.propTypes = {
  completedCount: _propTypes2.default.number.isRequired,
  activeCount: _propTypes2.default.number.isRequired,
  filter: _propTypes2.default.string.isRequired,
  onClearCompleted: _propTypes2.default.func.isRequired,
  onShow: _propTypes2.default.func.isRequired
};
exports.default = Footer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\Footer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\Footer.js"); } } })();

/***/ }),

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TodoTextInput = __webpack_require__(565);

var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.handleSave = function (text) {
      if (text.length !== 0) {
        _this.props.addTodo(text);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('header', { className: 'header', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, 'todos'), _react2.default.createElement(_TodoTextInput2.default, { newTodo: true,
        onSave: this.handleSave,
        placeholder: 'What needs to be done?', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }));
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  addTodo: _propTypes2.default.func.isRequired
};
exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\Header.js"); } } })();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _defineProperty2 = __webpack_require__(563);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TodoItem = __webpack_require__(592);

var _TodoItem2 = _interopRequireDefault(_TodoItem);

var _Footer = __webpack_require__(589);

var _Footer2 = _interopRequireDefault(_Footer);

var _TodoFilters = __webpack_require__(567);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\MainSection.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\MainSection.js"); } } })();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(560);

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoTextInput = __webpack_require__(565);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\TodoItem.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\components\\TodoItem.js"); } } })();

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

var _index = __webpack_require__(587);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(82);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = __webpack_require__(559);

var _reactRedux = __webpack_require__(570);

var _Header = __webpack_require__(590);

var _Header2 = _interopRequireDefault(_Header);

var _MainSection = __webpack_require__(591);

var _MainSection2 = _interopRequireDefault(_MainSection);

var _actions = __webpack_require__(588);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\containers\\App.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\containers\\App.js"); } } })();

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(559);

var _todos = __webpack_require__(595);

var _todos2 = _interopRequireDefault(_todos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  todos: _todos2.default
});

exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\reducers\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\reducers\\index.js"); } } })();

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = todos;

var _extends2 = __webpack_require__(93);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(94);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _ActionTypes = __webpack_require__(566);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "D:\\Repositories\\Resolve\\resolve-boilerplate\\reducers\\todos.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Repositories\\Resolve\\resolve-boilerplate\\reducers\\todos.js"); } } })();

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(576);


/***/ })

},[611]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ub2RvVGV4dElucHV0LmpzPzRhYjIzYTQiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL0FjdGlvblR5cGVzLmpzPzRhYjIzYTQiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL1RvZG9GaWx0ZXJzLmpzPzRhYjIzYTQiLCJ3ZWJwYWNrOi8vLy4vcGFnZXM/NGFiMjNhNCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzRhYjIzYTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanM/NGFiMjNhNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz80YWIyM2E0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFpblNlY3Rpb24uanM/NGFiMjNhNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvZG9JdGVtLmpzPzRhYjIzYTQiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9BcHAuanM/NGFiMjNhNCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz80YWIyM2E0Iiwid2VicGFjazovLy8uL3JlZHVjZXJzL3RvZG9zLmpzPzRhYjIzYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb1RleHRJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25TYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZWRpdGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgbmV3VG9kbzogUHJvcFR5cGVzLmJvb2xcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIHRleHQ6IHRoaXMucHJvcHMudGV4dCB8fCAnJ1xuICB9XG5cbiAgaGFuZGxlU3VibWl0ID0gZSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKVxuICAgIGlmIChlLndoaWNoID09PSAxMykge1xuICAgICAgdGhpcy5wcm9wcy5vblNhdmUodGV4dClcbiAgICAgIGlmICh0aGlzLnByb3BzLm5ld1RvZG8pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6ICcnIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gIH1cblxuICBoYW5kbGVCbHVyID0gZSA9PiB7XG4gICAgaWYgKCF0aGlzLnByb3BzLm5ld1RvZG8pIHtcbiAgICAgIHRoaXMucHJvcHMub25TYXZlKGUudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17XG4gICAgICAgIGNsYXNzbmFtZXMoe1xuICAgICAgICAgIGVkaXQ6IHRoaXMucHJvcHMuZWRpdGluZyxcbiAgICAgICAgICAnbmV3LXRvZG8nOiB0aGlzLnByb3BzLm5ld1RvZG9cbiAgICAgICAgfSl9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgIGF1dG9Gb2N1cz1cInRydWVcIlxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fVxuICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1cn1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICBvbktleURvd249e3RoaXMuaGFuZGxlU3VibWl0fSAvPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Ub2RvVGV4dElucHV0LmpzIiwiZXhwb3J0IGNvbnN0IEFERF9UT0RPID0gJ0FERF9UT0RPJ1xuZXhwb3J0IGNvbnN0IERFTEVURV9UT0RPID0gJ0RFTEVURV9UT0RPJ1xuZXhwb3J0IGNvbnN0IEVESVRfVE9ETyA9ICdFRElUX1RPRE8nXG5leHBvcnQgY29uc3QgQ09NUExFVEVfVE9ETyA9ICdDT01QTEVURV9UT0RPJ1xuZXhwb3J0IGNvbnN0IENPTVBMRVRFX0FMTCA9ICdDT01QTEVURV9BTEwnXG5leHBvcnQgY29uc3QgQ0xFQVJfQ09NUExFVEVEID0gJ0NMRUFSX0NPTVBMRVRFRCdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9BY3Rpb25UeXBlcy5qcyIsImV4cG9ydCBjb25zdCBTSE9XX0FMTCA9ICdzaG93X2FsbCdcbmV4cG9ydCBjb25zdCBTSE9XX0NPTVBMRVRFRCA9ICdzaG93X2NvbXBsZXRlZCdcbmV4cG9ydCBjb25zdCBTSE9XX0FDVElWRSA9ICdzaG93X2FjdGl2ZSdcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnN0YW50cy9Ub2RvRmlsdGVycy5qcyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEFwcCBmcm9tICcuLi9jb250YWluZXJzL0FwcCdcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJ1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8QXBwIC8+XG4gIDwvUHJvdmlkZXI+XG4pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcydcblxuZXhwb3J0IGNvbnN0IGFkZFRvZG8gPSB0ZXh0ID0+ICh7IHR5cGU6IHR5cGVzLkFERF9UT0RPLCB0ZXh0IH0pXG5leHBvcnQgY29uc3QgZGVsZXRlVG9kbyA9IGlkID0+ICh7IHR5cGU6IHR5cGVzLkRFTEVURV9UT0RPLCBpZCB9KVxuZXhwb3J0IGNvbnN0IGVkaXRUb2RvID0gKGlkLCB0ZXh0KSA9PiAoeyB0eXBlOiB0eXBlcy5FRElUX1RPRE8sIGlkLCB0ZXh0IH0pXG5leHBvcnQgY29uc3QgY29tcGxldGVUb2RvID0gaWQgPT4gKHsgdHlwZTogdHlwZXMuQ09NUExFVEVfVE9ETywgaWQgfSlcbmV4cG9ydCBjb25zdCBjb21wbGV0ZUFsbCA9ICgpID0+ICh7IHR5cGU6IHR5cGVzLkNPTVBMRVRFX0FMTCB9KVxuZXhwb3J0IGNvbnN0IGNsZWFyQ29tcGxldGVkID0gKCkgPT4gKHsgdHlwZTogdHlwZXMuQ0xFQVJfQ09NUExFVEVEIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFNIT1dfQUxMLCBTSE9XX0NPTVBMRVRFRCwgU0hPV19BQ1RJVkUgfSBmcm9tICcuLi9jb25zdGFudHMvVG9kb0ZpbHRlcnMnXG5cbmNvbnN0IEZJTFRFUl9USVRMRVMgPSB7XG4gIFtTSE9XX0FMTF06ICdBbGwnLFxuICBbU0hPV19BQ1RJVkVdOiAnQWN0aXZlJyxcbiAgW1NIT1dfQ09NUExFVEVEXTogJ0NvbXBsZXRlZCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjb21wbGV0ZWRDb3VudDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGFjdGl2ZUNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgZmlsdGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgb25DbGVhckNvbXBsZXRlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblNob3c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHJlbmRlclRvZG9Db3VudCgpIHtcbiAgICBjb25zdCB7IGFjdGl2ZUNvdW50IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaXRlbVdvcmQgPSBhY3RpdmVDb3VudCA9PT0gMSA/ICdpdGVtJyA6ICdpdGVtcydcblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2RvLWNvdW50XCI+XG4gICAgICAgIDxzdHJvbmc+e2FjdGl2ZUNvdW50IHx8ICdObyd9PC9zdHJvbmc+IHtpdGVtV29yZH0gbGVmdFxuICAgICAgPC9zcGFuPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckZpbHRlckxpbmsoZmlsdGVyKSB7XG4gICAgY29uc3QgdGl0bGUgPSBGSUxURVJfVElUTEVTW2ZpbHRlcl1cbiAgICBjb25zdCB7IGZpbHRlcjogc2VsZWN0ZWRGaWx0ZXIsIG9uU2hvdyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7IHNlbGVjdGVkOiBmaWx0ZXIgPT09IHNlbGVjdGVkRmlsdGVyIH0pfVxuICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uU2hvdyhmaWx0ZXIpfT5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9hPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlckNsZWFyQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgY29tcGxldGVkQ291bnQsIG9uQ2xlYXJDb21wbGV0ZWQgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoY29tcGxldGVkQ291bnQgPiAwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsZWFyLWNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGVhckNvbXBsZXRlZH0gPlxuICAgICAgICAgIENsZWFyIGNvbXBsZXRlZFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgIHt0aGlzLnJlbmRlclRvZG9Db3VudCgpfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyc1wiPlxuICAgICAgICAgIHtbIFNIT1dfQUxMLCBTSE9XX0FDVElWRSwgU0hPV19DT01QTEVURUQgXS5tYXAoZmlsdGVyID0+XG4gICAgICAgICAgICA8bGkga2V5PXtmaWx0ZXJ9PlxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJGaWx0ZXJMaW5rKGZpbHRlcil9XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHt0aGlzLnJlbmRlckNsZWFyQnV0dG9uKCl9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFRvZG9UZXh0SW5wdXQgZnJvbSAnLi9Ub2RvVGV4dElucHV0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGFkZFRvZG86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIGhhbmRsZVNhdmUgPSB0ZXh0ID0+IHtcbiAgICBpZiAodGV4dC5sZW5ndGggIT09IDApIHtcbiAgICAgIHRoaXMucHJvcHMuYWRkVG9kbyh0ZXh0KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgICAgPFRvZG9UZXh0SW5wdXQgbmV3VG9kb1xuICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3RoaXMuaGFuZGxlU2F2ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IG5lZWRzIHRvIGJlIGRvbmU/XCIgLz5cbiAgICAgIDwvaGVhZGVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi9Ub2RvSXRlbSdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInXG5pbXBvcnQgeyBTSE9XX0FMTCwgU0hPV19DT01QTEVURUQsIFNIT1dfQUNUSVZFIH0gZnJvbSAnLi4vY29uc3RhbnRzL1RvZG9GaWx0ZXJzJ1xuXG5jb25zdCBUT0RPX0ZJTFRFUlMgPSB7XG4gIFtTSE9XX0FMTF06ICgpID0+IHRydWUsXG4gIFtTSE9XX0FDVElWRV06IHRvZG8gPT4gIXRvZG8uY29tcGxldGVkLFxuICBbU0hPV19DT01QTEVURURdOiB0b2RvID0+IHRvZG8uY29tcGxldGVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0b2RvczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gICAgYWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0ZSA9IHsgZmlsdGVyOiBTSE9XX0FMTCB9XG5cbiAgaGFuZGxlQ2xlYXJDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5hY3Rpb25zLmNsZWFyQ29tcGxldGVkKClcbiAgfVxuXG4gIGhhbmRsZVNob3cgPSBmaWx0ZXIgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXIgfSlcbiAgfVxuXG4gIHJlbmRlclRvZ2dsZUFsbChjb21wbGV0ZWRDb3VudCkge1xuICAgIGNvbnN0IHsgdG9kb3MsIGFjdGlvbnMgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAodG9kb3MubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRvZ2dsZS1hbGxcIlxuICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NvbXBsZXRlZENvdW50ID09PSB0b2Rvcy5sZW5ndGh9XG4gICAgICAgICAgICAgICBvbkNoYW5nZT17YWN0aW9ucy5jb21wbGV0ZUFsbH0gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXJGb290ZXIoY29tcGxldGVkQ291bnQpIHtcbiAgICBjb25zdCB7IHRvZG9zIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBmaWx0ZXIgfSA9IHRoaXMuc3RhdGVcbiAgICBjb25zdCBhY3RpdmVDb3VudCA9IHRvZG9zLmxlbmd0aCAtIGNvbXBsZXRlZENvdW50XG5cbiAgICBpZiAodG9kb3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Rm9vdGVyIGNvbXBsZXRlZENvdW50PXtjb21wbGV0ZWRDb3VudH1cbiAgICAgICAgICAgICAgICBhY3RpdmVDb3VudD17YWN0aXZlQ291bnR9XG4gICAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICAgICAgb25DbGVhckNvbXBsZXRlZD17dGhpcy5oYW5kbGVDbGVhckNvbXBsZXRlZH1cbiAgICAgICAgICAgICAgICBvblNob3c9e3RoaXMuaGFuZGxlU2hvd30gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0b2RvcywgYWN0aW9ucyB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgZmlsdGVyIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9kb3MuZmlsdGVyKFRPRE9fRklMVEVSU1tmaWx0ZXJdKVxuICAgIGNvbnN0IGNvbXBsZXRlZENvdW50ID0gdG9kb3MucmVkdWNlKChjb3VudCwgdG9kbykgPT5cbiAgICAgIHRvZG8uY29tcGxldGVkID8gY291bnQgKyAxIDogY291bnQsXG4gICAgICAwXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAge3RoaXMucmVuZGVyVG9nZ2xlQWxsKGNvbXBsZXRlZENvdW50KX1cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxuICAgICAgICAgIHtmaWx0ZXJlZFRvZG9zLm1hcCh0b2RvID0+XG4gICAgICAgICAgICA8VG9kb0l0ZW0ga2V5PXt0b2RvLmlkfSB0b2RvPXt0b2RvfSB7Li4uYWN0aW9uc30gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICB7dGhpcy5yZW5kZXJGb290ZXIoY29tcGxldGVkQ291bnQpfVxuICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NYWluU2VjdGlvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgVG9kb1RleHRJbnB1dCBmcm9tICcuL1RvZG9UZXh0SW5wdXQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0b2RvOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZWRpdFRvZG86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGVsZXRlVG9kbzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjb21wbGV0ZVRvZG86IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGVkaXRpbmc6IGZhbHNlXG4gIH1cblxuICBoYW5kbGVEb3VibGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZzogdHJ1ZSB9KVxuICB9XG5cbiAgaGFuZGxlU2F2ZSA9IChpZCwgdGV4dCkgPT4ge1xuICAgIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5wcm9wcy5kZWxldGVUb2RvKGlkKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BzLmVkaXRUb2RvKGlkLCB0ZXh0KVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgZWRpdGluZzogZmFsc2UgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvZG8sIGNvbXBsZXRlVG9kbywgZGVsZXRlVG9kbyB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGVsZW1lbnRcbiAgICBpZiAodGhpcy5zdGF0ZS5lZGl0aW5nKSB7XG4gICAgICBlbGVtZW50ID0gKFxuICAgICAgICA8VG9kb1RleHRJbnB1dCB0ZXh0PXt0b2RvLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgIGVkaXRpbmc9e3RoaXMuc3RhdGUuZWRpdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgb25TYXZlPXsodGV4dCkgPT4gdGhpcy5oYW5kbGVTYXZlKHRvZG8uaWQsIHRleHQpfSAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50ID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdcIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidG9nZ2xlXCJcbiAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgY2hlY2tlZD17dG9kby5jb21wbGV0ZWR9XG4gICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBjb21wbGV0ZVRvZG8odG9kby5pZCl9IC8+XG4gICAgICAgICAgPGxhYmVsIG9uRG91YmxlQ2xpY2s9e3RoaXMuaGFuZGxlRG91YmxlQ2xpY2t9PlxuICAgICAgICAgICAge3RvZG8udGV4dH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGVzdHJveVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvKHRvZG8uaWQpfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh7XG4gICAgICAgIGNvbXBsZXRlZDogdG9kby5jb21wbGV0ZWQsXG4gICAgICAgIGVkaXRpbmc6IHRoaXMuc3RhdGUuZWRpdGluZ1xuICAgICAgfSl9PlxuICAgICAgICB7ZWxlbWVudH1cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RvZG9JdGVtLmpzIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtzdHlsZXNoZWV0fSBmcm9tICd0b2RvbXZjLWFwcC1jc3MvaW5kZXguY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJ1xuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpblNlY3Rpb24nXG5pbXBvcnQgKiBhcyBUb2RvQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJ1xuXG5jb25zdCBBcHAgPSAoe3RvZG9zLCBhY3Rpb25zfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRvZG9hcHBcIj5cbiAgICA8SGVhZD48c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHN0eWxlc2hlZXR9fSAvPjwvSGVhZD5cbiAgICA8SGVhZGVyIGFkZFRvZG89e2FjdGlvbnMuYWRkVG9kb30gLz5cbiAgICA8TWFpblNlY3Rpb24gdG9kb3M9e3RvZG9zfSBhY3Rpb25zPXthY3Rpb25zfSAvPlxuICA8L2Rpdj5cbilcblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgdG9kb3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBhY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdG9kb3M6IHN0YXRlLnRvZG9zXG59KVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhUb2RvQWN0aW9ucywgZGlzcGF0Y2gpXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wc1xuKShBcHApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL0FwcC5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHRvZG9zIGZyb20gJy4vdG9kb3MnXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgdG9kb3Ncbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsImltcG9ydCB7IEFERF9UT0RPLCBERUxFVEVfVE9ETywgRURJVF9UT0RPLCBDT01QTEVURV9UT0RPLCBDT01QTEVURV9BTEwsIENMRUFSX0NPTVBMRVRFRCB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0gW1xuICB7XG4gICAgdGV4dDogJ1VzZSBSZWR1eCcsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpZDogMFxuICB9XG5dXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUREX1RPRE86XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IHN0YXRlLnJlZHVjZSgobWF4SWQsIHRvZG8pID0+IE1hdGgubWF4KHRvZG8uaWQsIG1heElkKSwgLTEpICsgMSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgIHRleHQ6IGFjdGlvbi50ZXh0XG4gICAgICAgIH0sXG4gICAgICAgIC4uLnN0YXRlXG4gICAgICBdXG5cbiAgICBjYXNlIERFTEVURV9UT0RPOlxuICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcih0b2RvID0+XG4gICAgICAgIHRvZG8uaWQgIT09IGFjdGlvbi5pZFxuICAgICAgKVxuXG4gICAgY2FzZSBFRElUX1RPRE86XG4gICAgICByZXR1cm4gc3RhdGUubWFwKHRvZG8gPT5cbiAgICAgICAgdG9kby5pZCA9PT0gYWN0aW9uLmlkID9cbiAgICAgICAgICB7IC4uLnRvZG8sIHRleHQ6IGFjdGlvbi50ZXh0IH0gOlxuICAgICAgICAgIHRvZG9cbiAgICAgIClcblxuICAgIGNhc2UgQ09NUExFVEVfVE9ETzpcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAodG9kbyA9PlxuICAgICAgICB0b2RvLmlkID09PSBhY3Rpb24uaWQgP1xuICAgICAgICAgIHsgLi4udG9kbywgY29tcGxldGVkOiAhdG9kby5jb21wbGV0ZWQgfSA6XG4gICAgICAgICAgdG9kb1xuICAgICAgKVxuXG4gICAgY2FzZSBDT01QTEVURV9BTEw6XG4gICAgICBjb25zdCBhcmVBbGxNYXJrZWQgPSBzdGF0ZS5ldmVyeSh0b2RvID0+IHRvZG8uY29tcGxldGVkKVxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCh0b2RvID0+ICh7XG4gICAgICAgIC4uLnRvZG8sXG4gICAgICAgIGNvbXBsZXRlZDogIWFyZUFsbE1hcmtlZFxuICAgICAgfSkpXG5cbiAgICBjYXNlIENMRUFSX0NPTVBMRVRFRDpcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZCA9PT0gZmFsc2UpXG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL3RvZG9zLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQWJBO0FBQUE7Ozs7O0FBbkNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUZBO0FBQ0E7Ozs7Ozs7OztBQ0xBO0FBQ0E7Ozs7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDTkE7QUFDQTs7OztBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7OztBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFHQTtBQUhBO0FBQUE7Ozs7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFNQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTs7Ozs7QUF4REE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUxBOzs7Ozs7QUFmQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFHQTtBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUFNQTtBQUdBO0FBR0E7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFIQTtBQUtBO0FBTEE7QUFBQTtBQU1BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBQUE7QUFPQTs7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7OztBQTlEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBREE7QUFGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFBQTs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFJQTtBQUpBO0FBQUE7QUFGQTtBQVFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFJQTtBQUpBO0FBSUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7QUFEQTtBQUFBO0FBSUE7QUFKQTs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUlBO0FBSkE7QUFBQTs7Ozs7QUFwREE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7O0FBQ0E7QUFBQTtBQURBO0FBQ0E7QUFHQTs7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBSEE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7OztBQUNBO0FBR0E7QUFDQTtBQUlBO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBRkE7QUFDQTtBQU9BO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        