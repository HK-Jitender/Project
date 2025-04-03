"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var logger = require('../config/logger');
var SuperDao = /*#__PURE__*/function () {
  function SuperDao(model) {
    (0, _classCallCheck2["default"])(this, SuperDao);
    this.Model = model;
  }
  return (0, _createClass2["default"])(SuperDao, [{
    key: "findAll",
    value: function () {
      var _findAll = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.Model.findAll().then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function findAll() {
        return _findAll.apply(this, arguments);
      }
      return findAll;
    }()
  }, {
    key: "findById",
    value: function () {
      var _findById = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.Model.findOne({
                where: {
                  id: id
                }
              }).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function findById(_x) {
        return _findById.apply(this, arguments);
      }
      return findById;
    }()
  }, {
    key: "findOneByWhere",
    value: function () {
      var _findOneByWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(where) {
        var attributes,
          order,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              attributes = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : null;
              order = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : ['id', 'desc'];
              if (!(attributes == null)) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return", this.Model.findOne({
                where: where,
                order: [order]
              }).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 4:
              return _context3.abrupt("return", this.Model.findOne({
                where: where,
                attributes: attributes,
                order: [order]
              }).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function findOneByWhere(_x2) {
        return _findOneByWhere.apply(this, arguments);
      }
      return findOneByWhere;
    }()
  }, {
    key: "updateWhere",
    value: function () {
      var _updateWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(data, where) {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", this.Model.update(data, {
                where: where
              }).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function updateWhere(_x3, _x4) {
        return _updateWhere.apply(this, arguments);
      }
      return updateWhere;
    }()
  }, {
    key: "updateById",
    value: function () {
      var _updateById = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(data, id) {
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.Model.update(data, {
                where: {
                  id: id
                }
              }).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function updateById(_x5, _x6) {
        return _updateById.apply(this, arguments);
      }
      return updateById;
    }()
  }, {
    key: "create",
    value: function () {
      var _create = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(data) {
        var newData;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              newData = new this.Model(data);
              return _context6.abrupt("return", newData.save().then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 5:
              _context6.prev = 5;
              _context6.t0 = _context6["catch"](0);
              console.log(_context6.t0);
            case 8:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 5]]);
      }));
      function create(_x7) {
        return _create.apply(this, arguments);
      }
      return create;
    }()
  }, {
    key: "findByWhere",
    value: function () {
      var _findByWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(where) {
        var attributes,
          order,
          limit,
          offset,
          _args7 = arguments;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              attributes = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : undefined;
              order = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : ['id', 'asc'];
              limit = _args7.length > 3 && _args7[3] !== undefined ? _args7[3] : null;
              offset = _args7.length > 4 && _args7[4] !== undefined ? _args7[4] : null;
              if (attributes) {
                _context7.next = 6;
                break;
              }
              return _context7.abrupt("return", this.Model.findAll({
                where: where,
                order: [order],
                limit: limit,
                offset: offset
              }));
            case 6:
              return _context7.abrupt("return", this.Model.findAll({
                where: where,
                attributes: attributes,
                order: [order],
                limit: limit,
                offset: offset
              }));
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function findByWhere(_x8) {
        return _findByWhere.apply(this, arguments);
      }
      return findByWhere;
    }()
  }, {
    key: "deleteByWhere",
    value: function () {
      var _deleteByWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee8(where) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.Model.destroy({
                where: where
              }));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function deleteByWhere(_x9) {
        return _deleteByWhere.apply(this, arguments);
      }
      return deleteByWhere;
    }()
  }, {
    key: "bulkCreate",
    value: function () {
      var _bulkCreate = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee9(data) {
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", this.Model.bulkCreate(data).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e.message);
              }));
            case 1:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function bulkCreate(_x10) {
        return _bulkCreate.apply(this, arguments);
      }
      return bulkCreate;
    }()
  }, {
    key: "getCountByWhere",
    value: function () {
      var _getCountByWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee10(where) {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", this.Model.count({
                where: where
              }).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
              }));
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getCountByWhere(_x11) {
        return _getCountByWhere.apply(this, arguments);
      }
      return getCountByWhere;
    }()
  }, {
    key: "incrementCountInFieldByWhere",
    value: function () {
      var _incrementCountInFieldByWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee11(fieldName, where) {
        var incrementValue,
          instance,
          _args11 = arguments;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              incrementValue = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : 1;
              _context11.next = 3;
              return this.Model.findOne({
                where: where
              });
            case 3:
              instance = _context11.sent;
              if (instance) {
                _context11.next = 6;
                break;
              }
              return _context11.abrupt("return", false);
            case 6:
              _context11.next = 8;
              return instance.increment(fieldName, {
                by: incrementValue
              });
            case 8:
              return _context11.abrupt("return", _context11.sent);
            case 9:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function incrementCountInFieldByWhere(_x12, _x13) {
        return _incrementCountInFieldByWhere.apply(this, arguments);
      }
      return incrementCountInFieldByWhere;
    }()
  }, {
    key: "decrementCountInFieldByWhere",
    value: function () {
      var _decrementCountInFieldByWhere = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee12(fieldName, where) {
        var decrementValue,
          instance,
          _args12 = arguments;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              decrementValue = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : 1;
              _context12.next = 3;
              return this.Model.findOne({
                where: where
              });
            case 3:
              instance = _context12.sent;
              if (instance) {
                _context12.next = 6;
                break;
              }
              return _context12.abrupt("return", false);
            case 6:
              _context12.next = 8;
              return instance.decrement(fieldName, {
                by: decrementValue
              });
            case 8:
              return _context12.abrupt("return", _context12.sent);
            case 9:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function decrementCountInFieldByWhere(_x14, _x15) {
        return _decrementCountInFieldByWhere.apply(this, arguments);
      }
      return decrementCountInFieldByWhere;
    }()
  }, {
    key: "updateOrCreate",
    value: function () {
      var _updateOrCreate = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee13(values, condition) {
        var _this = this;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", this.Model.findOne({
                where: condition
              }).then(function (obj) {
                // update
                if (obj) {
                  return obj.update(values);
                }
                // insert
                return _this.Model.create(values);
              }));
            case 1:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function updateOrCreate(_x16, _x17) {
        return _updateOrCreate.apply(this, arguments);
      }
      return updateOrCreate;
    }()
  }, {
    key: "checkExist",
    value: function () {
      var _checkExist = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee14(condition) {
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", this.Model.count({
                where: condition
              }).then(function (count) {
                if (count !== 0) {
                  return true;
                }
                return false;
              }));
            case 1:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function checkExist(_x18) {
        return _checkExist.apply(this, arguments);
      }
      return checkExist;
    }()
  }, {
    key: "getDataTableData",
    value: function () {
      var _getDataTableData = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee15(where, limit, offset) {
        var order,
          _args15 = arguments;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              order = _args15.length > 3 && _args15[3] !== undefined ? _args15[3] : [['id', 'DESC']];
              return _context15.abrupt("return", this.Model.findAndCountAll({
                limit: parseInt(limit, 10),
                offset: parseInt(offset, 10),
                where: where,
                order: order
              }).then(function (result) {
                return result;
              })["catch"](function (e) {
                logger.error(e);
                console.log(e);
                return [];
              }));
            case 2:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function getDataTableData(_x19, _x20, _x21) {
        return _getDataTableData.apply(this, arguments);
      }
      return getDataTableData;
    }()
  }]);
}();
module.exports = SuperDao;