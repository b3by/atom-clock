# atom-clock

View in [atom.io](https://atom.io/packages/atom-clock).

A short description of your package. It leverages on [`moment.js`](http://momentjs.com/) package
in order to format the time as requested.

### Configuration items
* Date format: it specifies the format to use when displaying the date. It has to
be compliant with `moment.js` (defaulted to `H:mm`)
* Refresh interval: it specifies how many seconds should run between two time
updates (defaulted to 60)
* Show icon: it specifies whether to show or not the icon (defaulted to `false`)

### Format examples
The default format is 24 hours, with no icon and no seconds. It will produce a
time like this:

![Default format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/default.png?raw=true)

In case you prefer the 12 hours format, it's enough to change the format to
`H:mm a` in order to get this:

![AM/PM format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/ampm.png?raw=true)

If you don't really care about your status bar and are a bit of a time maniac,
you can use a format like this `MMMM Do, dddd, h:mm:ss a` and get this:

![Useless format](https://raw.githubusercontent.com/b3by/atom-clock/master/images/wasteOfSpace.png?raw=true)
