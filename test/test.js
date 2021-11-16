const expect = require('chai').expect;

const logging = require('../logging');

logging.config.console.suppress = true;

describe('Logging', function() {

  describe('#debug', function() {

    it('should print out a debug log statement', function() {
      const s = logging.debug('debug test');

      expect(s).to.be.a('string');
      expect(s).to.have.string('debug test');
      expect(s).to.have.string(logging.config.labels.debug);
    });

  });

  describe('#info', function() {

    it('should print out an info log statement', function() {
      const s = logging.info('info test');

      expect(s).to.be.a('string');
      expect(s).to.have.string('info test');
      expect(s).to.have.string(logging.config.labels.info);
    });

  });

  describe('#warning', function() {

    it('should print out a warning log statement', function() {
      const s = logging.warning('warning test');

      expect(s).to.be.a('string');
      expect(s).to.have.string('warning test');
      expect(s).to.have.string(logging.config.labels.warning);
    });

  });

  describe('#error', function() {

    it('should print out an error log statement', function() {
      const s = logging.error('error test');

      expect(s).to.be.a('string');
      expect(s).to.have.string('error test');
      expect(s).to.have.string(logging.config.labels.error);
    });

  });

  describe('#fatal', function() {

    it('should print out a fatal log statement', function() {
      const s = logging.fatal('fatal test');

      expect(s).to.be.a('string');
      expect(s).to.have.string('fatal test');
      expect(s).to.have.string(logging.config.labels.fatal);
    });

  });

  describe('common', function() {

    it('should be colorized', function() {
      const s = logging.debug('test');

      expect(s).to.have.string(logging.config.colors.debug);
    });

    it('should be custom colorized', function() {
      const original = logging.config.colors.debug;
      logging.config.colors.debug = logging.BRIGHT_GREEN;
      const s = logging.debug('test');
      logging.config.colors.debug = original;

      expect(s).to.have.string(logging.BRIGHT_GREEN);
    });

    it('should not be colorized', function() {
      logging.config.coloring = false;
      const s = logging.debug('test');
      logging.config.coloring = true;

      expect(s).to.not.have.string(logging.config.colors.debug);
      expect(s).to.have.string(logging.NONE);
    });

    it('should be custom labelled', function() {
      const original = logging.config.labels.debug;
      logging.config.labels.debug = 'CUSTOM';
      const s = logging.debug('test');
      logging.config.colors.debug = original;

      expect(s).to.have.string('CUSTOM');
    });

    it('should embed arguments like printf', function() {
      const s = logging.debug('test [1: %s] [2: %d]', 'abc', 789);

      expect(s).to.have.string('[1: abc]');
      expect(s).to.have.string('[2: 789]');
    });

  });
});
