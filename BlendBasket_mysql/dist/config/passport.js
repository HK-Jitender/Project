"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jwtStrategy = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _passportJwt = require("passport-jwt");
var _UserDao = _interopRequireDefault(require("../dao/UserDao.js"));
var _config = _interopRequireDefault(require("./config.js"));
var _tokens = require("./tokens.js");
var _TokenDao = _interopRequireDefault(require("../dao/TokenDao.js"));
var _RedisService = _interopRequireDefault(require("../service/RedisService.js"));
var _User = _interopRequireDefault(require("../models/User.js"));
var User = _User["default"];
var jwtOptions = {
  secretOrKey: _config["default"].jwt.secret,
  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
  passReqToCallback: true
};
var jwtVerify = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, payload, done) {
    var userDao, tokenDao, redisService, authorization, tokenDoc, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!(payload.type !== _tokens.tokenTypes.ACCESS)) {
            _context.next = 3;
            break;
          }
          throw new Error('Invalid token type');
        case 3:
          userDao = new _UserDao["default"]();
          tokenDao = new _TokenDao["default"]();
          redisService = new _RedisService["default"]();
          authorization = req.headers.authorization !== undefined ? req.headers.authorization.split(' ') : [];
          if (!(authorization[1] === undefined)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", done(null, false));
        case 9:
          tokenDoc = redisService.hasToken(authorization[1], 'access_token');
          if (tokenDoc) {
            _context.next = 15;
            break;
          }
          console.log('Cache Missed!');
          _context.next = 14;
          return tokenDao.findOne({
            token: authorization[1],
            type: _tokens.tokenTypes.ACCESS,
            blacklisted: false
          });
        case 14:
          tokenDoc = _context.sent;
        case 15:
          if (tokenDoc) {
            _context.next = 17;
            break;
          }
          return _context.abrupt("return", done(null, false));
        case 17:
          _context.next = 19;
          return redisService.getUser(payload.sub);
        case 19:
          user = _context.sent;
          if (user) {
            user = new User(user);
          }
          if (user) {
            _context.next = 27;
            break;
          }
          console.log('User Cache Missed!');
          _context.next = 25;
          return userDao.findOneByWhere({
            uuid: payload.sub
          });
        case 25:
          user = _context.sent;
          redisService.setUser(user);
        case 27:
          if (user) {
            _context.next = 29;
            break;
          }
          return _context.abrupt("return", done(null, false));
        case 29:
          done(null, user);
          _context.next = 36;
          break;
        case 32:
          _context.prev = 32;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
          done(_context.t0, false);
        case 36:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 32]]);
  }));
  return function jwtVerify(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var jwtStrategy = exports.jwtStrategy = new _passportJwt.Strategy(jwtOptions, jwtVerify);

// Exporting the jwtStrategy using ES Modules