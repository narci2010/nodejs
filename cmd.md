###cmd

1.打开方式：
>
1.开始菜单---程序---附件---命令提示符
2.开始菜单---运行---打命令CMD

2.常用DOS命令

```
(1)cd..                         cd..       退到次一级目录
   cd\                          cd\        退到根目录下的意思
   cd 文件夹名字                cd windows 进入WINDOWS目录
(2)md 文件夹名字     md win     建立名为win的文件夹
(3)rd 文件夹名字     rd win     删除名为win的文件夹
(4)copy 路径下文件 目标路径     拷贝文件
(5)del 目标路径下文件           删除文件
(6)dir 文件夹名字或盘符         dir c:\windows  查看C盘windows里目录文件

dir/W：宽屏显示，一排显示5个文件名，而不会显示修改时间，文件大小等信息；
dir/S：显示当前目录及其子目录下所有的文件                        
dir/a 查看所有文件包括隐藏文件                         
dir/p 分页查看         
                                          
(7)format 盘符   格式化硬盘  
(8)ren 文件名 文件名  改名   ren 1.bat 2.bat 
(9)type 文件名  查看文件内容（一般用来看bat或txt文件）
(10)cls  清屏
```

3.常用网络DOS命令

```
(1)fport                         查看系统端口和端口上运行的程序
(2)netstat -an                    查看所有连接本机IP
(3)ipconfig /all                  查看所有连接本机IP
(4)telnet IP 端口                 连接对方机器某个端口
(5)net user                       查看本机用户
    net user 用户名 密码 /add      建立一个用户
    net user 用户名 /del          删除一个用户
(6)net localgroup administrators 用户名 /add   把用户添加到管理员
   net localgroup administrators 用户名 /del   把用户从管理员组删除
```
