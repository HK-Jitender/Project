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
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } // // const httpStatus = require('http-status');
// // const bcrypt = require('bcryptjs');
// // const { v4: uuidv4 } = require('uuid');
// // const UserDao = require('../dao/UserDao');
// // const responseHandler = require('../helper/responseHandler');
// // const logger = require('../config/logger');
// // const { userConstant } = require('../config/constant');
// // class UserService {
// //     constructor() {
// //         this.userDao = new UserDao();
// //     }
// //     /**
// //      * Create a user
// //      * @param {Object} userBody
// //      * @returns {Object}
// //      */
// //     createUser = async (userBody) => {
// //         try {
// //             let message = 'Successfully Registered the account! Please Verify your email.';
// //             if (await this.userDao.isEmailExists(userBody.email)) {
// //                 return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email already taken');
// //             }
// //             const uuid = uuidv4();
// //             userBody.email = userBody.email.toLowerCase();
// //             userBody.password = bcrypt.hashSync(userBody.password, 8);
// //             userBody.uuid = uuid;
// //             userBody.status = userConstant.STATUS_ACTIVE;
// //             userBody.email_verified = userConstant.EMAIL_VERIFIED_FALSE;
// //             let userData = await this.userDao.create(userBody);
// //             if (!userData) {
// //                 message = 'Registration Failed! Please Try again.';
// //                 return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
// //             }
// //             userData = userData.toJSON();
// //             delete userData.password;
// //             return responseHandler.returnSuccess(httpStatus.CREATED, message, userData);
// //         } catch (e) {
// //             logger.error(e);
// //             return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
// //         }
// //     };
// //     /**
// //      * Get user
// //      * @param {String} email
// //      * @returns {Object}
// //      */
// //     isEmailExists = async (email) => {
// //         const message = 'Email found!';
// //         if (!(await this.userDao.isEmailExists(email))) {
// //             return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email not Found!!');
// //         }
// //         return responseHandler.returnSuccess(httpStatus.OK, message);
// //     };
// //     getUserByUuid = async (uuid) => {
// //         return this.userDao.findOneByWhere({ uuid });
// //     };
// //     changePassword = async (data, uuid) => {
// //         let message = 'Login Successful';
// //         let statusCode = httpStatus.OK;
// //         let user = await this.userDao.findOneByWhere({ uuid });
// //         if (!user) {
// //             return responseHandler.returnError(httpStatus.NOT_FOUND, 'User Not found!');
// //         }
// //         if (data.password !== data.confirm_password) {
// //             return responseHandler.returnError(
// //                 httpStatus.BAD_REQUEST,
// //                 'Confirm password not matched',
// //             );
// //         }
// //         const isPasswordValid = await bcrypt.compare(data.old_password, user.password);
// //         user = user.toJSON();
// //         delete user.password;
// //         if (!isPasswordValid) {
// //             statusCode = httpStatus.BAD_REQUEST;
// //             message = 'Wrong old Password!';
// //             return responseHandler.returnError(statusCode, message);
// //         }
// //         const updateUser = await this.userDao.updateWhere(
// //             { password: bcrypt.hashSync(data.password, 8) },
// //             { uuid },
// //         );
// //         if (updateUser) {
// //             return responseHandler.returnSuccess(
// //                 httpStatus.OK,
// //                 'Password updated Successfully!',
// //                 {},
// //             );
// //         }
// //         return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Password Update Failed!');
// //     };
// // }
// // module.exports = UserService;
// const httpStatus = require('http-status');
// const bcrypt = require('bcryptjs');
// const { v4: uuidv4 } = require('uuid');
// const UserDao = require('../dao/UserDao');
// const responseHandler = require('../helper/responseHandler');
// const logger = require('../config/logger');
// const { userConstant } = require('../config/constant');
// class UserService {
//     constructor() {
//         this.userDao = new UserDao();
//     }
//     /**
//      * Create a user
//      * @param {Object} userBody
//      * @returns {Object}
//      */
//     createUser = async (userBody) => {
//         try {
//             let message = 'Successfully Registered the account! Please Verify your email.';
//             if (await this.userDao.isEmailExists(userBody.email)) {
//                 return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email already taken');
//             }
//             const uuid = uuidv4();
//             userBody.email = userBody.email.toLowerCase();
//             userBody.password = bcrypt.hashSync(userBody.password, 8);
//             userBody.uuid = uuid;
//             userBody.status = userConstant.STATUS_ACTIVE;
//             userBody.email_verified = userConstant.EMAIL_VERIFIED_FALSE;
//             const userData = await this.userDao.create(userBody);
//             if (!userData) {
//                 message = 'Registration Failed! Please Try again.';
//                 return responseHandler.returnError(httpStatus.BAD_REQUEST, message);
//             }
//             // With TypeORM, we don't need to call toJSON() as the entity is already a plain object
//             // Just create a copy of the object to avoid modifying the original
//             const userResponse = { ...userData };
//             delete userResponse.password;
//             return responseHandler.returnSuccess(httpStatus.CREATED, message, userResponse);
//         } catch (e) {
//             logger.error(e);
//             return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
//         }
//     };
//     /**
//      * Get user
//      * @param {String} email
//      * @returns {Object}
//      */
//     isEmailExists = async (email) => {
//         const message = 'Email found!';
//         if (!(await this.userDao.isEmailExists(email))) {
//             return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email not Found!!');
//         }
//         return responseHandler.returnSuccess(httpStatus.OK, message);
//     };
//     getUserByUuid = async (uuid) => {
//         return this.userDao.findOneByWhere({ uuid });
//     };
//     changePassword = async (data, uuid) => {
//         let message = 'Login Successful';
//         let statusCode = httpStatus.OK;
//         let user = await this.userDao.findOneByWhere({ uuid });
//         if (!user) {
//             return responseHandler.returnError(httpStatus.NOT_FOUND, 'User Not found!');
//         }
//         if (data.password !== data.confirm_password) {
//             return responseHandler.returnError(
//                 httpStatus.BAD_REQUEST,
//                 'Confirm password not matched',
//             );
//         }
//         const isPasswordValid = await bcrypt.compare(data.old_password, user.password);
//         // With TypeORM, we don't need to call toJSON() as the entity is already a plain object
//         // Just create a copy of the object to avoid modifying the original
//         const userResponse = { ...user };
//         delete userResponse.password;
//         if (!isPasswordValid) {
//             statusCode = httpStatus.BAD_REQUEST;
//             message = 'Wrong old Password!';
//             return responseHandler.returnError(statusCode, message);
//         }
//         const updateUser = await this.userDao.updateWhere(
//             { password: bcrypt.hashSync(data.password, 8) },
//             { uuid },
//         );
//         if (updateUser) {
//             return responseHandler.returnSuccess(
//                 httpStatus.OK,
//                 'Password updated Successfully!',
//                 {},
//             );
//         }
//         return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Password Update Failed!');
//     };
// }
// module.exports = UserService;
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
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.userRepository.save(user, {
                transaction: transaction
              });
            case 2:
              return _context3.abrupt("return", _context3.sent);
            case 3:
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
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(user) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.userRepository.save(user);
            case 2:
              return _context4.abrupt("return", _context4.sent);
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function create(_x5) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findOneByWhere",
    value: function () {
      var _findOneByWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(condition) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return this.userRepository.findOne({
                where: condition
              });
            case 2:
              return _context5.abrupt("return", _context5.sent);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function findOneByWhere(_x6) {
        return _findOneByWhere.apply(this, arguments);
      }
      return findOneByWhere;
    }()
  }, {
    key: "updateWhere",
    value: function () {
      var _updateWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(updateData, condition) {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.userRepository.update(condition, updateData);
            case 2:
              return _context6.abrupt("return", this.userRepository.findOne({
                where: condition
              }));
            case 3:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function updateWhere(_x7, _x8) {
        return _updateWhere.apply(this, arguments);
      }
      return updateWhere;
    }()
  }]);
}(_SuperDao2["default"]);
var _default = exports["default"] = UserDao;