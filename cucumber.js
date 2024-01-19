var _default = [
    '--format rerun:reports/@rerun.txt',
    '--format usage:reports/usage.txt',
    '--format json:reports/cucumber_report.json',
  ].join(' ')
  
  module.exports = {
    default: _default,
  }