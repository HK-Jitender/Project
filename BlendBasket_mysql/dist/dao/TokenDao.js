"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var SuperDao = require('./SuperDao');
var models = require('../models');
var Token = models.token;
var TokenDao = /*#__PURE__*/function (_SuperDao) {
  function TokenDao() {
    (0, _classCallCheck2["default"])(this, TokenDao);
    return _callSuper(this, TokenDao, [Token]);
  }
  (0, _inherits2["default"])(TokenDao, _SuperDao);
  return (0, _createClass2["default"])(TokenDao, [{
    key: "findOne",
    value: function () {
      var _findOne = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(where) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", Token.findOne({
                where: where
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function findOne(_x) {
        return _findOne.apply(this, arguments);
      }
      return findOne;
    }()
  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(where) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", Token.destroy({
                where: where
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function remove(_x2) {
        return _remove.apply(this, arguments);
      }
      return remove;
    }()
  }]);
}(SuperDao);
module.exports = TokenDao;