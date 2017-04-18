'use babel';

MockDate = require('mockdate')

describe('Atom Clock', () => {

  let workspaceElement

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace)
    jasmine.attachToDOM(workspaceElement)
    MockDate.set('1987-04-11 04:00')

    let statusBar
    let AtomClock

    waitsForPromise(() => atom.packages.activatePackage('status-bar').then((pack) => {
      statusBar = workspaceElement.querySelector('status-bar')
    }))

    waitsForPromise(() => atom.packages.activatePackage('atom-clock').then((clk) => {
      AtomClock = clk.mainModule
      AtomClock.consumeStatusBar(statusBar)
    }))

    waitsForPromise(() => atom.workspace.open())
  })

  afterEach(() => {
    MockDate.reset()
  })

  it('should not show the clock icon by default', () => {
    icon = workspaceElement.querySelector('.atom-clock > .icon-clock')
    expect(icon).toBeNull()
  })

  it('should show the clock icon when configured', () => {
    atom.config.set('atom-clock.showClockIcon', true)
    icon = workspaceElement.querySelector('.atom-clock > .icon-clock')
    expect(icon).not.toBeNull()
  })

  it('should show the time with the default format', () => {
    date = workspaceElement.querySelector('.atom-clock > span').innerText
    expect(date).toBe('4:00')
  })

  it('should change the format of displayed time', () => {
    atom.config.set('atom-clock.dateFormat', 'H:mm:ss')
    date = workspaceElement.querySelector('.atom-clock > span').innerText
    expect(date).toBe('4:00:00')

    atom.config.set('atom-clock.dateFormat', 'DD dddd YY H:mm')
    date = workspaceElement.querySelector('.atom-clock > span').innerText
    expect(date.toLowerCase()).toBe('11 saturday 87 4:00')
  })

  it('should change the clock content according with the locale', () => {
    atom.config.set('atom-clock.dateFormat', 'DD dddd YY H:mm')
    atom.config.set('atom-clock.locale', 'it')
    date = workspaceElement.querySelector('.atom-clock > span').innerText
    expect(date.toLowerCase()).toBe('11 sabato 87 4:00')
  })

})
