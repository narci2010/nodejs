"use strict";

const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

// 读取文件
fs.readFile(path.join(__dirname, '倩女幽魂.lrc'), (err, data) => {
  if (err) {
    throw err;
  }
  data = iconv.decode(data, 'gbk'); // Node.js原生不支持 gbk 的编码，可以使用第三方包 iconv-lite 来解决这个问题
  // 按照换行符 分割成多行
  let lines = data.split('\n'); // 多歌词文件内容按照换行进行分割，分割成多行

  let regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/; // 通过正则校验该行是否有时间

  let begin = +new Date(); // 记录循环之前的时间，因为循环也需要消耗时间

  // 循环所有行,对每一行，提取时间和要输出的内容
  lines.forEach((line)=> {
    let matches = regex.exec(line); // 通过正则表达式对 每一行进行 匹配

    // 如果匹配成功，获取事件，设置定时器，定时器中输出歌词
    if (matches) {
      let m = parseInt(matches[1]);
      let s = parseInt(matches[2]);
      let ms = parseInt(matches[3]);
      let content = matches[4];
      let curTime = +new Date(); // 循环的时候，获取最新的时间
      let offset = curTime - begin; // 根据当前循环的最新时间，计算循环造成的时间的偏移量
      let time = m * 60 * 1000 + s * 1000 + ms - offset; // 定时器的时间 减去 偏差的时间 
      setTimeout(()=> {
        console.log(content);
      }, time);
    } else {
      console.log(line);
    }
  });
});
