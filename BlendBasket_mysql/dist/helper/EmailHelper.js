"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* eslint-disable class-methods-use-this */

var formData = require('form-data');
var Mailgun = require('mailgun.js');
var config = require('../config/config');
var logger = require('../config/logger');
var EmailHelper = /*#__PURE__*/function () {
  function EmailHelper() {
    (0, _classCallCheck2["default"])(this, EmailHelper);
  }
  return (0, _createClass2["default"])(EmailHelper, [{
    key: "sendEmail",
    value: function () {
      var _sendEmail = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(from, to, subject, body) {
        var auth,
          attachment,
          apiKey,
          domain,
          sender,
          mailgun,
          client,
          postData,
          _args = arguments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              auth = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
              attachment = _args.length > 5 && _args[5] !== undefined ? _args[5] : false;
              _context.prev = 2;
              apiKey = auth === null ? config.mailgun.apiKey : auth.apiKey;
              domain = auth === null ? config.mailgun.domain : auth.domain;
              sender = from === null ? config.systemEmail : from;
              mailgun = new Mailgun(formData);
              client = mailgun.client({
                username: 'api',
                key: apiKey
              });
              postData = {
                from: sender,
                to: to,
                subject: subject,
                html: body
              };
              if (attachment) {
                postData = _objectSpread(_objectSpread({}, postData), {}, {
                  attachment: attachment
                });
              }
              _context.next = 12;
              return client.messages.create(domain, postData);
            case 12:
              return _context.abrupt("return", !!_context.sent);
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);
              console.log(_context.t0);
              logger.error(_context.t0);
              return _context.abrupt("return", false);
            case 20:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[2, 15]]);
      }));
      function sendEmail(_x, _x2, _x3, _x4) {
        return _sendEmail.apply(this, arguments);
      }
      return sendEmail;
    }()
  }, {
    key: "sendEmailWithAttachment",
    value: function () {
      var _sendEmailWithAttachment = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(from, to, subject, text, body, attachment) {
        var auth,
          apiKey,
          domain,
          mailgun,
          attachments,
          client,
          postData,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              auth = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : null;
              _context2.prev = 1;
              apiKey = auth === null ? config.mailgun.apiKey : auth.apiKey;
              domain = auth === null ? config.mailgun.domain : auth.domain;
              mailgun = new Mailgun(formData);
              attachments = [attachment];
              client = mailgun.client({
                username: 'api',
                key: apiKey
              });
              postData = {
                from: from,
                to: to,
                subject: subject,
                text: text,
                html: body,
                attachments: attachments
              };
              _context2.next = 10;
              return client.messages.create(domain, postData);
            case 10:
              return _context2.abrupt("return", !!_context2.sent);
            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](1);
              logger.error(_context2.t0);
              return _context2.abrupt("return", false);
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[1, 13]]);
      }));
      function sendEmailWithAttachment(_x5, _x6, _x7, _x8, _x9, _x10) {
        return _sendEmailWithAttachment.apply(this, arguments);
      }
      return sendEmailWithAttachment;
    }()
  }]);
}();
module.exports = EmailHelper;