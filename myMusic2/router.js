'use strict';

const fs = require('fs');
const url = require('url');
const path = require('path');
const mime = require('mime');
const qstring = require('querystring');
const handler = require('./handler');
const user = require('./user');

module.exports = function(req, res) {

  let pathname = url.parse(req.url, true).pathname;
  let method = req.method;

  if (pathname === '/') {
    handler.showIndex(req, res);
  } else if (pathname === '/index.html') {
    handler.showIndex(req, res);
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
    handler.doRemove(req, res);
  } else if (method === 'GET' && pathname === '/add') {
    handler.showAdd(req, res);
  } else if (method === 'POST' && pathname === '/add') {
    handler.doAdd(req, res);
  } else if (pathname === '/about') {
    handler.showAbout(req, res);
  } else if (method === 'GET' && pathname === '/edit') {
    handler.showEdit(req, res);
  } else if (method === 'POST' && pathname === '/edit') {
    handler.doEdit(req, res);
  } else if (method === 'GET' && pathname === '/music') {
    handler.sendMusicList(req, res);
  }
}
