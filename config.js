var pkg = require('./package.json');
var config = require('yargs')
    .usage(pkg.name + ' ' + pkg.version + '\n' + pkg.description + '\n\nUsage: $0 [options]')
    .describe('v', 'possible values: "error", "warn", "info", "debug"')
    .describe('n', 'instance name. used as mqtt client id and as prefix for connected topic')
    .describe('u', 'mqtt broker url. See https://github.com/mqttjs/MQTT.js#connect-using-a-url')
    .describe('i', 'polling interval in minutes')
    .describe('h', 'show help')
    .alias({
        'h': 'help',
        'n': 'name',
        'u': 'url',
        'v': 'verbosity',
        'i': 'interval'
    })
    .default({
        'u': 'mqtt://127.0.0.1',
        'n': 'flower',
        'v': 'info',
        'i': 60
    })
    //.config('config')
    .version(pkg.name + ' ' + pkg.version + '\n', 'version')
    .help('help')
    .argv;


module.exports = config;