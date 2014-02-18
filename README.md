femto-logger
============

A small, flexible logger for Node.js

Desired Features

+ Small and easy to use.  Configure (or don't) and forget it.
+ Different levels of reporting (DEBUG, INFO, WARNING, ERROR, FATAL)
+ Level-based ANSI coloring
+ UTC-based Timestamping


Coloring
--------

Femto-logger uses [ANSI coloring](http://en.wikipedia.org/wiki/ANSI_escape_code#Colors) to color the log line according to the level.

The colors can be altered to your liking as such:

    var logging = require('femto-logging');
    logging.config.colors.debug = logging.BRIGHT_CYAN;

The defaults are as follows:

+ DEBUG: DARK_WHITE
+ INFO: BRIGHT_WHITE
+ WARNING: BRIGHT_YELLOW
+ ERROR: BRIGHT_RED
+ FATAL: BRIGHT_MAGENTA

Possible values are: DARK_BLACK, DARK_RED, DARK_GREEN, DARK_YELLOW, DARK_BLUE, DARK_MAGENTA, DARK_CYAN, DARK_WHITE, BRIGHT_BLACK, BRIGHT_RED, BRIGHT_GREEN, BRIGHT_YELLOW, BRIGHT_BLUE, BRIGHT_MAGENTA, BRIGHT_CYAN, BRIGHT_WHITE, and NONE

It can also be disabled, which is equivalent to setting all colors to NONE:

    var logging = require('femto-logging');
    logging.config.coloring = false;


Timestamping
------------

Timestaamps default to UTC (GMT) for consistency, though the exact time is still based on the system clock and not an external time source.  The default format is [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601).

The format can be changed as such:

    var logging = require('femto-logging');
    logging.config.date.format = 'YYYY-MM-DDTHH:mm:ssZ';

There is currently a single constant ISO8601 that can be used to reset the value.

The [format](http://momentjs.com/docs/#/displaying/) of the date string is determined by the underlying [moment](http://momentjs.com/) instance.
