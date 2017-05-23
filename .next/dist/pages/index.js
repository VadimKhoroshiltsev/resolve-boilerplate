'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _App = require('../containers/App');

var _App2 = _interopRequireDefault(_App);

var _reducers = require('../reducers');

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