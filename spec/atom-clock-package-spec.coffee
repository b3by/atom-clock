describe 'Atom Clock package', ->
  
  [workspaceElement, activationPromise, statusBarPromise] = []

  beforeEach ->
    workspaceElement = atom.views.getView atom.workspace
    statusBarPromise = atom.packages.activatePackage 'status-bar'
    activationPromise = atom.packages.activatePackage 'atom-clock'

  describe 'when the package is activated', ->

    it 'should show the clock', ->
      expect(workspaceElement.querySelector('.atom-clock')).not.toExist()

      waitsForPromise ->
        statusBarPromise

      waitsForPromise ->
        activationPromise

      runs ->
        expect(workspaceElement.querySelector('.atom-clock')).toExist()

        myPackageElement = workspaceElement.querySelector('.atom-clock')
        expect(myPackageElement).toExist()

    it 'should hide the clock when toggled', ->
      waitsForPromise ->
        statusBarPromise

      waitsForPromise ->
        activationPromise

      runs ->
        atom.commands.dispatch workspaceElement, 'atom-clock:toggle'
        myPackageElement = workspaceElement.querySelector('.atom-clock')
        expect(myPackageElement).not.toExist()

    it 'should get all the default configurations', ->
      expect(atom.config.get('atom-clock.dateFormat')).toEqual 'H:mm'
      expect(atom.config.get('atom-clock.refreshInterval')).toEqual 60
      expect(atom.config.get('atom-clock.showClockIcon')).toEqual false
