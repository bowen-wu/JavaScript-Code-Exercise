## 同步 VS 异步

#### 需求

依次读取 3 个文件，第 2 个文件的路径是第 1 个文件的内容，第 3 个文件的路径是第 2 个文件的内容，最终打印出第 3 个文件的内容

#### 读取文件

使用 node.js 的相关 API

` fs.readFileSync ` ==> 同步读取文件内容
` fs.readFile ` ==> 异步读取文件内容

#### 历程
callback ==> Promise ==> yield+generator ==> async+await
