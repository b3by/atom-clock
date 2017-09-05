'use babel';

import { CompositeDisposable } from 'atom'

export default class AtomClockView {

  constructor(statusBar) {
    this.statusBar = statusBar
    this.subscriptions = new CompositeDisposable()
  }

  start() {
    this.drawElement()
    this.initialize()
  }

  initialize() {
    this.setConfigValues()
    this.setTooltip(this.showTooltip)
    this.setIcon(this.showIcon)
    this.setUTCClass(this.showUTC)
    this.startTicker()

    this.subscriptions.add(
      atom.commands.add('atom-workspace', {
        'atom-clock:toggle': () => this.toggle(),
        'atom-clock:utc-mode': () => atom.config.set('atom-clock.showUTC', !this.showUTC)
      }),
      atom.config.onDidChange('atom-clock.dateFormat', () => {
        this.refreshTicker()
      }),
      atom.config.onDidChange('atom-clock.showTooltip', () => {
        this.setConfigValues()
        this.setTooltip(this.showTooltip)
      }),
      atom.config.onDidChange('atom-clock.tooltipDateFormat', () => {
        this.refreshTicker()
      }),
      atom.config.onDidChange('atom-clock.locale', () => {
        this.refreshTicker()
      }),
      atom.config.onDidChange('atom-clock.timezone', () =>  {
        this.refreshTicker()
      }),
      atom.config.onDidChange('atom-clock.showUTC', () => {
        this.refreshTicker()
        this.setUTCClass(this.showUTC)
      }),
      atom.config.onDidChange('atom-clock.refreshInterval', () => {
        this.refreshTicker()
      }),
      atom.config.onDidChange('atom-clock.showClockIcon', () => {
        this.setConfigValues()
        this.setIcon(this.showIcon)
      })
    )
  }

  drawElement() {
    this.element = document.createElement('div')
    this.element.classList.add('atom-clock', 'inline-block')

    this.iconElement = document.createElement('span')
    this.iconElement.classList.add('atom-clock-icon')

    this.timeElement = document.createElement('span')
    this.timeElement.classList.add('atom-clock-time')

    this.element.appendChild(this.iconElement)
    this.element.appendChild(this.timeElement)

    this.statusBar.addRightTile({
      item: this.element,
      priority: -500
    })
  }

  setConfigValues() {
    this.dateFormat = atom.config.get('atom-clock.dateFormat')
    this.showTooltip = atom.config.get('atom-clock.showTooltip')
    this.tooltipDateFormat = atom.config.get('atom-clock.tooltipDateFormat')
    this.locale = atom.config.get('atom-clock.locale')
    this.timezone = atom.config.get('atom-clock.timezone')
    this.showUTC = atom.config.get('atom-clock.showUTC')
    this.refreshInterval = atom.config.get('atom-clock.refreshInterval') * 1000
    this.showIcon = atom.config.get('atom-clock.showClockIcon')
  }

  startTicker() {
    this.setDate()
    var nextTick = this.refreshInterval - (Date.now() % this.refreshInterval)
    this.tick = setTimeout (() =>  { this.startTicker() }, nextTick)
  }

  clearTicker() {
    if (this.tick)
      clearTimeout(this.tick)
  }

  refreshTicker() {
    this.setConfigValues()
    this.clearTicker()
    this.startTicker()
  }

  setDate() {
    this.date = this.getDate(this.locale, this.dateFormat, this.timezone)
    this.timeElement.textContent = this.date
  }

  getDate(locale, format, timezone) {
    if (!this.Moment)
      this.Moment = require('moment-timezone')

    var moment = this.Moment().tz(timezone).locale(locale)

    if (this.showUTC)
      moment.utc()

    return moment.format(format)
  }

  setIcon(toSet) {
    if (toSet)
      this.iconElement.classList.add('icon', 'icon-clock')
    else
      this.iconElement.classList.remove('icon', 'icon-clock')
  }

  setTooltip(toSet) {
    if (this.tooltip === undefined)
      this.tooltip = atom.tooltips.add(this.element, {
        title: () => this.getDate(this.locale, this.tooltipDateFormat, this.timezone),
        class: 'atom-clock-tooltip'
      })

    if (toSet)
      atom.tooltips.findTooltips(this.element)[0].enable()
    else
      atom.tooltips.findTooltips(this.element)[0].disable()
  }

  setUTCClass(toSet) {
    if (toSet) {
      this.element.classList.add('atom-clock-utc')
      atom.tooltips.findTooltips(this.element)[0].getTooltipElement().classList.add('atom-clock-utc')
    } else {
      this.element.classList.remove('atom-clock-utc')
      atom.tooltips.findTooltips(this.element)[0].getTooltipElement().classList.remove('atom-clock-utc')
    }
  }

  toggle() {
    var style = this.element.style.display
    this.element.style.display = style === 'none' ? '' : 'none'
  }

  destroy() {
    this.clearTicker()
    this.subscriptions.dispose()
    this.tooltip.dispose()
    this.element.remove()
  }
}
