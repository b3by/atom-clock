{View} = require 'atom-space-pen-views'

moment = require 'moment'

module.exports =
class AtomClockView extends View

  date: null
  dateFormat: null
  showIncon: false
  refreshInterval: 0

  runner: null

  @content: ->
    @div class: 'inline-block atom-clock', =>
      @span outlet: 'clockIndicator'

  initialize: (serializedState) ->
    @setConfigValues()
    @setDate()
    @setIcon @showIncon
    @startTicker()

    atom.config.onDidChange 'atom-clock.dateFormat', (event) =>
      @refreshTicker()

    atom.config.onDidChange 'atom-clock.refreshInterval', (event) =>
      @refreshTicker()

    atom.config.onDidChange 'atom-clock.showClockIcon', (event) =>
      @setConfigValues()
      @setIcon @showIncon

  serialize: ->

  setConfigValues: ->
    @dateFormat = atom.config.get 'atom-clock.dateFormat'
    @refreshInterval = atom.config.get('atom-clock.refreshInterval') * 1000
    @showIncon = atom.config.get 'atom-clock.showClockIcon'

  startTicker: ->
    @setDate()
    @runner = setInterval @setDate, @refreshInterval

  clearTicker: ->
    clearInterval(@runner) unless not @runner

  refreshTicker: =>
    @setConfigValues()
    @clearTicker()
    @startTicker()

  setDate: =>
    @date = moment().format @dateFormat
    @clockIndicator.text @date

  setIcon: (toSet) ->
    if toSet
      @clockIndicator.addClass 'icon icon-clock'
    else
      @clockIndicator.removeClass 'icon icon-clock'

  attach: (statusBar) ->
    statusBar.addRightTile item:this, priority: -1

  destroy: =>
    @clearTicker()
    this.remove()
