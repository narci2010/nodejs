'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');
const template = require('art-template'); // artTemplate 的后台Node.js端的实现
const config = require('./config'); // 把经常变化的东西放在配置文件中
const mime = require('mime'); // 该模块用来提供根据一个文件后缀名获取Content-Type
const url = require('url'); // 该核心模块准们用来处理pathname路径的
const qstring = require('querystring');

const musicList = [{
  id: 1,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 2,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 3,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 4,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}, {
  id: 5,
  title: '黑夜不再来',
  singer: 'Eason',
  time: '03:26',
  size: '11.8MB'
}];


http.createServer((req, res) => {
    let pathname = url.parse(req.url, true).pathname;

    // 获取客户端的请求方法get|post
    let method = req.method;

    req.query = url.parse(req.url, true).query;

    res.json = function(obj) {
      res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end(JSON.stringify(obj));
    }
    render(res);

    if (pathname === '/') {
      res.render('index', {
        title: '首页',
        musicList: musicList
      });
    } else if (pathname.startsWith('/bower_components/')) {
      fs.readFile(path.join(__dirname, pathname), (err, data) => {
        if (err) {
          return res.end(err.message);
        }
        res.writeHead(200, {
          'Content-Type': mime.lookup(pathname)
        });
        res.end(data);
      });
    } else if (pathname === '/remove') {
      let id = req.query.id;

      // 根据 id  查找到数组中该项的索引
      let index = musicList.findIndex(m => m.id == id);

      // 根据索引删除该项
      musicList.splice(index, 1);

      // 删除完毕之后，刷新当前页面
      res.writeHead(302, {
        'Location': 'http://127.0.0.1:3000/'
      });
      res.end();
    } else if (method === 'GET' && pathname === '/add') {
      res.render('add', {
        title: '添加歌曲'
      });
    } else if (method === 'POST' && pathname === '/add') {
      // 接收用户提交的数据
      let data = '';
      req.on('data', (chunk) => {
        data += chunk; // chunk 是二进制数据，和data进行相加的时候会自动toString()
      });
      req.on('end', () => {

        let body = qstring.parse(data);

        // 根据id把该歌曲信息查询出来，如果有，表示该歌曲信息已存在，否则没有，再添加
        let music = musicList.find(m => m.id == body.id);

        if (music) {
          return res.end('music exists');
        }

        // 直接将body 放到数组中
        musicList.push(body);

        // 歌曲信息添加完毕之后要跳转到首页
        res.writeHead(302, {
          'Location': 'http://127.0.0.1:3000/'
        });
        res.end();
      });
    } else if (pathname === '/about') {
      res.render('about', {
        title: '关于我'
      });
    } else if (method === 'GET' && pathname === '/edit') {
      // 获取要编辑的歌曲信息的id
      let id = req.query.id;

      // 根据id查询出该数组中的该项
      let music = musicList.find(m => m.id == id);

      // 如果该歌曲不存在，直接结束响应
      if (!music) {
        return res.end('music not exists');
      }

      res.render('edit', {
        title: '编辑歌曲',
        music: music
      });
    } else if (method === 'POST' && pathname === '/edit') {

      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });

      req.on('end', () => {
        let body = qstring.parse(data);

        // 通过id找到数组中的索引下标
        let index = musicList.findIndex(m => m.id == body.id);

        // 根据索引更新数组中的该项,直接重新覆盖即可
        musicList[index] = body;

        res.writeHead(302, {
          'Location': 'http://127.0.0.1:3000/'
        });
        res.end();
      });
    }
  })
  .listen(config.port, config.host, () => {
    console.log(`server is running at port ${config.port}`);
    console.log(`please visit http://${config.host}:${config.port}`);
  });

function render(res) {
  res.render = function(templateName, data) {
    // 根据模板名称读取模板字符串
    fs.readFile(path.join(__dirname, 'views', templateName + '.html'), 'utf8', (err, templateStr) => {
      if (err) {
        res.end(err.message);
      }
      
      // 根据模板字符串，得到一个渲染函数
      let compiled = template.compile(templateStr);
      let htmlStr = compiled(data);
      res.end(htmlStr);
    });
  }
}
