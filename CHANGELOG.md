## 0.1.3
* :racehorse: `moment.js` is (again) lazily imported, so loading and activation times are (again) significantly reduced
* README updated with a cool SAVE THE CLOCK TOWER pic!

## 0.1.2
* Small code refactoring
* README updated with gitcheese and flattr buttons

## 0.1.1
* New locale feature added (see [pull request](https://github.com/b3by/atom-clock/pull/11))

## 0.1.0 - ES6 conversion
* New code: the package has been written in ES6, so no more CoffeeScript
* New view: the clock element is now manually added, so `atom-space-pen-views` has been dismissed, drastically reducing the activation time
* Toggling the package now does not loose the ticker

## 0.0.8
* :bug: Fixed major bug about time refresh into status bar (see [issue \#6](https://github.com/b3by/atom-clock/issues/6))

## 0.0.7 (license to clock) - Moment dependency update
* :arrow_up: :lock: `moment.js` dependency updated to latest stable and secure version
* :racehorse: `moment.js` is lazily imported, so loading and activation times are significantly reduced

## 0.0.6
* Specs fixed

## 0.0.5 - New tick mechanism
* New ticking mechanism adopted, preventing atom-clock to be behind the wall clock
(see [pull request](https://github.com/b3by/atom-clock/pull/4))

## 0.0.4 - Specs and Travis integration
* New specs for the package
* Travis integration
* Clock toggle in the package menu
* Minor bug fixes

## 0.0.1 - First Release
* Clock provided with customizable formats
* Icon clock available
* Ticking interval configurable
