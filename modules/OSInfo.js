var os = require('os');
var newTime = require('./Time');

  function getOsInfo() {
    var type = os.type();
    var release = os.release();
    var cpu = os.cpus()[0];
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    if (type == 'Darwin') type = 'OSX';
    else if (type == 'Windows_NT') type = 'Windows';
    console.log('System: ', type);
    console.log('Release: ', release);
    console.log('CPU model: ', cpu.model);
    console.log('CPU speed: ', cpu.speed);
    console.log('Uptime: ~', uptime.toFixed(0), 's');
    console.log('Uptime in hours/minutes: ~', newTime.timeCount(uptime));
    console.log('User name: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
  }

exports.dupa = getOsInfo; //Aha, czyli ten "print" to tutaj był taki randomowy :)