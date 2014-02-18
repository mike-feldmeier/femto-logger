var moment = require('moment');

var DARK_BLACK = exports.DARK_BLACK = '\x1b[30m';
var DARK_RED = exports.DARK_RED = '\x1b[31m';
var DARK_GREEN = exports.DARK_GREEN = '\x1b[32m';
var DARK_YELLOW = exports.DARK_YELLOW = '\x1b[33m';
var DARK_BLUE = exports.DARK_BLUE = '\x1b[34m';
var DARK_MAGENTA = exports.DARK_MAGENTA = '\x1b[35m';
var DARK_CYAN = exports.DARK_CYAN = '\x1b[36m';
var DARK_WHITE = exports.DARK_WHITE = '\x1b[37m';

var BRIGHT_BLACK = exports.BRIGHT_BLACK = '\x1b[30;1m';
var BRIGHT_RED = exports.BRIGHT_RED = '\x1b[31;1m';
var BRIGHT_GREEN = exports.BRIGHT_GREEN = '\x1b[32;1m';
var BRIGHT_YELLOW = exports.BRIGHT_YELLOW = '\x1b[33;1m';
var BRIGHT_BLUE = exports.BRIGHT_BLUE = '\x1b[34;1m';
var BRIGHT_MAGENTA = exports.BRIGHT_MAGENTA = '\x1b[35;1m';
var BRIGHT_CYAN = exports.BRIGHT_CYAN = '\x1b[36;1m';
var BRIGHT_WHITE = exports.BRIGHT_WHITE = '\x1b[37;1m';

var NONE = exports.NONE = '\x1b[0m';

var ISO8601 = exports.ISO8601 = 'YYYY-MM-DDTHH:mm:ssZ';

var config = exports.config = {
  coloring: true,
  colors: {
    debug: DARK_WHITE,
    info: BRIGHT_WHITE,
    warning: BRIGHT_YELLOW,
    error: BRIGHT_RED,
    fatal: BRIGHT_MAGENTA
  },
  labels: {
    debug: 'DEBUG',
    info: 'INFO',
    warning: 'WARNING',
    error: 'ERROR',
    fatal: 'FATAL'
  },
  date: {
    format: ISO8601
  }
};

exports.debug = function(message) {
  return write(config.colors.debug, config.labels.debug, message);
}

exports.info = function(message) {
  return write(config.colors.info, config.labels.info, message);
}

exports.warning = function(message) {
  return write(config.colors.warning, config.labels.warning, message);
}

exports.error = function(message) {
  return write(config.colors.error, config.labels.error, message);
}

exports.fatal = function(message) {
  return write(config.colors.fatal, config.labels.fatal, message);
}

function write(color, severity, message) {
  var now = moment();
  now.utc();

  var s = (config.coloring ? color : NONE) + now.format(config.date.format) + ' [' + severity + '] ' + message + NONE;
  console.log(s);
  return s;
}
