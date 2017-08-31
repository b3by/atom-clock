# atom-clock
[![Travis!](https://img.shields.io/travis/b3by/atom-clock.svg?style=flat-square)](https://travis-ci.org/b3by/atom-clock)
[![AppVeyor!](https://img.shields.io/appveyor/ci/b3by/atom-clock.svg?style=flat-square)](https://ci.appveyor.com/project/b3by/atom-clock)
[![Deps!](https://img.shields.io/david/b3by/atom-clock.svg?style=flat-square)](https://david-dm.org/b3by/atom-clock)
[![Installs!](https://img.shields.io/apm/dm/atom-clock.svg?style=flat-square)](https://atom.io/packages/atom-clock)
[![Version!](https://img.shields.io/apm/v/atom-clock.svg?style=flat-square)](https://atom.io/packages/atom-clock)
[![License](https://img.shields.io/apm/l/atom-clock.svg?style=flat-square)](https://github.com/b3by/atom-clock/blob/master/LICENSE.md)

Display a customizable clock in the status bar.

### Installation
The clock can be installed through Atom. Alternatively, you can use `apm`:

`apm install atom-clock`

### Features
* Customizable time format and locale: any format and locale supported by [`moment.js`](http://momentjs.com/) is supported by `atom-clock` as well!
* i18n: specify any locale to get the date in your language.
* UTC time: show the UTC time instead of the local time.
* Multi-platform package: the clock works with Linux, Windows and macOS.

### Settings

##### Time format
It specifies the format to use when displaying the time. The package uses `moment.js` to format the time, so please refer to the related [`moment.js` documentation](http://momentjs.com/docs/#/displaying/format/). The default value for the time format is `H:mm`.

##### Locale
It specifies the locale the clock will use when displaying the time. Its default value is `en`. Please check the [`moment.js` locale folder](https://github.com/moment/moment/tree/master/locale) for a complete list of all supported locales.

##### Clock interval
It specifies how many seconds should run between two time updates, and it is defaulted to 60 (one update per minute).

##### Tooltip
If enabled, a tooltip will be shown when you hover over the time in the status bar to display the time in an alternate format. By default the tooltip is disabled, and the format is `LLLL`.

##### UTC
If enabled, both the status bar clock and the tooltip clock (if enabled) will display UTC time instead of local time.

##### Show icon
If ticked, a clock icon will be shown to the left of the time. It is unticked by default.

### Some examples

|format|description|display|
|:----:|:---------:|:-----:|
|`H:mm`|default date format|![Default format](images/format/default.png?raw=true)|
|`h:mm a`|am/pm format|![AM/PM format](images/format/ampm.png?raw=true)|
|`DD/MM/YYYY, H:mm`|short date format|![Short format](images/format/short.png?raw=true)|
|`MMMM Do, dddd, h:mm:ss a`|long date format|![Long format](images/format/long.png?raw=true)|
|`[Quarter] Q, MMMM Do YYYY, ddd, h:mm a`|space waster format|![Useless format](images/format/useless.png?raw=true)|

### Locales
When a different locale is specified in the settings, the date language will change accordingly. A locale can be defined with its substring, and `moment.js` will take care of selecting the first locale it knows. A substring can be specified in many ways. As example, the Chinese locale for China can be expressed as `zh-cn`, `zh_cn`, `zh-CN` or `zh_CN`.

Here are some examples for locales different from English.

| locale | code | display |
|:--------:|:------:|:---------:|
|Arabic|`ar`|![Arabic](images/locale/locale_arabic.png?raw=true)|
|Belarusian|`be`|![Belarusian](images/locale/locale_belarusian.png?raw=true)|
|Tibetan|`bo`|![Tibetan](images/locale/locale_tibetan.png?raw=true)|
|Russian|`ru`|![Russian](images/locale/locale_russian.png?raw=true)|
|Chinese|`zh_CN`|![Chinese_China](images/locale/locale_chinese_china.png?raw=true)|

### Tooltip
When enabled, the tooltip will contain an extended (and configurable) version of
the current time/date.

![Tooltip appearance](images/tooltip.png?raw=true)

### Customization
The CSS classes of the clock elements allow you to customize the appearance of
the clock using your `styles.less` file.

#### `.atom-clock`, `.atom-clock-icon` and `.atom-clock-time`
These classes allow you to change the appearance of the whole content of the
clock (`.atom-clock`), of the icon only (`.atom-clock-icon`), or of the time
only (`.atom-clock-time`). A simple entry in the `styles.less` file looks like
this:

```scss
.atom-clock {
  color: red;
}
```

![Atom Clock customization](images/customization/basicAtomClock.gif?raw=true)

Editing the icon and the time separately:

```scss
.atom-clock-icon {
  color: red;
}

.atom-clock-time {
  color: green;
}
```

![Icon and time customization](images/customization/iconAndTime.gif?raw=true)

#### `.atom-clock-tooltip`
This class can be used to change the appearance of the tooltip content, in
conjunction with `.tooltip-inner`.

```scss
.atom-clock-tooltip .tooltip-inner {
  color: orange;
}
```

![Tooltip customization](images/customization/basicTooltip.gif?raw=true)

#### `.atom-clock-utc`
Selective customization can be applied when the UTC time is enabled. This can
affect both the status bar content and the tooltip content.

```scss
.atom-clock.atom-clock-utc {
  color: red;

  &:after {
    content: " (UTC)";
  }
}
```

![UTC clock](images/customization/utcClock.gif?raw=true)

```scss
.atom-clock-tooltip.atom-clock-utc .tooltip-inner {
  color: red;

  &:before {
    content: "(UTC) ";
  }
}
```

![UTC tooltip](images/customization/utcTooltip.gif?raw=true)

### Contributing
**Like what you see?** Please, feel free to fork this repository, and make any change you like. If you
want to propose a nice feature, please create a separate branch on your fork,
named after the feature you want to implement, then make a pull request from that
branch. Also, before actually getting to work, just consider I'm trying to keep
this package as simple and minimal as possible!

### Hall of fame
A special **THANK YOU** to all the contributors of the project!

[frasertmay](https://github.com/frasertmay) (best contributor ever)

[mark-hahn](https://github.com/mark-hahn)

[GeNiuS69](https://github.com/GeNiuS69)

### Save the clock tower!
[![Beerpay](https://beerpay.io/b3by/atom-clock/badge.svg?style=flat-square)](https://beerpay.io/b3by/atom-clock)
[![Beerpay](https://beerpay.io/b3by/atom-clock/make-wish.svg?style=flat-square)](https://beerpay.io/b3by/atom-clock?focus=wish)
[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=b3by&url=https://github.com/b3by/atom-clock&title=atom-clock&language=&tags=github&category=software)

![Save the clock](images/savetheclock.jpg?raw=true)
