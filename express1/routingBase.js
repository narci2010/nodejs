/**
 * express
 * 基本路由:routing
 * http://www.gbtags.com/gb/tutorials/222/1173.htm
 */
var express = require('express');
var app = express();
// 对访问主页的响应
app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello GET');
})

// 对向主页进行的POST请求的响应
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})
//对向指定路径进行的DELETE请求的响应
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})
//对向指定路径进行的GET请求的响应
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
})
//对abcd、abxcd和ab123cd进行的GET请求的响应
app.get('/ab*cd', function(req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
