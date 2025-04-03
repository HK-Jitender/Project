"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var bcrypt = require('bcryptjs');
var httpStatus = require('http-status');
var UserDao = require('../dao/UserDao');
var TokenDao = require('../dao/TokenDao');
var _require = require('../config/tokens'),
  tokenTypes = _require.tokenTypes;
var responseHandler = require('../helper/responseHandler');
var logger = require('../config/logger');
var RedisService = require('./RedisService');
var AuthService = /*#__PURE__*/(0, _createClass2["default"])(function AuthService() {
  var _this = this;
  (0, _classCallCheck2["default"])(this, AuthService);
  /**
   * Create a user
   * @param {String} email
   * @param {String} password
   * @returns {Promise<{response: {code: *, message: *, status: boolean}, statusCode: *}>}
   */
  (0, _defineProperty2["default"])(this, "loginWithEmailPassword", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(email, password) {
      var message, statusCode, user, isPasswordValid;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            message = 'Login Successful';
            statusCode = httpStatus.OK;
            _context.next = 5;
            return _this.userDao.findByEmail(email);
          case 5:
            user = _context.sent;
            if (!(user == null)) {
              _context.next = 8;
              break;
            }
            return _context.abrupt("return", responseHandler.returnError(httpStatus.BAD_REQUEST, 'Invalid Email Address!'));
          case 8:
            _context.next = 10;
            return bcrypt.compare(password, user.password);
          case 10:
            isPasswordValid = _context.sent;
            user = user.toJSON();
            delete user.password;
            if (isPasswordValid) {
              _context.next = 17;
              break;
            }
            statusCode = httpStatus.BAD_REQUEST;
            message = 'Wrong Password!';
            return _context.abrupt("return", responseHandler.returnError(statusCode, message));
          case 17:
            return _context.abrupt("return", responseHandler.returnSuccess(statusCode, message, user));
          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](0);
            logger.error(_context.t0);
            return _context.abrupt("return", responseHandler.returnError(httpStatus.BAD_GATEWAY, 'Something Went Wrong!!'));
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 20]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "logout", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var refreshTokenDoc;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _this.tokenDao.findOne({
              token: req.body.refresh_token,
              type: tokenTypes.REFRESH,
              blacklisted: false
            });
          case 2:
            refreshTokenDoc = _context2.sent;
            if (refreshTokenDoc) {
              _context2.next = 5;
              break;
            }
            return _context2.abrupt("return", false);
          case 5:
            _context2.next = 7;
            return _this.tokenDao.remove({
              token: req.body.refresh_token,
              type: tokenTypes.REFRESH,
              blacklisted: false
            });
          case 7:
            _context2.next = 9;
            return _this.tokenDao.remove({
              token: req.body.access_token,
              type: tokenTypes.ACCESS,
              blacklisted: false
            });
          case 9:
            _context2.next = 11;
            return _this.redisService.removeToken(req.body.access_token, 'access_token');
          case 11:
            _context2.next = 13;
            return _this.redisService.removeToken(req.body.refresh_token, 'refresh_token');
          case 13:
            return _context2.abrupt("return", true);
          case 14:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  this.userDao = new UserDao();
  this.tokenDao = new TokenDao();
  this.redisService = new RedisService();
});
module.exports = AuthService;