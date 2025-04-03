"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var dotenv = require('dotenv');
var path = require('path');
var Joi = require('joi');
dotenv.config({
  path: path.join(__dirname, '../../.env')
});
var envValidation = Joi.object().keys({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  PORT: Joi.number()["default"](3000),
  DB_HOST: Joi.string()["default"]('localhost'),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
  JWT_SECRET: Joi.string().required().description('JWT secret key'),
  JWT_ACCESS_EXPIRATION_MINUTES: Joi.number()["default"](30).description('minutes after which access tokens expire'),
  JWT_REFRESH_EXPIRATION_DAYS: Joi.number()["default"](30).description('days after which refresh tokens expire'),
  JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()["default"](10).description('minutes after which reset password token expires'),
  JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()["default"](10).description('minutes after which verify email token expires'),
  LOG_FOLDER: Joi.string().required(),
  LOG_FILE: Joi.string().required(),
  LOG_LEVEL: Joi.string().required(),
  REDIS_HOST: Joi.string()["default"]('127.0.0.1'),
  REDIS_PORT: Joi.number()["default"](6379),
  REDIS_USE_PASSWORD: Joi.string()["default"]('no'),
  REDIS_PASSWORD: Joi.string()
}).unknown();
var _envValidation$prefs$ = envValidation.prefs({
    errors: {
      label: 'key'
    }
  }).validate(process.env),
  envVar = _envValidation$prefs$.value,
  error = _envValidation$prefs$.error;
if (error) {
  throw new Error("Config validation error: ".concat(error.message));
}
var _default = exports["default"] = {
  nodeEnv: envVar.NODE_ENV,
  port: envVar.PORT,
  dbHost: envVar.DB_HOST,
  dbUser: envVar.DB_USER,
  dbPass: envVar.DB_PASS,
  dbName: envVar.DB_NAME,
  jwt: {
    secret: envVar.JWT_SECRET,
    accessExpirationMinutes: envVar.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVar.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVar.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVar.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES
  },
  logConfig: {
    logFolder: envVar.LOG_FOLDER,
    logFile: envVar.LOG_FILE,
    logLevel: envVar.LOG_LEVEL
  },
  redis: {
    host: envVar.REDIS_HOST,
    port: envVar.REDIS_PORT,
    usePassword: envVar.REDIS_USE_PASSWORD,
    password: envVar.REDIS_PASSWORD
  }
};