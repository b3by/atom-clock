AtomClock = require '../lib/atom-clock'
{$} = require 'atom-space-pen-views'

describe 'AtomClock', ->

  [workspaceElement, activationPromise, statusBarPromise] = []

  beforeEach ->
    workspaceElement = atom.views.getView atom.workspace
    activationPromise = atom.packages.activatePackage 'atom-clock'
    statusBarPromise = atom.packages.activatePackage 'status-bar'

  afterEach: ->
    workspaceElement = null
    activationPromise = null
    statusBarPromise = null

  describe 'when the package is activated', ->

    it 'should show the clock', ->
      jasmine.attachToDOM workspaceElement

      waitsForPromise ->
        activationPromise

      waitsForPromise ->
        statusBarPromise

      runs ->
        expect(atom.packages.isPackageActive('atom-clock')).toBe true
        clockElement = workspaceElement.querySelector '.atom-clock'
        expect(clockElement).toExist()

    it 'should trigger the clock with firing the toggle command', ->
      jasmine.attachToDOM workspaceElement

      waitsForPromise ->
        activationPromise

      waitsForPromise ->
        statusBarPromise

      runs ->
        atom.commands.dispatch workspaceElement, 'atom-clock:toggle'
        clockElement = workspaceElement.querySelector '.atom-clock'
        expect(clockElement).not.toExist()

    it 'should fetche the package icon in the status bar', ->
      expect(atom.config.get('atom-clock.dateFormat')).toEqual 'H:mm'
      expect(atom.config.get('atom-clock.refreshInterval')).toEqual 60
      expect(atom.config.get('atom-clock.showClockIcon')).toEqual false

    it 'should properly call watcher methods for configuration', ->
      mainPkg = (atom.packages.getActivePackage 'atom-clock').mainModule

      spyOn mainPkg.atomClockView, 'refreshTicker'
      # console.log mainPkg.atomClockView.refreshTicker()

      atom.config.set 'atom-clock.refreshInterval', 10
      expect(mainPkg.atomClockView.refreshTicker).toHaveBeenCalled()
