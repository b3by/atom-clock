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
    this.setIcon(this.showIcon)
    this.startTicker()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom-clock:toggle': () => this.toggle()
    }))

    this.subscriptions.add(atom.config.onDidChange('atom-clock.dateFormat', () => {
      this.refreshTicker()
    }))

    this.subscriptions.add(atom.config.onDidChange('atom-clock.locale', () => {
      this.refreshTicker()
    }))

    this.subscriptions.add(atom.config.onDidChange('atom-clock.refreshInterval', () => {
      this.refreshTicker()
    }))

    this.subscriptions.add(atom.config.onDidChange('atom-clock.showClockIcon', () => {
      this.setConfigValues()
      this.setIcon(this.showIcon)
    }))

  }

  drawElement() {
    this.element = document.createElement('div')
    this.element.className = 'atom-clock inline-block'

    var timeEl = document.createElement('span');
    timeEl.className = 'atom-clock-label';

    this.element.appendChild(timeEl);

    this.statusBar.addRightTile({
      item: this.element,
      priority: -1
    })
  }

  setConfigValues() {
    this.dateFormat = atom.config.get('atom-clock.dateFormat')
    this.locale = atom.config.get('atom-clock.locale')
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
    this.date = this.getDate(this.locale, this.dateFormat)
    this.element.querySelector(".atom-clock-label").textContent = this.date
  }

  getDate(locale, format) {
    if (!this.Moment)
      this.Moment = require('moment')

    return this.Moment().locale(locale).format(format)
  }

  setIcon(toSet) {
    if (toSet) {
      var iconEl = document.createElement('span')
      iconEl.className = 'icon icon-clock'

      this.element.insertBefore(iconEl, this.element.firstChild)
    } else {
      this.element.removeChild(this.element.querySelector(".icon-clock"))
    }
  }

  toggle() {
    var style = this.element.style.display
    this.element.style.display = style === 'none' ? '' : 'none'
  }

  destroy() {
    this.clearTicker()
    this.subscriptions.dispose()
    this.element.parentNode.removeChild(this.element)
  }

}
