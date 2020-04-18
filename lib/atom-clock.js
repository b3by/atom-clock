'use babel';

import AtomClockView from './atom-clock-view'

export default {

  config: {
    dateFormat: {
      type: 'string',
      title: 'Time format',
      description: 'Specify the time format. [Here](http://momentjs.com/docs/#/displaying/format/) you can find all the available formats.',
      default: 'H:mm',
      order: 1
    }, locale: {
      type: 'string',
      title: 'Locale',
      description: 'Specify the time locale. [Here](https://github.com/moment/moment/tree/master/locale) you can find all the available locales.',
      default: 'en',
      order: 2
    }, refreshInterval: {
      type: 'integer',
      title: 'Clock interval',
      description: 'Specify the refresh interval (in seconds) for the plugin to evaluate the date.',
      default: 60,
      minimum: 1,
      order: 3
    }, showTooltip: {
      type: 'boolean',
      title: 'Enable tooltip',
      description: 'Enables a customisable tooltip when you hover over the time.',
      default: false,
      order: 4
    }, tooltipDateFormat: {
      type: 'string',
      title: 'Tooltip time format',
      description: 'Specify the time format in the tooltip. [Here](http://momentjs.com/docs/#/displaying/format/) you can find all the available formats.',
      default: 'LLLL',
      order: 5
    }, showUTC: {
      type: 'boolean',
      title: 'Display UTC time',
      description: 'Use UTC to display the time instead of local time.',
      default: false,
      order: 6
    }, showClockIcon: {
      type: 'boolean',
      title: 'Icon clock',
      description: 'Show a clock icon next to the time in the status bar.',
      default: false,
      order: 7
    }, showOnlyInFullscreen: {
      type: 'boolean',
      title: 'Full-screen only',
      description: 'Only show the clock when in full-screen.',
      default: false,
      order: 8
    }, rightClickToClipboard: {
      type: 'boolean',
      title: 'Right-click to clipboard',
      description: 'Use right-click to copy the current time to clipboard.',
      default: true,
      order: 9
    }
  },

  activate(state) {},

  deactivate() {
    if (this.atomClockView)
      this.atomClockView.destroy()
  },

  consumeStatusBar(statusBar) {
    this.atomClockView = new AtomClockView(statusBar)
    this.atomClockView.start()
  }

}
