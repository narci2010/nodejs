'use strict';

const http = require('http');
const config = require('./config'); // 把经常变化的东西放在配置文件中
const url = require('url'); // 该核心模块准们用来处理pathname路径的
const router = require('./router');
const render = require('./common/render');
const qstring = require('querystring');

// 可以使用 querystring的 parse 方法，字符串解析为一个方便我们操作的对象
http.createServer((req, res) => {
    // 方便我们在后续的操作中直接通过req.quer来获取查询字符串中的参数
    req.query = url.parse(req.url, true).query;

    res.json = function(obj) {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(JSON.stringify(obj));
    };

    // 挂载 render 方法，在后面可以直接使用 res.render 方法向客户端响应一个页面
    render(res);
    // 解析post请求体，挂载到 req.body 上， 后面可以直接通过 req.body  来获取post表单提交的参数
    parsePostBody(req, () => {
      // 路由 其实就是讲我们用户的请求路径派发到具体的处理函数
      router(req, res);
    });
  })
  .listen(config.port, config.host, () => {
    console.log(`server is running at port ${config.port}`);
    console.log(`please visit http://${config.host}:${config.port}`);
  });

// 将用户的post请求体解析为一个方便我们操作的对象，然后挂载到req对象上
function parsePostBody(req, callback) {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    req.body = qstring.parse(data);
    callback();
  });
}
