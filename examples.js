var logging = require('./logging');

logging.debug('This is a standard debug message');
logging.info('This is a standard info message');
logging.warning('This is a standard warning message');
logging.error('This is a standard error message');
logging.fatal('This is a standard fatal message');

console.log('');

logging.config.colors.info = logging.BRIGHT_BLUE;
logging.info('This is an info message in BRIGHT_BLUE');
logging.config.colors.info = logging.BRIGHT_WHITE;  // reset

console.log('');

logging.config.labels.debug = 'SMASH';
logging.debug('This is a debug message with a custom label');
logging.config.colors.debug = 'DEBUG';  // reset

console.log('');

logging.warning('This is a warning message with printf style arguments (%s, %d)', 'abc', 789);

console.log('');

logging.config.date.format = 'dddd, Mo MMMM YYYY';
logging.fatal('This is a fatal message with a custom timestamp format (%s)', logging.config.date.format);
logging.config.date.format = logging.ISO8601;  // reset
