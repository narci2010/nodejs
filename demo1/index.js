// var add  = require('./add.js');

// var sum = add(1,2);

// console.log(sum);

var fs = require('fs');

// 构造函数
function Module() {
  this.exports = {};
}

function myRquire(modulePath) {
  // 得到原始的文件模块字符串
  var moduleStr = fs.readFileSync(modulePath);

  // 对源代码进行头尾包装，说白了就是加了一个函数作用域
  // 
  var funcStr = '(function(exports,module){'+moduleStr+' return module.exports;})';

  // 通过eval得到一个函数
  var func = eval(funcStr);

  // 为什么每一个模块中的exports都不一样呢？
  // 原因就是：每一次require的时候，我们对动态的实例化了一个module对象
  // 而module对象内部的exports都是不一样的
  // 实例化一个Module对象
  var module = new Module();

  var result =  func(module.exports,module);

  return result;

}


var result = myRquire('./add.js');

console.log(result(1,2));
