"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var Joi = require('joi');
var httpStatus = require('http-status');
var ApiError = require('../helper/ApiError');
var UserValidator = /*#__PURE__*/function () {
  function UserValidator() {
    (0, _classCallCheck2["default"])(this, UserValidator);
  }
  return (0, _createClass2["default"])(UserValidator, [{
    key: "userCreateValidator",
    value: function () {
      var _userCreateValidator = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var schema, options, _schema$validate, error, value, errorMessage;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // create schema object
              schema = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().min(6).required(),
                confirm_password: Joi.string().valid(Joi.ref('password')).required(),
                first_name: Joi.string(),
                last_name: Joi.string()
              }); // schema options
              options = {
                abortEarly: false,
                // include all errors
                allowUnknown: true,
                // ignore unknown props
                stripUnknown: true // remove unknown props
              }; // validate request body against schema
              _schema$validate = schema.validate(req.body, options), error = _schema$validate.error, value = _schema$validate.value;
              if (!error) {
                _context.next = 8;
                break;
              }
              // on fail return comma separated errors
              errorMessage = error.details.map(function (details) {
                return details.message;
              }).join(', ');
              next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
              _context.next = 10;
              break;
            case 8:
              // on success replace req.body with validated value and trigger next middleware function
              req.body = value;
              return _context.abrupt("return", next());
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function userCreateValidator(_x, _x2, _x3) {
        return _userCreateValidator.apply(this, arguments);
      }
      return userCreateValidator;
    }()
  }, {
    key: "userLoginValidator",
    value: function () {
      var _userLoginValidator = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var schema, options, _schema$validate2, error, value, errorMessage;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // create schema object
              schema = Joi.object({
                email: Joi.string().email().required(),
                password: Joi.string().min(6).required()
              }); // schema options
              options = {
                abortEarly: false,
                // include all errors
                allowUnknown: true,
                // ignore unknown props
                stripUnknown: true // remove unknown props
              }; // validate request body against schema
              _schema$validate2 = schema.validate(req.body, options), error = _schema$validate2.error, value = _schema$validate2.value;
              if (!error) {
                _context2.next = 8;
                break;
              }
              // on fail return comma separated errors
              errorMessage = error.details.map(function (details) {
                return details.message;
              }).join(', ');
              next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
              _context2.next = 10;
              break;
            case 8:
              // on success replace req.body with validated value and trigger next middleware function
              req.body = value;
              return _context2.abrupt("return", next());
            case 10:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function userLoginValidator(_x4, _x5, _x6) {
        return _userLoginValidator.apply(this, arguments);
      }
      return userLoginValidator;
    }()
  }, {
    key: "checkEmailValidator",
    value: function () {
      var _checkEmailValidator = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var schema, options, _schema$validate3, error, value, errorMessage;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // create schema object
              schema = Joi.object({
                email: Joi.string().email().required()
              }); // schema options
              options = {
                abortEarly: false,
                // include all errors
                allowUnknown: true,
                // ignore unknown props
                stripUnknown: true // remove unknown props
              }; // validate request body against schema
              _schema$validate3 = schema.validate(req.body, options), error = _schema$validate3.error, value = _schema$validate3.value;
              if (!error) {
                _context3.next = 8;
                break;
              }
              // on fail return comma separated errors
              errorMessage = error.details.map(function (details) {
                return details.message;
              }).join(', ');
              next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
              _context3.next = 10;
              break;
            case 8:
              // on success replace req.body with validated value and trigger next middleware function
              req.body = value;
              return _context3.abrupt("return", next());
            case 10:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function checkEmailValidator(_x7, _x8, _x9) {
        return _checkEmailValidator.apply(this, arguments);
      }
      return checkEmailValidator;
    }()
  }, {
    key: "changePasswordValidator",
    value: function () {
      var _changePasswordValidator = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
        var schema, options, _schema$validate4, error, value, errorMessage;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              // create schema object
              schema = Joi.object({
                old_password: Joi.string().required(),
                password: Joi.string().min(6).required(),
                confirm_password: Joi.string().min(6).required()
              }); // schema options
              options = {
                abortEarly: false,
                // include all errors
                allowUnknown: true,
                // ignore unknown props
                stripUnknown: true // remove unknown props
              }; // validate request body against schema
              _schema$validate4 = schema.validate(req.body, options), error = _schema$validate4.error, value = _schema$validate4.value;
              if (!error) {
                _context4.next = 8;
                break;
              }
              // on fail return comma separated errors
              errorMessage = error.details.map(function (details) {
                return details.message;
              }).join(', ');
              next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
              _context4.next = 10;
              break;
            case 8:
              // on success replace req.body with validated value and trigger next middleware function
              req.body = value;
              return _context4.abrupt("return", next());
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function changePasswordValidator(_x10, _x11, _x12) {
        return _changePasswordValidator.apply(this, arguments);
      }
      return changePasswordValidator;
    }()
  }]);
}();
module.exports = UserValidator;