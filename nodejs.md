####node

#### time 和 timeEnd 测试程序执行时间
> demo1/hello.js

#### 全局对象 Global
>
1.在Node.js中，文件中定义的函数、变量、对象都属于当前文件，不属于全局对象global
2.在REPL环境中，默认定义的变量、函数、对象都属于global全局对象的


#### process的一些属性
- process.arch  
- process.argv  
- process.pid   
- process.platform  //当前系统平台
- process.version   //Node的版本

#### process的IO方法
- process.stdout
  + standard output 表示标准输出的意思
  + write可以向控制台中输入一些内容
- process.stdin

```
function log(str){
  process.stdout.write(str+ '\n');
}
```
#### process的其它方法
- process.exit()
- process.nextTick()
- process.kill()
