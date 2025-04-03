"use strict";

var Redis = require('redis');
var _require = require('./config'),
  redis = _require.redis;
var url = "redis://".concat(redis.host, ":").concat(redis.port);
var client = Redis.createClient({
  url: url
});
if (redis.usePassword.toUpperCase() === 'YES') {
  client.auth(redis.password);
}
console.log('Redis Client loaded!!!');
module.exports = client;