"use strict";

/*
 * 在流中转换编码
 * */

// 按照行的方式一行一行的读取一个文本文件
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const iconv = require('iconv-lite');

// 如何转换读取流中的数据的编码, converterStream 内部会帮你转换
var converterStream = iconv.decodeStream('gbk');

// 先把读取进来的数据 流动到 converterStream 里面， 它内部会根据编码进行转换
let rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '倩女幽魂.lrc')).pipe(converterStream)
});

let regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/; // 通过正则校验该行是否有时间

// rl 读取一个行 触发一次该回调函数，把该行的数据传入到回调函数中
// rl 在进行读取的时候，直接进行 编码的转换了
rl.on('line', (line)=> {
  let matches = regex.exec(line); // 通过正则表达式对 每一行进行 匹配
  // 如果匹配成功，获取事件，设置定时器，定时器中输出歌词
  if (matches) {
    let m = parseInt(matches[1]);
    let s = parseInt(matches[2]);
    let ms = parseInt(matches[3]);
    let content = matches[4];
    let time = m * 60 * 1000 + s * 1000 + ms; // 定时器的时间 减去 偏差的时间 就是相对于来说比较准确的时间了
    setTimeout(()=> {
      console.log(content);
    }, time);
  } else {
    console.log(line);
  }
});
