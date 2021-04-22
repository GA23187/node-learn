### mongodb安装
- 安装地址
  `https://www.mongodb.com/try/download/community`

- 安装
  - 可以选择Custom（自定义）按钮来设置安装位置
  - next 出现服务配置（3没有这个）,自动安装好服务，会帮你创建好db存储目录和日志目录
  - next 出现Install mongoDB compass 不勾选（当然你也可以选择安装它，可能需要更久的安装时间），MongoDB Compass 是一个图形界面管理工具，我们可以在后面自己到官网下载安装，下载地址：https://www.mongodb.com/download-center/compass
  - ![image-20200923210715063](C:\Users\Tiger\Desktop\vue\node\static\mongobd4安装.png)
  - ![image-20200923210829031](C:\Users\Tiger\Desktop\vue\node\static\mongobd4安装2.png)

- 配置
  - 安装完成后，进去安装目录下的data文件夹中，创建db文件夹（用来存储数据与配置）
  - 创建好db文件夹后，再进入到bin目录下，按住shift + 右键，点击在此处打开命令行
  - 在当前目录下输入：`mongod --dbpath [你创建db的路径]`
    运行mongoDB服务器，不要关闭这个命令行窗口
  > 补充1：mongod（服务端命令），mongo（客户端命令）
    补充2：使用mongo前，得开启mongod，不然没得用

  - 还是在bin目录下，新打开一个命令行窗口，`mongo`即可连接上数据库
  - 验证成功：打开浏览器输入localhost:27017（localhost是本机，冒号后是端口）,页面出现一行文字 It looks like you are trying to access MongoDB over HTTP on the native driver port.

### 使用mongoose来访问monggoDB

### mongodb使用
- 创建数据库
  `use blog`
  > 插入数据后就可以使用show dbs查看到创建的数据库了
- 插入数据
  ` db.blogList.insert({"title":"css导入的优先顺序"})`

### 参考链接

- https://www.cnblogs.com/hhs1998/p/11880350.html