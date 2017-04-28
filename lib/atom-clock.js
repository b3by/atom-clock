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
    },
    tooltipDateFormat: {
      type: 'string',
      title: 'Time format in tooltip',
      description: 'Specify the time format displayed in tooltip. [Here](http://momentjs.com/docs/#/displaying/format/) you can find all the available formats.',
      default: 'LLLL',
      order: 2
    },
    locale: {
      type: 'string',
      title: 'Locale',
      description: 'Specify the time locale. [Here](https://github.com/moment/moment/tree/master/locale) you can find all the available locales.',
      default: 'en',
      order: 3
    }, refreshInterval: {
      type: 'integer',
      title: 'Clock interval',
      description: 'Specify the refresh interval (in seconds) for the plugin to evaluate the date.',
      default: 60,
      minimum: 1,
      order: 4
    }, showClockIcon: {
      type: 'boolean',
      title: 'Icon clock',
      description: 'Show clock icon in the status bar?',
      default: false,
      order: 5
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
