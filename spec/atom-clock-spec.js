'use babel';

describe('Atom Clock', () => {

  let AtomClock
  let workspaceElement

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace)
    jasmine.attachToDOM(workspaceElement)

    let statusBar

    waitsForPromise(() => atom.packages.activatePackage('status-bar').then((pack) => {
      statusBar = workspaceElement.querySelector('status-bar')
    }))

    waitsForPromise(() => atom.packages.activatePackage('atom-clock').then((clk) => {
      AtomClock = clk.mainModule
    }))

    waitsForPromise(() => atom.workspace.open())
  })

  it('should properly load the package', () => {
    expect(AtomClock.atomClockView.element).toBeDefined()

    expect(AtomClock.config.dateFormat.default).toBe('H:mm')
    expect(AtomClock.config.showTooltip.default).toBe(false)
    expect(AtomClock.config.tooltipDateFormat.default).toBe('LLLL')
    expect(AtomClock.config.locale.default).toBe('en')
    expect(AtomClock.config.showUTC.default).toBe(false)
    expect(AtomClock.config.refreshInterval.default).toBe(60)
    expect(AtomClock.config.showClockIcon.default).toBe(false)
  })

  it('should refresh the ticker when the date format is changed', () => {
    spyOn(AtomClock.atomClockView, 'refreshTicker')

    atom.config.set('atom-clock.dateFormat', 'H')
    expect(AtomClock.atomClockView.refreshTicker).toHaveBeenCalled()
  })

  it('should refresh the ticker when the tooltip date format is changed', () => {
    spyOn(AtomClock.atomClockView, 'refreshTicker')

    atom.config.set('atom-clock.tooltipDateFormat', 'H')
    expect(AtomClock.atomClockView.refreshTicker).toHaveBeenCalled()
  })

  it('should refresh the ticker when the UTC display setting is changed', () => {
    spyOn(AtomClock.atomClockView, 'refreshTicker')

    atom.config.set('atom-clock.showUTC', true)
    expect(AtomClock.atomClockView.refreshTicker).toHaveBeenCalled()
  })

  it('should refresh the ticker when the interval is changed', () => {
    spyOn(AtomClock.atomClockView, 'refreshTicker')

    atom.config.set('atom-clock.refreshInterval', '20')
    expect(AtomClock.atomClockView.refreshTicker).toHaveBeenCalled()
  })

  it('should set the configuration values when the tooltip is enabled', () => {
    spyOn(AtomClock.atomClockView, 'setConfigValues')

    atom.config.set('atom-clock.showTooltip', true)
    expect(AtomClock.atomClockView.setConfigValues).toHaveBeenCalled()
  })

  it('should set the configuration values when clock icon is requested', () => {
    spyOn(AtomClock.atomClockView, 'setConfigValues')

    atom.config.set('atom-clock.showClockIcon', true)
    expect(AtomClock.atomClockView.setConfigValues).toHaveBeenCalled()
  })

  it('should clear the ticker and restart it when refresh is called', () => {
    spyOn(AtomClock.atomClockView, 'clearTicker')
    spyOn(AtomClock.atomClockView, 'startTicker')

    atom.config.set('atom-clock.refreshInterval', '20')
    expect(AtomClock.atomClockView.clearTicker).toHaveBeenCalled()
    expect(AtomClock.atomClockView.startTicker).toHaveBeenCalled()
  })

  it('should hide the clock when toggled', () => {
    atom.commands.dispatch(document.querySelector('atom-workspace'), 'atom-clock:toggle')
    expect(AtomClock.atomClockView.element.style.display).toBe('none')

    atom.commands.dispatch(document.querySelector('atom-workspace'), 'atom-clock:toggle')
    expect(AtomClock.atomClockView.element.style.display).toBe('')
  })

  it('should toggle UTC mode when toggled', () => {
    atom.commands.dispatch(document.querySelector('atom-workspace'), 'atom-clock:utc-mode')
    expect(AtomClock.atomClockView.showUTC).toBe(true)

    atom.commands.dispatch(document.querySelector('atom-workspace'), 'atom-clock:utc-mode')
    expect(AtomClock.atomClockView.showUTC).toBe(false)
  })
})
