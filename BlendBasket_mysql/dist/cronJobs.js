"use strict";

var cron = require('node-cron');
// schedule tasks to be run on the server
cron.schedule('* * * * *', function () {
  console.log('Execute your service here...');
});