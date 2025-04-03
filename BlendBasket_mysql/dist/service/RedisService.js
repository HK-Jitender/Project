"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var redisClient = require('../config/redisClient');
var RedisHelper = require('../helper/RedisHelper');
var _require = require('../config/config'),
  jwt = _require.jwt;
var RedisService = /*#__PURE__*/(0, _createClass2["default"])(function RedisService() {
  var _this = this;
  (0, _classCallCheck2["default"])(this, RedisService);
  /**
   * Create access and refresh tokens
   * @param {String} uuid
   * @param {Object} tokens
   * @returns {boolean}
   */
  (0, _defineProperty2["default"])(this, "createTokens", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(uuid, tokens) {
      var accessKey, refreshKey, accessKeyExpires, refreshKeyExpires;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            accessKey = "access_token:".concat(tokens.access.token);
            refreshKey = "refresh_token:".concat(tokens.refresh.token);
            accessKeyExpires = jwt.accessExpirationMinutes * 60;
            refreshKeyExpires = jwt.refreshExpirationDays * 24 * 60 * 60;
            _context.next = 6;
            return _this.redisHelper.setEx(accessKey, accessKeyExpires, uuid);
          case 6:
            _context.next = 8;
            return _this.redisHelper.setEx(refreshKey, refreshKeyExpires, uuid);
          case 8:
            return _context.abrupt("return", true);
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  /**
   * Create access and refresh tokens
   * @param {String} token
   * @param {String} type [access_token,refresh_token]
   * @returns {boolean}
   */
  (0, _defineProperty2["default"])(this, "hasToken", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(token) {
      var type,
        hasToken,
        _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            type = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'access_token';
            _context2.next = 3;
            return _this.redisHelper.get("".concat(type, ":").concat(token));
          case 3:
            hasToken = _context2.sent;
            if (!(hasToken != null)) {
              _context2.next = 6;
              break;
            }
            return _context2.abrupt("return", true);
          case 6:
            return _context2.abrupt("return", false);
          case 7:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  /**
   * Remove access and refresh tokens
   * @param {String} token
   * @param {String} type [access_token,refreshToken]
   * @returns {boolean}
   */
  (0, _defineProperty2["default"])(this, "removeToken", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(token) {
      var type,
        _args3 = arguments;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            type = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : 'access_token';
            return _context3.abrupt("return", _this.redisHelper.del("".concat(type, ":").concat(token)));
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x4) {
      return _ref3.apply(this, arguments);
    };
  }());
  /**
   * Get user
   * @param {String} uuid
   * @returns {Object/Boolean}
   */
  (0, _defineProperty2["default"])(this, "getUser", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(uuid) {
      var user;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _this.redisHelper.get("user:".concat(uuid));
          case 2:
            user = _context4.sent;
            if (!(user != null)) {
              _context4.next = 5;
              break;
            }
            return _context4.abrupt("return", JSON.parse(user));
          case 5:
            return _context4.abrupt("return", false);
          case 6:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x5) {
      return _ref4.apply(this, arguments);
    };
  }());
  /**
   * Set user
   * @param {Object} user
   * @returns {boolean}
   */
  (0, _defineProperty2["default"])(this, "setUser", /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
      var setUser;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _this.redisHelper.set("user:".concat(user.uuid), JSON.stringify(user));
          case 2:
            setUser = _context5.sent;
            if (setUser) {
              _context5.next = 5;
              break;
            }
            return _context5.abrupt("return", true);
          case 5:
            return _context5.abrupt("return", false);
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x6) {
      return _ref5.apply(this, arguments);
    };
  }());
  this.redisHelper = new RedisHelper(redisClient);
});
module.exports = RedisService;