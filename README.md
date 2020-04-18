# atom-clock
[![Travis!](https://img.shields.io/travis/b3by/atom-clock.svg?style=flat-square)](https://travis-ci.org/b3by/atom-clock)
[![AppVeyor!](https://img.shields.io/appveyor/ci/b3by/atom-clock.svg?style=flat-square)](https://ci.appveyor.com/project/b3by/atom-clock)
[![Deps!](https://img.shields.io/david/b3by/atom-clock.svg?style=flat-square)](https://david-dm.org/b3by/atom-clock)
[![Installs!](https://img.shields.io/apm/dm/atom-clock.svg?style=flat-square)](https://atom.io/packages/atom-clock)
[![Version!](https://img.shields.io/apm/v/atom-clock.svg?style=flat-square)](https://atom.io/packages/atom-clock)
[![License](https://img.shields.io/apm/l/atom-clock.svg?style=flat-square)](https://github.com/b3by/atom-clock/blob/master/LICENSE.md)

[![GitHub stars](https://img.shields.io/github/stars/b3by/atom-clock.svg?style=social&label=Star)](https://github.com/b3by/atom-clock)
[![GitHub forks](https://img.shields.io/github/forks/b3by/atom-clock.svg?style=social&label=Fork)](https://github.com/b3by/atom-clock)

Display a customizable clock in the status bar.

### Installation
The clock can be installed through Atom. Alternatively, you can use `apm`:

`apm install atom-clock`

### Features
* Customizable time format and locale: any format and locale supported by
[`moment.js`](http://momentjs.com/) is supported by `atom-clock` as well!
* i18n: specify any locale to get the date in your language.
* Easy access to time: right-click on the tile in the status bar to copy the
time to your clipboard.
* UTC time: show the UTC time instead of the local time.
* Multi-platform package: the clock works with Linux, Windows and macOS.

### Settings

##### Time format
It specifies the format to use when displaying the time. The package uses
`moment.js` to format the time, so please refer to the related
[`moment.js` documentation](http://momentjs.com/docs/#/displaying/format/). The
default value for the time format is `H:mm`.

##### Locale
It specifies the locale the clock will use when displaying the time. Its default
value is `en`. Please check the
[`moment.js` locale folder](https://github.com/moment/moment/tree/master/locale)
for a complete list of all supported locales.

##### Clock interval
It specifies how many seconds should run between two time updates, and it is
defaulted to 60 (one update per minute).

##### Tooltip
If enabled, a tooltip will be shown when you hover over the time in the status
bar to display the time in an alternate format. By default the tooltip is
disabled, and the format is `LLLL`.

##### UTC
If enabled, both the status bar clock and the tooltip clock (if enabled) will
display UTC time instead of local time.

##### Show icon
If ticked, a clock icon will be shown to the left of the time. It is unticked by
default.

##### Full-screen only
If ticked, the clock will only be visible when in full-screen.

##### Right-click to clipboard
If ticked, you can right-click on the time in the status bar to copy the current
time to your clipboard. When copying the time, the tooltip format is used.

### Some examples

|format|description|display|
|:----:|:---------:|:-----:|
|`H:mm`|default date format|![default](https://user-images.githubusercontent.com/472900/32742495-87ac0a00-c8a1-11e7-82f6-49d551bb18fe.png)|
|`h:mm a`|am/pm format|![ampm](https://user-images.githubusercontent.com/472900/32742528-9d351d58-c8a1-11e7-8495-f98d0077e0f8.png)|
|`DD/MM/YYYY, H:mm`|short date format|![short](https://user-images.githubusercontent.com/472900/32742553-afebf58e-c8a1-11e7-8b13-6538e03b41a8.png)|
|`MMMM Do, dddd, h:mm:ss a`|long date format|![long](https://user-images.githubusercontent.com/472900/32742572-bfa9efe4-c8a1-11e7-8e5f-e1b4b6d20282.png)|
|`[Quarter] Q, MMMM Do YYYY, ddd, h:mm a`|space waster format|![useless](https://user-images.githubusercontent.com/472900/32742583-cca6f9c6-c8a1-11e7-90b7-4c6ba9ea6480.png)|

### Locales
When a different locale is specified in the settings, the date language will
change accordingly. A locale can be defined with its substring, and `moment.js`
will take care of selecting the first locale it knows. A substring can be
specified in many ways. As example, the Chinese locale for China can be
expressed as `zh-cn`, `zh_cn`, `zh-CN` or `zh_CN`.

Here are some examples for locales different from English.

| locale | code | display |
|:--------:|:------:|:---------:|
|Arabic|`ar`|![locale_arabic](https://user-images.githubusercontent.com/472900/32742612-e2e2530c-c8a1-11e7-9595-caa0a2c30a60.png)|
|Belarusian|`be`|![locale_belarusian](https://user-images.githubusercontent.com/472900/32742635-f00898a2-c8a1-11e7-92e8-0ab837c743f1.png)|
|Tibetan|`bo`|![locale_tibetan](https://user-images.githubusercontent.com/472900/32742652-fc8bb8d4-c8a1-11e7-912a-54d001f5f705.png)|
|Russian|`ru`|![locale_russian](https://user-images.githubusercontent.com/472900/32742660-07fb6df4-c8a2-11e7-90f8-d6840ccd1e54.png)|
|Chinese|`zh_CN`|![locale_chinese_china](https://user-images.githubusercontent.com/472900/32742676-128a37fa-c8a2-11e7-9479-1e2d8b786111.png)|

### Tooltip
When enabled, the tooltip will contain an extended (and configurable) version of
the current time/date.

![tooltip](https://user-images.githubusercontent.com/472900/32742695-2044dbe8-c8a2-11e7-8dc1-1b5a02133211.png)

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

![Atom clock customization](https://user-images.githubusercontent.com/472900/32742726-36e56e9e-c8a2-11e7-977e-f7fe45cb3b88.gif)

Editing the icon and the time separately:

```scss
.atom-clock-icon {
  color: red;
}

.atom-clock-time {
  color: green;
}
```

![Icon and time customization](https://user-images.githubusercontent.com/472900/32742784-4c76377a-c8a2-11e7-8ba0-a53ff1fd4fd4.gif)

#### `.atom-clock-tooltip`
This class can be used to change the appearance of the tooltip content, in
conjunction with `.tooltip-inner`.

```scss
.atom-clock-tooltip .tooltip-inner {
  color: orange;
}
```

![Tooltip customization](https://user-images.githubusercontent.com/472900/32742810-61a27276-c8a2-11e7-99ed-d202f657c538.gif)

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

![UTC Clock](https://user-images.githubusercontent.com/472900/32742843-7daea0f2-c8a2-11e7-86a1-614b0d3e147e.gif)

```scss
.atom-clock-tooltip.atom-clock-utc .tooltip-inner {
  color: red;

  &:before {
    content: "(UTC) ";
  }
}
```

![UTC Tooltip](https://user-images.githubusercontent.com/472900/32742862-90b47000-c8a2-11e7-8be4-a4464e00d1e1.gif)

### Contributing
**Like what you see?** Please, feel free to fork this repository, and make any
change you like. If you want to propose a nice feature, please create a separate
branch on your fork, named after the feature you want to implement, then make a
pull request from that branch. Also, before actually getting to work, just
consider I'm trying to keep this package as simple and minimal as possible!

### Hall of fame
A special **THANK YOU** to all the contributors of the project!

[frasertmay](https://github.com/frasertmay) (best contributor ever)

[mark-hahn](https://github.com/mark-hahn)

[GeNiuS69](https://github.com/GeNiuS69)

### Save the clock tower!
[![Beerpay](https://beerpay.io/b3by/atom-clock/badge.svg?style=flat-square)](https://beerpay.io/b3by/atom-clock)
[![Beerpay](https://beerpay.io/b3by/atom-clock/make-wish.svg?style=flat-square)](https://beerpay.io/b3by/atom-clock?focus=wish)
[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=b3by&url=https://github.com/b3by/atom-clock&title=atom-clock&language=&tags=github&category=software)

![Save the clock](https://user-images.githubusercontent.com/472900/32742888-a4bcfdb0-c8a2-11e7-8198-f993b5c778bc.jpg)
