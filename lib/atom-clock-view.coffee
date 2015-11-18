{View} = require 'atom-space-pen-views'
{CompositeDisposable} = require 'atom'

moment = require 'moment'

module.exports =
class AtomClockView extends View

  date: null
  dateFormat: null
  showIncon: false
  refreshInterval: 0

  runner: null
  statusBar: null

  @content: () ->
    @div class: 'inline-block atom-clock', =>
      @span outlet: 'clockIndicator'

  initialize: () ->
    @setConfigValues()
    @setDate()
    @setIcon @showIncon
    @startTicker()

    @subscriptions = new CompositeDisposable

    @subscriptions.add atom.commands.add 'atom-workspace', 'atom-clock:toggle': =>
      @toggle()

    @subscriptions.add atom.config.onDidChange 'atom-clock.dateFormat', (event) =>
      @refreshTicker()

    @subscriptions.add atom.config.onDidChange 'atom-clock.refreshInterval', (event) =>
      @refreshTicker()

    @subscriptions.add atom.config.onDidChange 'atom-clock.showClockIcon', (event) =>
      @setConfigValues()
      @setIcon @showIncon

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

  setStatusBar: (statusBar) ->
    @statusBar = statusBar

  attach: () ->
    @statusBar.addRightTile item:this, priority: -1

  toggle: ->
    if @hasParent() then @detach() else @attach()

  destroy: =>
    @clearTicker()
    @subscriptions.dispose()
    this.remove()
