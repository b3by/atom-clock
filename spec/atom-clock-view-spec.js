'use babel';

MockDate = require('mockdate')

getTooltips = function(workspaceElement) {
  element = workspaceElement.querySelector('.atom-clock')
  return atom.tooltips.findTooltips(element)
}

getTooltipDate = function(workspaceElement) {
  tooltip = getTooltips(workspaceElement)[0]
  return tooltip.getTitle()
}

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

  it('should not show the tooltip by default', () => {
    expect(getTooltips(workspaceElement)[0].enabled).toBe(false)
  })

  it('should show the tooltip when configured', () => {
    atom.config.set('atom-clock.showTooltip', true)
    expect(getTooltips(workspaceElement)[0].enabled).toBe(true)
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

  it('should show the time in the tooltip with the default format', () => {
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('saturday, april 11, 1987 4:00 am')
  })

  it('should change the format of displayed time', () => {
    atom.config.set('atom-clock.dateFormat', 'H:mm:ss')
    date = workspaceElement.querySelector('.atom-clock > span').innerText
    expect(date).toBe('4:00:00')

    atom.config.set('atom-clock.dateFormat', 'DD dddd YY H:mm')
    date = workspaceElement.querySelector('.atom-clock > span').innerText
    expect(date.toLowerCase()).toBe('11 saturday 87 4:00')
  })

  it('should change the format of the displayed time in the tooltip', () => {
    atom.config.set('atom-clock.tooltipDateFormat', 'H:mm:ss')
    date = getTooltipDate(workspaceElement)
    expect(date).toBe('4:00:00')

    atom.config.set('atom-clock.tooltipDateFormat', 'DD dddd YY H:mm')
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('11 saturday 87 4:00')
  })

  it('should change the clock content according with the locale', () => {
    atom.config.set('atom-clock.dateFormat', 'DD dddd YY H:mm')
    atom.config.set('atom-clock.locale', 'it')
    date = workspaceElement.querySelector('.atom-clock > span').innerText
    expect(date.toLowerCase()).toBe('11 sabato 87 4:00')
  })

  it('should change the clock content in the tooltip according with the locale', () => {
    atom.config.set('atom-clock.tooltipDateFormat', 'DD dddd YY H:mm')
    atom.config.set('atom-clock.locale', 'it')
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('11 sabato 87 4:00')
  })

})
