process.stdin.setEncoding('utf-8');
var OSInfo = require('./modules/OSInfo');
var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('beforeCommand', function(cmd) {
  console.log('You wrote ' + cmd + ' trying to run a command.');
});

emitter.on('afterCommand', function() {
  console.log('Finished command');
});

console.log('Start');

process.stdin.on('readable', function() {
  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();
    emitter.emit('beforeCommand', instruction);
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
        OSInfo.get();
        break;
      default:
        process.stderr.write('Wrong instruction!\n');
    }
    emitter.emit('afterCommand');
  }
});