AtomClockView = require '../lib/atom-clock-view'

describe 'Atom Clock', ->

  clock = null

  beforeEach ->
    clock = new AtomClockView()

  afterEach ->
    clock.destroy()
    clock = null

  it 'should have all the required methods', ->
    # expect(typeof clock.setConfigValues).toBe 'function'
    expect(typeof clock.startTicker).toBe 'function'
    expect(typeof clock.clearTicker).toBe 'function'
    expect(typeof clock.refreshTicker).toBe 'function'
    expect(typeof clock.setDate).toBe 'function'
    expect(typeof clock.setIcon).toBe 'function'
    # expect(typeof clock.setStatusBar).toBe 'function'
    expect(typeof clock.attach).toBe 'function'
    expect(typeof clock.toggle).toBe 'function'

  it 'should refresh the ticker when the date format is changed', ->
    spyOn clock, 'refreshTicker'

    atom.config.set 'atom-clock.dateFormat', 'H'
    expect(clock.refreshTicker).toHaveBeenCalled()

  it 'should refresh the ticker when the interval is changed', ->
    spyOn clock, 'refreshTicker'

    atom.config.set 'atom-clock.refreshInterval', '20'
    expect(clock.refreshTicker).toHaveBeenCalled()

  it 'should set the configuration values when clock icon is requested', ->
    spyOn clock, 'setConfigValues'

    atom.config.set 'atom-clock.showClockIcon', true
    expect(clock.setConfigValues).toHaveBeenCalled()

  it 'should clear the ticker and restart it when refresh is called', ->
    spyOn clock, 'clearTicker'
    spyOn clock, 'startTicker'

    atom.config.set 'atom-clock.refreshInterval', '20'
    expect(clock.clearTicker).toHaveBeenCalled()
    expect(clock.startTicker).toHaveBeenCalled()
