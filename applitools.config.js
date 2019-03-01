module.exports = {
  batchName: 'RSC Storybook',
  appName: 'RSC Components',
  showLogs: false,
  concurrency: 20,
  browser: [
    { width: 500, height: 400, name: 'firefox' },
    { width: 700, height: 600, name: 'chrome', mobile: true, deviceScaleFactor: 0 }
  ],
  storybookStaticDir: 'public'
}

// vim:sw=2 ts=2 sts=0
