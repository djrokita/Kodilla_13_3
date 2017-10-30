var os = require('os');
 
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
    console.log('Uptime: ~', (uptime/60).toFixed(0), ' min / ', (uptime/3600).toFixed(0), ' hours / ', (uptime/86400).toFixed(0), ' days');
    console.log('User name: ', userInfo.username);
    console.log('Home dir: ', userInfo.homedir);
  }

exports.dupa = getOsInfo; //Czyli ten .print to tutaj był ustawiony domyślnie :)