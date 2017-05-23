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