const moment = require('moment');
const printf = require('printf');

const colors = {
  DARK_BLACK: '\x1b[30m', 
  DARK_RED: '\x1b[31m', 
  DARK_GREEN: '\x1b[32m', 
  DARK_YELLOW: '\x1b[33m', 
  DARK_BLUE: '\x1b[34m', 
  DARK_MAGENTA: '\x1b[35m', 
  DARK_CYAN: '\x1b[36m', 
  DARK_WHITE: '\x1b[37m', 
  
  BRIGHT_BLACK: '\x1b[30;1m', 
  BRIGHT_RED: '\x1b[31;1m', 
  BRIGHT_GREEN: '\x1b[32;1m', 
  BRIGHT_YELLOW: '\x1b[33;1m', 
  BRIGHT_BLUE: '\x1b[34;1m', 
  BRIGHT_MAGENTA: '\x1b[35;1m', 
  BRIGHT_CYAN: '\x1b[36;1m', 
  BRIGHT_WHITE: '\x1b[37;1m', 
  
  NONE: '\x1b[39m'
};

const formats = {
  ISO8601: 'YYYY-MM-DDTHH:mm:ssZ'
};

const config = {
  coloring: true,
  colors: {
    debug: colors.DARK_WHITE,
    info: colors.BRIGHT_WHITE,
    warning: colors.BRIGHT_YELLOW,
    error: colors.BRIGHT_RED,
    fatal: colors.BRIGHT_MAGENTA
  },
  labels: {
    debug: 'DEBUG',
    info: 'INFO',
    warning: 'WARNING',
    error: 'ERROR',
    fatal: 'FATAL'
  },
  date: {
    format: formats.ISO8601,
    local: false
  },
  console: {
    suppress: false
  }
};

const debug = (...args) => write(config.colors.debug, config.labels.debug, args);
const info = (...args) => write(config.colors.info, config.labels.info, args);
const warning = (...args) => write(config.colors.warning, config.labels.warning, args);
const error = (...args) => write(config.colors.error, config.labels.error, args);
const fatal = (...args) => write(config.colors.fatal, config.labels.fatal, args);

const write = (color, severity, args) => {
  const now = config.date.local ? moment() : moment().utc();
  const timestamp = now.format(config.date.format);
  const message = printf.apply(null, args);

  const s = printf('%s%s [%s] %s%s', config.coloring ? color : colors.NONE, timestamp, severity, message, colors.NONE);

  if(!config.console.suppress) {
    console.log(s);
  }

  return s;
}

module.exports = { config, debug, info, warning, error, fatal, ...formats, ...colors };
