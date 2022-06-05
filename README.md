femto-logger
============

A small, flexible logger for Node.js

Desired Features

+ Small and easy to use.  Configure (or don't) and forget it.
+ Different levels of reporting (DEBUG, INFO, WARNING, ERROR, FATAL)
+ Level-based ANSI coloring
+ UTC-based Timestamping
+ printf-style formatting of messages

Usage
-----

Usage is pretty basic:

    const logging = require('femto-logging');
    logging.info('Something happened.');

which will yield something like:

    2014-02-18T23:34:12+00:00 [INFO] Something happened.


Coloring
--------

Femto-logger uses [ANSI coloring](http://en.wikipedia.org/wiki/ANSI_escape_code#Colors) to color the log line according to the level.

The colors can be altered to your liking as such:

    logging.config.colors.debug = logging.BRIGHT_CYAN;

The defaults are as follows:

+ DEBUG: DARK_WHITE
+ INFO: BRIGHT_WHITE
+ WARNING: BRIGHT_YELLOW
+ ERROR: BRIGHT_RED
+ FATAL: BRIGHT_MAGENTA

Possible values are: DARK_BLACK, DARK_RED, DARK_GREEN, DARK_YELLOW, DARK_BLUE, DARK_MAGENTA, DARK_CYAN, DARK_WHITE, BRIGHT_BLACK, BRIGHT_RED, BRIGHT_GREEN, BRIGHT_YELLOW, BRIGHT_BLUE, BRIGHT_MAGENTA, BRIGHT_CYAN, BRIGHT_WHITE, and NONE

It can also be disabled, which is equivalent to setting all colors to NONE:

    logging.config.coloring = false;


Timestamping
------------

Timestaamps default to UTC (GMT) for consistency, though the exact time is still based on the system clock and not an external time source.  The default format is [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601).

The format can be changed as such:

    logging.config.date.format = 'YYYY-MM-DDTHH:mm:ssZ';

There is currently a single constant ISO8601 that can be used to reset the value.

The [format](http://momentjs.com/docs/#/displaying/) of the date string is determined by the underlying [moment](http://momentjs.com/) instance.

As of `1.0.0`, the option to have dates returned in the local timezone has been added:

    logging.config.date.local = true;


Labels
------

Level labels can also be altered as such:

    logging.config.labels.debug = 'DEBUG';


Message Formatting
------------------

Messages can be formatted using printf-style placeholders:

    logging.debug('These are placeholders: %s, %d', 'abc', 789);

More information on usage of placeholders is available at the [node-printf](http://www.adaltas.com/projects/node-printf/) project website.


Return Values
-------------

In addition to messages being logged to the console, they are also returned from the logging function:

    const message = logging.debug('Now the message variable has this content as well.');

Messages are logged to the console by default, but can be turned off easily:

    logging.config.console.suppress = true;

Change log
----------
`0.0.1`
- Initial release

`0.0.2`
- Added printf formatting
- Added more unit tests
- Added examples

`1.0.0`
- Updated to ES5 syntax
- Locked down dependency versions in package.json
- Reorganized code for better readability
- Added option for local timezone timestamps
- Added examples for color disabling and local timestamps

`1.0.1`
- Security update to dependencies
