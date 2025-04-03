"use strict";

var logError = function logError(err) {
  console.error(err);
};
var logErrorMiddleware = function logErrorMiddleware(err, req, res, next) {
  logError(err);
  next(err);
};
var returnError = function returnError(statusCode, message) {
  return {
    statusCode: statusCode,
    response: {
      status: false,
      code: statusCode,
      message: message
    }
  };
};
var returnSuccess = function returnSuccess(statusCode, message) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return {
    statusCode: statusCode,
    response: {
      status: true,
      code: statusCode,
      message: message,
      data: data
    }
  };
};
var getPaginationData = function getPaginationData(rows, page, limit) {
  var totalItems = rows.count,
    data = rows.rows;
  var currentPage = page ? +page : 0;
  var totalPages = Math.ceil(totalItems / limit);
  return {
    totalItems: totalItems,
    data: data,
    totalPages: totalPages,
    currentPage: currentPage
  };
};
module.exports = {
  logError: logError,
  logErrorMiddleware: logErrorMiddleware,
  returnError: returnError,
  returnSuccess: returnSuccess,
  getPaginationData: getPaginationData
};