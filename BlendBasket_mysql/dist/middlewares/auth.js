"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var passport = require('passport');
var httpStatus = require('http-status');
var ApiError = require('../helper/ApiError');
var verifyCallback = function verifyCallback(req, res, resolve, reject) {
  return /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(err, user, info) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(err || info || !user)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return", reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate')));
          case 2:
            req.user = user;
            resolve();
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};
var auth = function auth() {
  return /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              passport.authenticate('jwt', {
                session: false
              }, verifyCallback(req, res, resolve, reject))(req, res, next);
            }).then(function () {
              return next();
            })["catch"](function (err) {
              return next(err);
            }));
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
};
module.exports = auth;