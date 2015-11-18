AtomClockView = require './atom-clock-view'

module.exports = AtomClock =

  atomClockView: null

  config:
    dateFormat:
      type: 'string'
      title: 'Time format'
      description: 'Specify the time format. Please take a look ad http://momentjs.com/docs/#/parsing/string-format/ to check all the available formats.'
      default: 'H:mm'
    refreshInterval:
      type: 'integer'
      title: 'Clock interval'
      description: 'Specify the refresh interval for the plugin to evaluate the date. This interval is in seconds.'
      default: 60
      minimum: 1
    showClockIcon:
      type: 'boolean'
      title: 'Icon clock'
      description: 'Show clock icon in the status bar?'
      default: false

  activate: () ->

  deactivate: ->
    @atomClockView?.destroy()

  consumeStatusBar: (statusBar) ->
    @atomClockView = new AtomClockView()
    @atomClockView.setStatusBar statusBar
    @atomClockView.attach()
