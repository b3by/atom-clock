'use babel';

import AtomClockView from './atom-clock-view'

export default {

  config: {
    dateFormat: {
      type: 'string',
      title: 'Time format',
      description: 'Specify the time format. Please take a look at http://momentjs.com/docs/#/displaying/format/ to check all the available formats.',
      default: 'H:mm'
    }, locale: {
      type: 'string',
      title: 'Locale',
      description: 'Specify the time locale.',
      default: 'en'
    }, refreshInterval: {
      type: 'integer',
      title: 'Clock interval',
      description: 'Specify the refresh interval (in seconds) for the plugin to evaluate the date.',
      default: 60,
      minimum: 1
    }, showClockIcon: {
      type: 'boolean',
      title: 'Icon clock',
      description: 'Show clock icon in the status bar?',
      default: false
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
