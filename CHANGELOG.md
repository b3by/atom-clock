## 0.2
* Timezone selection added to the package.
* :white_check_mark: Timezone tests added
* :arrow_up: `moment-timezone` dependency added
* :arrow_down: `moment` dependency removed

## 0.1.15
* UTC class added to clock items and tooltip, so that customization is possible
  when the UTC time is enabled
  (see [pull request](https://github.com/b3by/atom-clock/pull/43)).
* :memo: Customization tips added to the README file.
* :crown: Hall of fame in the README file! Thank you collaborators!

## 0.1.14
* Tooltip class allows basic customization for font, size and color
  (see [pull request](https://github.com/b3by/atom-clock/pull/40) and
  related [issue](https://github.com/b3by/atom-clock/issues/35)).
* README typos fixing.

## 0.1.13
* New feature!! UTC time can be shown as well, instead of the regular time
(every detail in the fantastic [pull request](https://github.com/b3by/atom-clock/pull/38)).
* :white_check_mark: Specs added for the UTC feature.
* Configuration items rearranged, some dots added.
* README file rearranged.
* :arrow_up: `moment` updated to 2.18


## 0.1.12
* :fire: Style file removed from the package
  (see [pull request](https://github.com/b3by/atom-clock/pull/36)).
* :fire: Empty keybinding folder removed.
* :white_check_mark: [AppVeyor](https://ci.appveyor.com/project/b3by/atom-clock) added as CI
  service: upgrayedd to double-dose of pimpin'.

## 0.1.11
* :green_heart: Travis fixed so that the configuration file is aligned with the
  one from Atom itself ([here](https://github.com/b3by/atom-clock/pull/34) for the pull request).

## 0.1.10
* New priority set for the clock, so that now it should be placed at the very
right of the bar (at least, compared to other core packages). Should be this
defined into a new configuration item, that's still unclear.
* README file style fixed.

## 0.1.9
* New tooltip added to the configuration, so a more extensive date format can
be displayed when the mouse is over the clock (check pull
request [here](https://github.com/b3by/atom-clock/pull/29)).

## 0.1.8
* :bug: Clock is redrawn so that its alignment is fixed with the system status
bar elements (see issue [here](https://github.com/b3by/atom-clock/issues/27)
and pull request [here](https://github.com/b3by/atom-clock/pull/25) - the
pull request was not accepted eventually, but it highly inspired my changes,
that and the `status-bar` package).
* :bug: Menu label is updated so that it is more user friendly (check pull
  request [here](https://github.com/b3by/atom-clock/pull/28)).
* :green_heart: Travis build fixed with new Linux image (again, check pull
  request [here](https://github.com/b3by/atom-clock/pull/28)).

## 0.1.7
* :white_check_mark: New tests added to make the package more robust. The
configuration items are now tested so that when the clock format or the clock
locale are changed, the proper content is expected in the status bar.

## 0.1.6
* :bug: Content size does not get properly calculated, so the clock content can
overflow and the last part of it might not show up (see issue
[here](https://github.com/b3by/atom-clock/issues/20) and
[here](https://github.com/b3by/atom-clock/issues/21))
* Clock content is not dynamically calculated, rather the clock position
is now set as relative
* Small glitch fixed for the clock vertical alignment (now set as middle, so
that there is the same alignment with the OOTB status bar tiles)

## 0.1.5
* :bug: Global variables removed from the code, preventing the clock from
breaking in future versions based on babel 6 (see issue
  [here](https://github.com/b3by/atom-clock/issues/18))

## 0.1.4
* :bug: Clock has now a fixed width, calculated according to the content (check
the related issue [here](https://github.com/b3by/atom-clock/issues/16))
* Small typo fixed in the README file (pull request
[here](https://github.com/b3by/atom-clock/pull/14))
* GitCheese no longer used for tips
* Welcome Beerpay!

## 0.1.3
* :racehorse: `moment.js` is (again) lazily imported, so loading and activation
times are (again) significantly reduced
* README updated with a cool SAVE THE CLOCK TOWER pic!

## 0.1.2
* Small code refactoring
* README updated with gitcheese and flattr buttons

## 0.1.1
* New locale feature added (see
[pull request](https://github.com/b3by/atom-clock/pull/11))

## 0.1.0 - ES6 conversion
* New code: the package has been written in ES6, so no more CoffeeScript
* New view: the clock element is now manually added, so `atom-space-pen-views`
has been dismissed, drastically reducing the activation time
* Toggling the package now does not loose the ticker

## 0.0.8
* :bug: Fixed major bug about time refresh into status bar (see
[issue \#6](https://github.com/b3by/atom-clock/issues/6))

## 0.0.7 (license to clock) - Moment dependency update
* :arrow_up: :lock: `moment.js` dependency updated to latest stable and secure
version
* :racehorse: `moment.js` is lazily imported, so loading and activation times
are significantly reduced

## 0.0.6
* Specs fixed

## 0.0.5 - New tick mechanism
* New ticking mechanism adopted, preventing atom-clock to be behind the wall
clock (see [pull request](https://github.com/b3by/atom-clock/pull/4))

## 0.0.4 - Specs and Travis integration
* New specs for the package
* Travis integration
* Clock toggle in the package menu
* Minor bug fixes

## 0.0.1 - First Release
* Clock provided with customizable formats
* Icon clock available
* Ticking interval configurable
