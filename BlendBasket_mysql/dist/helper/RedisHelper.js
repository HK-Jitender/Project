"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var RedisHelper = /*#__PURE__*/(0, _createClass2["default"])(function RedisHelper(redisClient) {
  var _this = this;
  (0, _classCallCheck2["default"])(this, RedisHelper);
  /**
   * Set Value
   * @param {String} key
   * @param {String/JSON} value
   * @returns {String/Boolean}
   */
  (0, _defineProperty2["default"])(this, "set", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(key, value) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (typeof value === 'JSON') value = JSON.stringify(value);
            _context.next = 4;
            return _this.redisClient.set(key, value);
          case 4:
            return _context.abrupt("return", _context.sent);
          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", false);
          case 10:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 7]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  /**
   * Set Value with Expiry
   * @param {String} key
   * @param {Integer} seconds
   * @param {String/JSON} value
   * @returns {String/boolean}
   */
  (0, _defineProperty2["default"])(this, "setEx", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(key, seconds, value) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (typeof value === 'JSON') value = JSON.stringify(value);
            _context2.next = 4;
            return _this.redisClient.setEx(key, seconds, value);
          case 4:
            return _context2.abrupt("return", _context2.sent);
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", false);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4, _x5) {
      return _ref2.apply(this, arguments);
    };
  }());
  /**
   * Get Value
   * @param {String} key
   * @returns {String>}
   */
  (0, _defineProperty2["default"])(this, "get", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(key) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _this.redisClient.get(key);
          case 3:
            return _context3.abrupt("return", _context3.sent);
          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", null);
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 6]]);
    }));
    return function (_x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  /**
   * Delete Value
   * @param {String} key
   * @returns {Boolean}
   */
  (0, _defineProperty2["default"])(this, "del", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(key) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _this.redisClient.del(key);
          case 3:
            return _context4.abrupt("return", _context4.sent);
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", false);
          case 9:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 6]]);
    }));
    return function (_x7) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "scanStream", /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(key) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this.redisClient.scanStream({
              // only returns keys following the pattern of "key"
              match: key,
              // returns approximately 100 elements per call
              count: 100
            });
          case 3:
            _context5.next = 8;
            break;
          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", false);
          case 8:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 5]]);
    }));
    return function (_x8) {
      return _ref5.apply(this, arguments);
    };
  }());
  this.redisClient = redisClient;
});
module.exports = RedisHelper;