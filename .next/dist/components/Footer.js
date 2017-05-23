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

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TodoFilters = require('../constants/TodoFilters');

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