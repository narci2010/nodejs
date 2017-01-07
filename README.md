### node.js   
> Node.js是一个在浏览器之外可以解析和执行JavaScript代码的运行时环境

```
a) Node.js基于哪个JavaScript引擎？
   Chrome 的 V8引擎
b) 谁创建了Node.js？
   Ryan Dahl
c) Node.js的特性是什么？
   事件驱动、非阻塞IO模型
```

#### nodejs 社区

- ```https://github.com/nodejs/node```
- ```https://www.npmjs.com/```
- ```http://npm.taobao.org/```


#### cmd（Command）
> 作用：这是一个终端，可以在里面把以前鼠标点点点的方式通过命令来让计算机帮你做一些事情

- cmd打开的方式
  + 第一种通过：win+r  输入cmd  敲回车就可以进入cmd控制台了
  + 通过开始- 程序 - 附件  找到 命令提示符
  + cd （ change directory）改变和切换目录的位置
    + cd ../ 切换到上一级目录
    + cd 目录名 切换到到指定的目录
  + dir（directory）表示列出当前目录下一级所有子文件或子目录
  + md（make directory）建立文件夹
  + rd（remove directory）删除文件夹
  + del（delete）删除指定文件
  + cls （clear）清屏

#### nvm

Node version Manager  这是一个Node.js的版本管理工具
- ```https://github.com/creationix/nvm
```

- nvm（Node.js version manage）
  + 管理和切换Node.js的版本的
  + 例如 4.4.0  5.9.0
  + nvm ls 查看所有已安装的Node.js版本
  + nvm use [32]切换一个已安装的Node.js版本 注意：32位操作系统在后面加32
  + nvm install 版本号 [32]  注意：32位操作系统在后面加32
  + nvm uninstall 版本号 表示卸载一个已安装的指定版本

#### REPL运行环境
> Read Eval Print Loop

> REPL 可交互式运行环境，和浏览器中的Console是一样的;

> 运行cmd 输入：node filename.js

> 作用：可以帮助我们测试JavaScript代码，或者是一些Node.js的API

- 按住Ctrl 再按 c  两次，就可以退出REPL运行环境
- 在REPL环境中输入 .exit 也可以退出REPL环境



