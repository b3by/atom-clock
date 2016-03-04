{View} = require 'atom-space-pen-views'
{CompositeDisposable} = require 'atom'

module.exports =
class AtomClockView extends View

  date: null
  dateFormat: null
  showIncon: false
  refreshInterval: 0
  moment: null

  statusBar: null
  tick:      null

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
    nextTick = @refreshInterval - (Date.now() % @refreshInterval)
    @tick = setTimeout (=> @startTicker()), nextTick

  clearTicker: ->
    clearTimeout(@tick) unless not @tick

  refreshTicker: =>
    @setConfigValues()
    @clearTicker()
    @startTicker()

  setDate: =>
    @moment ?= (require 'moment')()
    @date = @moment.format @dateFormat
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
