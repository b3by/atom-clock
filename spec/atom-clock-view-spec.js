'use babel';

MockDate = require('mockdate')

getDate = function(workspaceElement) {
  return workspaceElement.querySelector('.atom-clock-time').textContent
}

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
    MockDate.set('1987-04-11 04:00:00 GMT', -60)
    atom.config.set('atom-clock.timezone', 'Europe/Dublin')

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
    icon = workspaceElement.querySelector('.atom-clock-icon.icon-clock')
    expect(icon).toBeNull()
  })

  it('should show the clock icon when configured', () => {
    atom.config.set('atom-clock.showClockIcon', true)
    icon = workspaceElement.querySelector('.atom-clock-icon.icon-clock')
    expect(icon).not.toBeNull()
  })

  it('should show the time with the default format', () => {
    date = getDate(workspaceElement)
    expect(date).toBe('5:00')
  })

  it('should show the time in the tooltip with the default format', () => {
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('saturday, april 11, 1987 5:00 am')
  })

  it('should change the format of displayed time', () => {
    atom.config.set('atom-clock.dateFormat', 'H:mm:ss')
    date = getDate(workspaceElement)
    expect(date).toBe('5:00:00')

    atom.config.set('atom-clock.dateFormat', 'DD dddd YY H:mm')
    date = getDate(workspaceElement)
    expect(date.toLowerCase()).toBe('11 saturday 87 5:00')
  })

  it('should change the format of the displayed time in the tooltip', () => {
    atom.config.set('atom-clock.tooltipDateFormat', 'H:mm:ss')
    date = getTooltipDate(workspaceElement)
    expect(date).toBe('5:00:00')

    atom.config.set('atom-clock.tooltipDateFormat', 'DD dddd YY H:mm')
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('11 saturday 87 5:00')
  })

  it('should change the clock content according with the locale', () => {
    atom.config.set('atom-clock.dateFormat', 'DD dddd YY H:mm')
    atom.config.set('atom-clock.locale', 'it')
    date = getDate(workspaceElement)
    expect(date.toLowerCase()).toBe('11 sabato 87 5:00')
  })

  it('should change the clock content in the tooltip according with the locale', () => {
    atom.config.set('atom-clock.tooltipDateFormat', 'DD dddd YY H:mm')
    atom.config.set('atom-clock.locale', 'it')
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('11 sabato 87 5:00')
  })

  it('should change the clock content according with the timezone', () => {
    atom.config.set('atom-clock.timezone', 'America/New_York')
    date = getDate(workspaceElement)
    expect(date.toLowerCase()).toBe('0:00')
  })

  it('should change the whether UTC time is displayed', () => {
    atom.config.set('atom-clock.dateFormat', 'ZZ')

    atom.config.set('atom-clock.showUTC', false)
    date = getDate(workspaceElement)
    expect(date.toLowerCase()).toBe('+0100')

    atom.config.set('atom-clock.showUTC', true)
    date = getDate(workspaceElement)
    expect(date.toLowerCase()).toBe('+0000')
  })

  it('should change the whether UTC time is displayed in the tooltip', () => {
    atom.config.set('atom-clock.tooltipDateFormat', 'ZZ')

    atom.config.set('atom-clock.showUTC', false)
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('+0100')

    atom.config.set('atom-clock.showUTC', true)
    date = getTooltipDate(workspaceElement)
    expect(date.toLowerCase()).toBe('+0000')
  })

  it('should add atom-clock-utc class to the time when UTC is enabled', () => {
    expect(workspaceElement.querySelector('.atom-clock.atom-clock-utc')).not.toExist()

    atom.config.set('atom-clock.showUTC', true)
    expect(workspaceElement.querySelector('.atom-clock.atom-clock-utc')).toExist()
  })

  it('should add atom-clock-utc class to the tooltip when UTC is enabled', () => {
    expect(getTooltips(workspaceElement)[0].getTooltipElement().classList.contains('atom-clock-utc')).toBe(false)

    atom.config.set('atom-clock.showUTC', true)
    expect(getTooltips(workspaceElement)[0].getTooltipElement().classList.contains('atom-clock-utc')).toBe(true)
  })

})
