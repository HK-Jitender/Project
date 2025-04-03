"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorHandler = exports.errorConverter = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _httpStatus = _interopRequireDefault(require("http-status"));
var _config = _interopRequireDefault(require("../config/config.js"));
var _ApiError = _interopRequireDefault(require("../helper/ApiError.js"));
var _logger = _interopRequireDefault(require("../config/logger.js"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } // const httpStatus = require('http-status');
// const config = require('../config/config');
// const ApiError = require('../helper/ApiError');
// const logger = require('../config/logger');
// const errorConverter = (err, req, res, next) => {
//     let error = err;
//     if (!(error instanceof ApiError)) {
//         const statusCode = error.statusCode
//             ? httpStatus.BAD_REQUEST
//             : httpStatus.INTERNAL_SERVER_ERROR;
//         const message = error.message || httpStatus[statusCode];
//         error = new ApiError(statusCode, message, false, err.stack);
//     }
//     next(error);
// };
// // eslint-disable-next-line no-unused-vars
// const errorHandler = (err, req, res, next) => {
//     let { statusCode, message } = err;
//     if (config.env === 'production' && !err.isOperational) {
//         statusCode = httpStatus.INTERNAL_SERVER_ERROR;
//         message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
//     }
//     res.locals.errorMessage = err.message;
//     const response = {
//         code: statusCode,
//         message,
//         ...(config.env === 'development' && { stack: err.stack }),
//     };
//     if (config.env === 'development') {
//         logger.error(err);
//     }
//     res.status(statusCode).send(response);
// };
// module.exports = {
//     errorConverter,
//     errorHandler,
// };
var errorConverter = exports.errorConverter = function errorConverter(err, req, res, next) {
  var error = err;
  if (!(error instanceof _ApiError["default"])) {
    var statusCode = error.statusCode ? _httpStatus["default"].BAD_REQUEST : _httpStatus["default"].INTERNAL_SERVER_ERROR;
    var message = error.message || _httpStatus["default"][statusCode];
    error = new _ApiError["default"](statusCode, message, false, err.stack);
  }
  next(error);
};

// eslint-disable-next-line no-unused-vars
var errorHandler = exports.errorHandler = function errorHandler(err, req, res, next) {
  var statusCode = err.statusCode,
    message = err.message;
  if (_config["default"].env === 'production' && !err.isOperational) {
    statusCode = _httpStatus["default"].INTERNAL_SERVER_ERROR;
    message = _httpStatus["default"][_httpStatus["default"].INTERNAL_SERVER_ERROR];
  }
  res.locals.errorMessage = err.message;
  var response = _objectSpread({
    code: statusCode,
    message: message
  }, _config["default"].env === 'development' && {
    stack: err.stack
  });
  if (_config["default"].env === 'development') {
    _logger["default"].error(err);
  }
  res.status(statusCode).send(response);
};

// Use ES module export