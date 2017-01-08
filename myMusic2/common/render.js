'use strict';

const fs = require('fs');
const path = require('path');
const template = require('art-template');
const config = require('../config');

module.exports = function(res) {
  res.render = function(templateName, data) {
    // 根据模板名称读取模板字符串
    fs.readFile(path.join(config.views, templateName + '.html'), 'utf8', (err, templateStr) => {
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
