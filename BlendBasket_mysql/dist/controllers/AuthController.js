"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var httpStatus = require('http-status');
var AuthService = require('../service/AuthService');
var TokenService = require('../service/TokenService');
var UserService = require('../service/UserService');
var logger = require('../config/logger');
var _require = require('../config/tokens'),
  tokenTypes = _require.tokenTypes;
var AuthController = /*#__PURE__*/(0, _createClass2["default"])(function AuthController() {
  var _this = this;
  (0, _classCallCheck2["default"])(this, AuthController);
  (0, _defineProperty2["default"])(this, "register", /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var user, tokens, status, _user$response, message, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _this.userService.createUser(req.body);
          case 3:
            user = _context.sent;
            tokens = {};
            status = user.response.status;
            if (!user.response.status) {
              _context.next = 10;
              break;
            }
            _context.next = 9;
            return _this.tokenService.generateAuthTokens(user.response.data);
          case 9:
            tokens = _context.sent;
          case 10:
            _user$response = user.response, message = _user$response.message, data = _user$response.data;
            res.status(user.statusCode).send({
              status: status,
              message: message,
              data: data,
              tokens: tokens
            });
            _context.next = 18;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            logger.error(_context.t0);
            res.status(httpStatus.BAD_GATEWAY).send(_context.t0);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14]]);
    }));
    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "checkEmail", /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var isExists;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _this.userService.isEmailExists(req.body.email.toLowerCase());
          case 3:
            isExists = _context2.sent;
            res.status(isExists.statusCode).send(isExists.response);
            _context2.next = 11;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            logger.error(_context2.t0);
            res.status(httpStatus.BAD_GATEWAY).send(_context2.t0);
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "login", /*#__PURE__*/function () {
    var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var _req$body, email, password, user, message, data, status, code, tokens;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context3.next = 4;
            return _this.authService.loginWithEmailPassword(email.toLowerCase(), password);
          case 4:
            user = _context3.sent;
            message = user.response.message;
            data = user.response.data;
            status = user.response.status;
            code = user.statusCode;
            tokens = {};
            if (!user.response.status) {
              _context3.next = 14;
              break;
            }
            _context3.next = 13;
            return _this.tokenService.generateAuthTokens(data);
          case 13:
            tokens = _context3.sent;
          case 14:
            res.status(user.statusCode).send({
              status: status,
              code: code,
              message: message,
              data: data,
              tokens: tokens
            });
            _context3.next = 21;
            break;
          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](0);
            logger.error(_context3.t0);
            res.status(httpStatus.BAD_GATEWAY).send(_context3.t0);
          case 21:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 17]]);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "logout", /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _this.authService.logout(req, res);
          case 2:
            res.status(httpStatus.NO_CONTENT).send();
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "refreshTokens", /*#__PURE__*/function () {
    var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var refreshTokenDoc, user, tokens;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _this.tokenService.verifyToken(req.body.refresh_token, tokenTypes.REFRESH);
          case 3:
            refreshTokenDoc = _context5.sent;
            _context5.next = 6;
            return _this.userService.getUserByUuid(refreshTokenDoc.user_uuid);
          case 6:
            user = _context5.sent;
            if (user == null) {
              res.status(httpStatus.BAD_GATEWAY).send('User Not Found!');
            }
            _context5.next = 10;
            return _this.tokenService.removeTokenById(refreshTokenDoc.id);
          case 10:
            _context5.next = 12;
            return _this.tokenService.generateAuthTokens(user);
          case 12:
            tokens = _context5.sent;
            res.send(tokens);
            _context5.next = 20;
            break;
          case 16:
            _context5.prev = 16;
            _context5.t0 = _context5["catch"](0);
            logger.error(_context5.t0);
            res.status(httpStatus.BAD_GATEWAY).send(_context5.t0);
          case 20:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 16]]);
    }));
    return function (_x9, _x10) {
      return _ref5.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "changePassword", /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var responseData;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _this.userService.changePassword(req.body, req.user.uuid);
          case 3:
            responseData = _context6.sent;
            res.status(responseData.statusCode).send(responseData.response);
            _context6.next = 11;
            break;
          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            logger.error(_context6.t0);
            res.status(httpStatus.BAD_GATEWAY).send(_context6.t0);
          case 11:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 7]]);
    }));
    return function (_x11, _x12) {
      return _ref6.apply(this, arguments);
    };
  }());
  this.userService = new UserService();
  this.tokenService = new TokenService();
  this.authService = new AuthService();
});
module.exports = AuthController;