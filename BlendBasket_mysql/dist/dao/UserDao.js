"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _typeorm = require("typeorm");
var _User = require("../models/User");
var _SuperDao2 = _interopRequireDefault(require("./SuperDao"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // const SuperDao = require('./SuperDao');
// const models = require('../models');
// const User = models.user;
// class UserDao extends SuperDao {
//     constructor() {
//         super(User);
//     }
//     async findByEmail(email) {
//         return User.findOne({ where: { email } });
//     }
//     async isEmailExists(email) {
//         return User.count({ where: { email } }).then((count) => {
//             if (count != 0) {
//                 return true;
//             }
//             return false;
//         });
//     }
//     async createWithTransaction(user, transaction) {
//         return User.create(user, { transaction });
//     }
// }
// module.exports = UserDao;
// Ensure correct import
var UserDao = /*#__PURE__*/function (_SuperDao) {
  function UserDao() {
    var _this;
    (0, _classCallCheck2["default"])(this, UserDao);
    _this = _callSuper(this, UserDao, [_User.User]);
    _this.userRepository = (0, _typeorm.getRepository)(_User.User);
    return _this;
  }
  (0, _inherits2["default"])(UserDao, _SuperDao);
  return (0, _createClass2["default"])(UserDao, [{
    key: "findByEmail",
    value: function () {
      var _findByEmail = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(email) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.userRepository.findOne({
                where: {
                  email: email
                }
              });
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function findByEmail(_x) {
        return _findByEmail.apply(this, arguments);
      }
      return findByEmail;
    }()
  }, {
    key: "isEmailExists",
    value: function () {
      var _isEmailExists = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
        var count;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.userRepository.count({
                where: {
                  email: email
                }
              });
            case 2:
              count = _context2.sent;
              return _context2.abrupt("return", count > 0);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function isEmailExists(_x2) {
        return _isEmailExists.apply(this, arguments);
      }
      return isEmailExists;
    }()
  }, {
    key: "createWithTransaction",
    value: function () {
      var _createWithTransaction = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(user, transaction) {
        var userEntity;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              userEntity = this.userRepository.create(user); // Create entity
              _context3.next = 3;
              return this.userRepository.save(userEntity, {
                transaction: transaction
              });
            case 3:
              return _context3.abrupt("return", _context3.sent);
            case 4:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function createWithTransaction(_x3, _x4) {
        return _createWithTransaction.apply(this, arguments);
      }
      return createWithTransaction;
    }()
  }]);
}(_SuperDao2["default"]);
var _default = exports["default"] = UserDao;