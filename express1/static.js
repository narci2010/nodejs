/**
 * express
 * 静态文件服务:static
 * http://www.gbtags.com/gb/tutorials/222/1173.htm
 */
var express = require('express');
var app = express();
app.use(express.static('html'));
app.get('/', function (req, res) {
  res.send('Hello World');
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})

