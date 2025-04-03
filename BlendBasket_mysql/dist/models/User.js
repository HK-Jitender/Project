"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.User = void 0;
var _initializerDefineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerDefineProperty"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _initializerWarningHelper2 = _interopRequireDefault(require("@babel/runtime/helpers/initializerWarningHelper"));
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9; // const { Model } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class User extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//           //  User.belongsTo(models.agency, { foreignKey: 'agency_id', targetKey: 'id' });
//         }
//     }
//     User.init(
//         {
//             uuid: DataTypes.UUID,
//             first_name: DataTypes.STRING,
//             last_name: DataTypes.STRING,
//             email: DataTypes.STRING,
//             password: DataTypes.STRING,
//             status: DataTypes.INTEGER,
//             email_verified: DataTypes.INTEGER,
//             address: DataTypes.STRING,
//             phone_number: DataTypes.STRING,
//         },
//         {
//             sequelize,
//             modelName: 'user',
//             underscored: true,
//         },
//     );
//     return User;
// };
// src/models/User.js (TypeORM)
var User = exports.User = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)(), _dec3 = (0, _typeorm.Column)(), _dec4 = (0, _typeorm.Column)(), _dec5 = (0, _typeorm.Column)({
  unique: true
}), _dec6 = (0, _typeorm.Column)(), _dec7 = (0, _typeorm.Column)(), _dec8 = (0, _typeorm.Column)(), _dec9 = (0, _typeorm.Column)(), _dec10 = (0, _typeorm.Column)(), _dec(_class = (_class2 = /*#__PURE__*/(0, _createClass2["default"])(function User() {
  (0, _classCallCheck2["default"])(this, User);
  (0, _initializerDefineProperty2["default"])(this, "id", _descriptor, this);
  (0, _initializerDefineProperty2["default"])(this, "first_name", _descriptor2, this);
  (0, _initializerDefineProperty2["default"])(this, "last_name", _descriptor3, this);
  (0, _initializerDefineProperty2["default"])(this, "email", _descriptor4, this);
  (0, _initializerDefineProperty2["default"])(this, "password", _descriptor5, this);
  (0, _initializerDefineProperty2["default"])(this, "status", _descriptor6, this);
  (0, _initializerDefineProperty2["default"])(this, "email_verified", _descriptor7, this);
  (0, _initializerDefineProperty2["default"])(this, "address", _descriptor8, this);
  (0, _initializerDefineProperty2["default"])(this, "phone_number", _descriptor9, this);
}), _descriptor = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "first_name", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "last_name", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "email", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "password", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "status", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "email_verified", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "address", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = (0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "phone_number", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);
var _default = exports["default"] = User;