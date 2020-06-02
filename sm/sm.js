var Seneca = require('seneca');

require('./common/configs');

Seneca({ tag: 'SM' })
  .test('print')
  .use('monitor')
  .use('mesh', CONFIG_SM[0])
  .ready(() => {
    console.log('===SM IP:', CONFIG_SM[0].host);
  })