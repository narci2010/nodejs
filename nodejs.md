####node

#### time 和 timeEnd 测试程序执行时间
> demo1/hello.js

#### 全局对象 Global
>
1.在Node.js中，文件中定义的函数、变量、对象都属于当前文件，不属于全局对象global
2.在REPL环境中，默认定义的变量、函数、对象都属于global全局对象的


#### process的一些属性
- process.arch  
- process.argv      //
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

#### module对象

Node内部提供一个Module构造函数，所有模块都是Module的实例
每个模块内部，都有一个module对象,代表当前模块。

```
module.id			 带有绝对路径的模块文件名
module.filename      模块的文件名，带有绝对路径
module.loaded	      表示模块是否已经完成加载
module.parent		返回一个对象，表示调用该模块的模块。
module.children    返回一个数组，表示该模块要用到的其他模块。
module.exports	      模块对外输出的值
```


#### module.exports与exports

```
module.exports属性表示当前模块对外输出的接口，其它文件加载该模块,实际上就是读取module.exports属性
点儿导出单个函数、对象或者值的时候非常有用，本质上就是少了一个.

为了方便，Node为每个模块提供一个exports变量，指向module.exports。
相当于在每个模块头部，有这样一行命令：
    var exports = module.exports;
结果就是：
在对外输出模块接口时，可以向exports对象添加方法
注意：不能直接给exports赋值，因为这样等于切断了exports和module.exports的联系

```

#### require文件加载规则

- 核心模块
  > require（‘核心模块名’）
- 文件模块
  > require（‘路径+模块名’）
- 相对路径与绝对路径
> 前缀“/”（类Unix操作系统与Windows的区别）

```
./  当前目录
../ 上一级
/   window:当前脚本文件所在的磁盘分区根目录
/   linux: home根目录
```
- module.paths路径规则加载

- 总结
> 加载模块时将运行模块文件中的每一行代码
相同模块多次引用不会引起模块内代码多次执行

#### 伪全局变量
- __dirname 和 __filename
  + __dirname 获取的是执行的脚本文件所在的父目录绝对路径
  + __filename 获取的该脚本文件所在的绝对路径


#### 规范的包目录结构

```
package.json   包描述文件，说明文件
bin 		   存放可执行二进制文件的目录
lib			   存放JavaScript代码的目录
doc            存放文档的目录
test		   存放单元测试用例的代码

package.json:

name		包的名称
description	包的简介
version		包的版本号
keywords	关键词数组，用于在npm中分类搜索
author		包的作者
main 		配置包的入口，默认是模块根目录下的index.js
dependencies包的依赖项，npm会通过该属性自动加载依赖包
scripts		指定了运行脚本命令的npmm命令行缩写，例如start
```

#### npm 
> ```https://www.npmjs.com/```

```
npm init [-y] 			 	初始化一个package.json文件
npm install 包名			安装一个包
npm install –save 包名		将安装的包添加到package.json的依赖中（dependencies）
npm install –g 包名			安装一个全局命令行工具
npm docs 包名				查看包的文档
npm root -g					查看全局包安装路径
npm config set prefix “路径”修改全局包安装路径
npm list					查看当前目录下安装的所有包
npm list -g					查看全局包的安装路径下所有的包
npm uninstall 包名			卸载当前目录下某个包
npm uninstall –g 包名		卸载全局安装路径下的某个包
npm update 包名				更新当前目录下某个包
npm update –g 包名			更新某个全局工具包
npm update					更新当前目录下安装的所有包
npm update –g				更新全局所有的工具包
npm install 包名 –f或者—force强制重新安装
npm install 包名@版本号		安装指定版本     
npm help 					查看命令列表 
npm –l 						查看各个命令的简单用法

------------------------------------------------------
** 注意：package.json的 name 不要与npm install的包名一致 **
```


#### Node调试

1.最方便也最简单的：```console.log()```

2.启动调试：node debug foo.js

```
常用命令
help	查看可用命令列表
n（下一步），s（步入），o（步出）
```
3.第三方调试工具：node-inspector

```
url:https://www.npmjs.com/package/node-inspector
安装：npm install -g node-inspector
a. 启动调试器：node-inspector，保持挂起不要关闭
b. 打开另一个命令台，以调试模式启动程序：
node --debug foo.js
node --debug-brk foo.js 调试器会在程序的第一行停住
c. 访问：http://localhost:8080/debug?port=5858

设置断点：单击行号
恢复脚本执行：F8
经过下一个函数调用：F10
进入下一个函数调用：F11
步出当前函数：Shift+F11
监视变量
```

4.Visual Studio Code 调试

```
打开要调试的文件，按f5,编辑器会生成一个launch.json
修改launch.json相关内容，主要是name和program字段，改成和你项目对应的
点击编辑器左侧长得像蜘蛛的那个按钮
点击左上角DEBUG后面的按钮，启动调试
打断点，调试
```

5.WebStorm调试

```
在要调试的脚本中打好断点之后右键选择Debug即可开启调试
F8  Step over
F7  Step into
Shift + F7 Smart step into
Shift + F8  Step out
Alt + F9  Run to cursor
Alt + F8  Evaluate expression
F9  Resume
Ctrl + F8  Toggle breakpoint
Ctrl+Shift+F8  View breakpoints
```
