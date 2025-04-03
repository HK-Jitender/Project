"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var jwt = require('jsonwebtoken');
var moment = require('moment');
var _require = require('sequelize'),
  Op = _require.Op;
var config = require('../config/config');
var _require2 = require('../config/tokens'),
  tokenTypes = _require2.tokenTypes;
var TokenDao = require('../dao/TokenDao');
var RedisService = require('./RedisService');
var TokenService = /*#__PURE__*/(0, _createClass2["default"])(function TokenService() {
  var _this = this;
  (0, _classCallCheck2["default"])(this, TokenService);
  /**
   * Generate token
   * @param {string} uuid
   * @param {Moment} expires
   * @param {string} type
   * @param {string} [secret]
   * @returns {string}
   */
  (0, _defineProperty2["default"])(this, "generateToken", function (uuid, expires, type) {
    var secret = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : config.jwt.secret;
    var payload = {
      sub: uuid,
      iat: moment().unix(),
      exp: expires.unix(),
      type: type
    };
    return jwt.sign(payload, secret);
  });
  (0, _defineProperty2["default"])(this, "verifyToken", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(token, type) {
      var payload, tokenDoc;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return jwt.verify(token, config.jwt.secret, function (err, decoded) {
              if (err) {
                throw new Error('Token not found');
              } else {
                // if everything is good, save to request for use in other routes
                return decoded;
              }
            });
          case 2:
            payload = _context.sent;
            _context.next = 5;
            return _this.tokenDao.findOne({
              token: token,
              type: type,
              user_uuid: payload.sub,
              blacklisted: false
            });
          case 5:
            tokenDoc = _context.sent;
            if (tokenDoc) {
              _context.next = 8;
              break;
            }
            throw new Error('Token not found');
          case 8:
            return _context.abrupt("return", tokenDoc);
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
   * Save a token
   * @param {string} token
   * @param {integer} userId
   * @param {Moment} expires
   * @param {string} type
   * @param {boolean} [blacklisted]
   * @returns {Promise<Token>}
   */
  (0, _defineProperty2["default"])(this, "saveToken", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(token, userId, expires, type) {
      var blacklisted,
        _args2 = arguments;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            blacklisted = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : false;
            return _context2.abrupt("return", _this.tokenDao.create({
              token: token,
              user_id: userId,
              expires: expires.toDate(),
              type: type,
              blacklisted: blacklisted
            }));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x3, _x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }());
  /**
   * Save a multiple token
   * @param {Object} tokens
   * @returns {Promise<Token>}
   */
  (0, _defineProperty2["default"])(this, "saveMultipleTokens", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(tokens) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _this.tokenDao.bulkCreate(tokens));
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x7) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "removeTokenById", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _this.tokenDao.remove({
              id: id
            }));
          case 1:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  /**
   * Generate auth tokens
   * @param {{}} user
   * @returns {Promise<Object>}
   */
  (0, _defineProperty2["default"])(this, "generateAuthTokens", /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
      var accessTokenExpires, accessToken, refreshTokenExpires, refreshToken, authTokens, expiredAccessTokenWhere, expiredRefreshTokenWhere, tokens;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
            _context5.next = 3;
            return _this.generateToken(user.uuid, accessTokenExpires, tokenTypes.ACCESS);
          case 3:
            accessToken = _context5.sent;
            refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
            _context5.next = 7;
            return _this.generateToken(user.uuid, refreshTokenExpires, tokenTypes.REFRESH);
          case 7:
            refreshToken = _context5.sent;
            authTokens = [];
            authTokens.push({
              token: accessToken,
              user_uuid: user.uuid,
              expires: accessTokenExpires.toDate(),
              type: tokenTypes.ACCESS,
              blacklisted: false
            });
            authTokens.push({
              token: refreshToken,
              user_uuid: user.uuid,
              expires: refreshTokenExpires.toDate(),
              type: tokenTypes.REFRESH,
              blacklisted: false
            });
            _context5.next = 13;
            return _this.saveMultipleTokens(authTokens);
          case 13:
            expiredAccessTokenWhere = {
              expires: (0, _defineProperty2["default"])({}, Op.lt, moment()),
              type: tokenTypes.ACCESS
            };
            _context5.next = 16;
            return _this.tokenDao.remove(expiredAccessTokenWhere);
          case 16:
            expiredRefreshTokenWhere = {
              expires: (0, _defineProperty2["default"])({}, Op.lt, moment()),
              type: tokenTypes.REFRESH
            };
            _context5.next = 19;
            return _this.tokenDao.remove(expiredRefreshTokenWhere);
          case 19:
            tokens = {
              access: {
                token: accessToken,
                expires: accessTokenExpires.toDate()
              },
              refresh: {
                token: refreshToken,
                expires: refreshTokenExpires.toDate()
              }
            };
            _context5.next = 22;
            return _this.redisService.createTokens(user.uuid, tokens);
          case 22:
            return _context5.abrupt("return", tokens);
          case 23:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function (_x9) {
      return _ref5.apply(this, arguments);
    };
  }());
  this.tokenDao = new TokenDao();
  this.redisService = new RedisService();
});
export default  TokenService;