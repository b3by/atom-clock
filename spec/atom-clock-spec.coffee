AtomClock = require '../lib/atom-clock'

# Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
#
# To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
# or `fdescribe`). Remove the `f` to unfocus the block.

describe 'AtomClock', ->
  [workspaceElement, activationPromise] = []

  beforeEach ->
    workspaceElement = atom.views.getView(atom.workspace)
    activationPromise = atom.packages.activatePackage('atom-clock')

  describe 'when the atom-clock:toggle event is triggered', ->

    it 'has all the required configurations', ->
      expect(atom.config.get('atom-clock.dateFormat')).toEqual 'H:mm'
      expect(atom.config.get('atom-clock.refreshInterval')).toEqual 60
      expect(atom.config.get('atom-clock.showClockIcon')).toEqual false

    it 'shows the clock when the package is activated', ->
      # Before the activation event the view is not on the DOM, and no panel
      # has been created
      expect(workspaceElement.querySelector('.atom-clock')).not.toExist()

      # This is an activation event, triggering it will cause the package to be
      # activated.
      # atom.commands.dispatch workspaceElement, 'atom-clock:toggle'
      #
      waitsForPromise ->
        activationPromise

      runs ->
        expect(workspaceElement.querySelector('.atom-clock')).toExist()

        atomClockElement = workspaceElement.querySelector '.atom-clock'
        expect(atomClockElement).toExist()
