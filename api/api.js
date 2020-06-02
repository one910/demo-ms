var Seneca = require('seneca')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

require('./common/configs')

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.use(bodyParser.json())

Seneca({ tag: 'API' })
    .test('print')
    .use('mesh', {
        auto: true,
        host: 'localhost',
        bases: CONFIG_SM,
    })
    .ready(function () {
        var seneca = this;
        console.log('======================api');
        app.post('/serve', function (req, res) {
			console.log(req.body);
			let reqData = req.body;
            seneca.act(
                reqData,
                (err, out) => {
                    res.send(err || out)
                }
            )
        })

        app.listen(3000)
    })
