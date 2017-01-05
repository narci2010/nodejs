/**
 * unlink:删除文件
 * http://www.gbtags.com/gb/tutorials/222/1166.htm
 *
 *
 * fs.unlink(path, callback)

 参数说明
 1、path：包含文件名的文件路径
 2、callback：用于报错的无参数回调函数
 */

var fs = require("fs");
console.log("Going to delete an existing file");
fs.unlink('input0.txt', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log("File deleted successfully!");
});
