module.exports = {
  Hits: {
    Event: require('./lib/hits/Event'),
    Exception: require('./lib/hits/Exception'),
    PageView: require('./lib/hits/PageView'),
    ScreenView: require('./lib/hits/ScreenView'),
    Social: require('./lib/hits/Social'),
    Timing: require('./lib/hits/Timing'),
    CustomDimension: require('./lib/hits/CustomDimension')
  },
  Analytics: require('./lib/Analytics'),
  Experiment: require('./lib/Experiment'),
  Tracking: require('./lib/Tracking')
};
