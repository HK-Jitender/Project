"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var _require = require('sequelize'),
  Model = _require.Model;
module.exports = function (sequelize, DataTypes) {
  var Token = /*#__PURE__*/function (_Model) {
    function Token() {
      (0, _classCallCheck2["default"])(this, Token);
      return _callSuper(this, Token, arguments);
    }
    (0, _inherits2["default"])(Token, _Model);
    return (0, _createClass2["default"])(Token);
  }(Model);
  Token.init({
    token: DataTypes.STRING,
    user_uuid: DataTypes.UUID,
    type: DataTypes.STRING,
    expires: DataTypes.DATE,
    blacklisted: DataTypes.BOOLEAN
  }, {
    sequelize: sequelize,
    modelName: 'token',
    underscored: true
  });
  return Token;
};