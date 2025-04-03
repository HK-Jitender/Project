"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var winston = require('winston');
var DailyRotateFile = require('winston-daily-rotate-file');
var config = require('./config');
var enumerateErrorFormat = winston.format(function (info) {
  if (info.message instanceof Error) {
    info.message = _objectSpread({
      message: info.message.message,
      stack: info.message.stack
    }, info.message);
  }
  if (info instanceof Error) {
    return _objectSpread({
      message: info.message,
      stack: info.stack
    }, info);
  }
  return info;
});
var transport = new DailyRotateFile({
  filename: config.logConfig.logFolder + config.logConfig.logFile,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '3',
  prepend: true
});
transport.on('rotate', function (oldFilename, newFilename) {
  // call function like upload to s3 or on cloud
});
var logger = winston.createLogger({
  format: winston.format.combine(enumerateErrorFormat(), winston.format.json()),
  transports: [transport, new winston.transports.Console({
    level: 'info'
  })]
});
var _default = exports["default"] = logger;