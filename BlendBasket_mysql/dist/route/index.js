"use strict";

var express = require('express');
var authRoute = require('./authRoute');
var router = express.Router();
var defaultRoutes = [{
  path: '/auth',
  route: authRoute
}];
defaultRoutes.forEach(function (route) {
  router.use(route.path, route.route);
});
module.exports = router;