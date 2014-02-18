var assert = require('assert');

var logging = require('../logging');

describe('Logging', function() {
  describe('#debug', function() {
    it('should print out a debug log statement', function() {
      logging.debug('debug test');
    });
  });
  describe('#info', function() {
    it('should print out an info log statement', function() {
      logging.info('info test');
    });
  });
  describe('#warning', function() {
    it('should print out a warning log statement', function() {
      logging.warning('warning test');
    });
  });
  describe('#error', function() {
    it('should print out an error log statement', function() {
      logging.error('error test');
    });
  });
  describe('#fatal', function() {
    it('should print out a fatal log statement', function() {
      logging.fatal('fatal test');
    });
  });
});
