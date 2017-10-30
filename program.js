var os = require('os');

console.log(os.type());

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    switch (instruction) {
      case '/exit':
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      case '/version':
        console.log(process.versions);
        break;
      case '/lang':
        process.stdout.write(process.env.LANG + '\n');
        break;
      case '/getOsInfo':
        getOsInfo();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
  }

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

});