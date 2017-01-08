'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');


http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  let queryObj = url.parse(req.url, true).query;
  console.log(queryObj);
  let method = req.method;
  // 对于同一个请求路径，可以有多种请求方法
  console.log(method);

  if (pathname === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        return res.end(err.message);
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(data);
    });
  } else if (method === 'GET' && pathname === '/login') {
    fs.readFile('./login.html', (err, data) => {
      if (err) {
        return res.end(err.message);
      }
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      res.end(data);
    });
  } else if (method === 'POST' && pathname === '/login') {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      // 通过 querystring 模块的 parse  方法就可以把一个查询字符串转换为一个方便我们操作的查询对象
      console.log(querystring.parse(data));
      res.end();
    });
  }
}).listen(3000);
