"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
require("reflect-metadata");
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _passport = _interopRequireDefault(require("passport"));
var _httpStatus = _interopRequireDefault(require("http-status"));
var _index = _interopRequireDefault(require("./route/index.js"));
var _passport2 = require("./config/passport.js");
var _error = require("./middlewares/error.js");
var _ApiError = _interopRequireDefault(require("./helper/ApiError.js"));
var _typeorm = require("typeorm");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _User = _interopRequireDefault(require("./models/User.js"));
// Ensure reflect-metadata is imported first

// Import your routes

_dotenv["default"].config(); // Load environment variables

process.env.PWD = process.cwd();
var app = (0, _express["default"])();

// Enable CORS
app.use((0, _cors["default"])());
app.options('*', (0, _cors["default"])());
app.use(_express["default"]["static"]("".concat(process.env.PWD, "/public")));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());

// JWT authentication
app.use(_passport["default"].initialize());
_passport["default"].use('jwt', _passport2.jwtStrategy);

// TypeORM Database Connection
var AppDataSource = new _typeorm.DataSource({
  type: 'mysql',
  // Can be 'postgres', 'mariadb', 'sqlite', etc.
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  // Use false in production for data safety
  logging: true,
  entities: [_User["default"]],
  // Specify your entities here
  migrations: [],
  subscribers: []
});
AppDataSource.initialize().then(function () {
  console.log('Database connected with TypeORM');
})["catch"](function (error) {
  console.error('Database connection failed:', error);
});
app.get('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          res.status(200).send('Congratulations! API is working!');
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use('/api', _index["default"]);

// Send back a 404 error for any unknown API request
app.use(function (req, res, next) {
  next(new _ApiError["default"](_httpStatus["default"].NOT_FOUND, 'Not found'));
});

// Convert error to ApiError, if needed
app.use(_error.errorConverter);

// Handle errors
app.use(_error.errorHandler);
var _default = exports["default"] = app;