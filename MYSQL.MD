#### mysql

1.相关登录命令

```
mysql -h localhost -P 3306 -u root -p
-h：主机名
-P：端口
-u：用户名
-p：密码

mysql默认连接localhost和3306，所以可以省略-h和-P
mysql -u root -p
```

#### 数据库

- 创建数据库```CREATE DATABASE 数据库名;```
- 删除数据库```DROP DATABASE 数据库名;```
- 查看所有数据库```SHOW DATABASES;```
- 显示数据库创建语句 ```SHOW CREATE DATABASE db_name;``` 
- 选择数据库
  + 选择数据库```USE db_name;```
  + 查看当前使用的数据库```SELECT database();```


#### 数据表的基本操作


1.创建数据表

```
CREATE TABLE 表名
(
    列名1  类型,
    列名2  类型,
    列名3  类型  
);

注意：最后一列不需要逗号
```

2.查看数据表

```
查看当前数据库中的所有表  show tables;
查看表结构                desc 表名;
查看建表语句              show create table 表名;

```

3.修改数据表

```
增加列
ALTER TABLE table_name ADD 列名 列的类型;

修改列
ALTER TABLE table_name MODIFY 列名 数据类型;

删除列
ALTER TABLE table_name DROP 列名;

修改表名
rename TABLE 当前的表名 to 新表名;

修改列名
ALTER TABLE 表名 change 原列名 新列名 数据类型;
```

4.删除数据表

```
DROP TABLE 表名;
```

5.表的约束

```
PRIMARY KEY	主键约束，用于唯一标识对应的记录
FOREIGN KEY	外键约束
NOT NULL	非空约束
UNIQUE		唯一性约束
DEFAULT		默认值约束，用于设置字段的默认值

demo:
字段名 数据类型 PRIMARY KEY
字段名 数据类型 NOT NULL
字段名 数据类型 UNIQUE
字段名 数据类型 DEFAULT 默认值;
```

6.demo

```sql
-- 创建表的时候加 IF NOT EXISTS
-- 目的：如果要创建的数据库已存在不会报错，后面的SQL语句会继续执行
CREATE DATABASE IF NOT EXISTS mydb1;
USE mydb1;
CREATE TABLE employee
(
    id  INT,
    name  VARCHAR(20),
    gender  CHAR(1),
    birthday DATETIME,
    entry_date DATETIME,
    job VARCHAR(20),
    salary DOUBLE,
    resume TEXT
);

ALTER TABLE employee MODIFY job VARCHAR(60);

CREATE TABLE employee01
(
    id INT PRIMARY KEY
);

CREATE TABLE employee02
(
    id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE employee03
(
    id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    card INT NOT NULL UNIQUE
);

CREATE TABLE employee04
(
    id INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL DEFAULT 'JACK',
    card INT NOT NULL UNIQUE
);

-- auto_increment 表示该键由mysql数据库自己维护，自动增长，默认从0开始
-- 以后再创建表，必须有一个列名叫 id  并且约束为 主键约束 ，而却是自动增长 的
CREATE TABLE employee05
(
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(20) NOT NULL DEFAULT 'JACK',
    card INT NOT NULL UNIQUE
);
```