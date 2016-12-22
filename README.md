# atom-clock
[![Build](https://img.shields.io/travis/b3by/atom-clock.svg?style=flat-square)](https://travis-ci.org/b3by/atom-clock)
[![Deps!](https://img.shields.io/david/b3by/atom-clock.svg?style=flat-square)](https://david-dm.org/b3by/atom-clock)
[![Installs!](https://img.shields.io/apm/dm/atom-clock.svg?style=flat-square)](https://atom.io/packages/atom-clock)
[![Version!](https://img.shields.io/apm/v/atom-clock.svg?style=flat-square)](https://atom.io/packages/atom-clock)
[![License](https://img.shields.io/apm/l/atom-clock.svg?style=flat-square)](https://github.com/b3by/atom-clock/blob/master/LICENSE.md)

Visit the [atom.io](https://atom.io/) [page](https://atom.io/packages/atom-clock).

This package allows you to display a clock in your status bar.
It uses [`moment.js`](http://momentjs.com/) to format the time, so its layout is
highly customizable.

### Configuration items
* **Date format**: it specifies the format to use when displaying the date. It has to
be compliant with `moment.js` (defaulted to `H:mm`)
* **Refresh interval**: it specifies how many seconds should run between two time
updates (defaulted to 60)
* **Show icon**: it specifies whether to show or not the icon (defaulted to `false`)

### Format examples

#### Default
The default format is 24 hours, with no icon and no seconds. It will produce a
time like this:

![Default format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/default.png?raw=true)

#### AM/PM

If you prefer the 12 hours format, a configuration like `h:mm a` will produce
a clock like this:

![AM/PM format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/ampm.png?raw=true)

#### Short date format
A more complex time format that also include the date could be `DD/MM/YYYY, H:mm`
where the result is:

![Short format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/short.png?raw=true)

#### Long date format
For a long time format, you can use a configuration like this
`MMMM Do, dddd, h:mm:ss a` and get this:

![Long format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/long.png?raw=true)

#### Waste of space
If you are a bit of a psychopath and you really care about the time, you can use
a format like `[Quarter] Q, MMMM Do YYYY, ddd, h:mm a`, so you'll get:

![Useless format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/useless.png?raw=true)

### Contributing
**Like what you see?** Please, feel free to fork this repository, and make any change you like. If you
want to propose a nice feature, please create a separate branch on your fork,
named after the feature you want to implement, then make a pull request from that
branch. Also, before actually getting to work, just consider I'm trying to keep
this package as simple and minimal as possible!

If you're not into coding, you can still support the project and buy me a beer!

[![gitcheese.com](https://api.gitcheese.com/v1/projects/02a01ca0-951a-402b-9a07-4a4f8e2bf45d/badges?type=1&size=xs)](https://www.gitcheese.com/app/#/projects/02a01ca0-951a-402b-9a07-4a4f8e2bf45d/pledges/create)
