---
layout: post
title: 关于 connect 和 express 的学习笔记
---

## Http

HTTP 设计的哲学

```
        -> Request  -> 
Client                  Server
        <- Response <-    
```

### HTTP 协议

Request 格式

```
<method> <request-URL> <version> <headers>

<entity-body> 
```

Response 格式

```
<version> <status> <reason-phrase> <headers>

<entity-body>
```


## node http 模块

node 提供的 http 模块是如何实现 Http Server 的

官方的经典例子:

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
```

## Connect

### urlencoded

处理表单提交的数据

```
var app = connect()
  .use(connect.urlencoded())
```

Request Headers 包括下面的一条头信息

```
Content-Type:application/x-www-form-urlencoded
```


### methodOverride

重写 http request method

```
req.method = req.headers['x-http-method-override']
```

## Express

Express 基于 Connect 构建，为我们提供了什么？ 

* http 请求方法封装
* url 路由

### http 请求如何导向到 Express 提供的方法

Express 在哪里定义诸如 get, post, put, delete 这些方法的呢？JS 的灵活性提供给开发者动态创建方法的能力。这些 http 协议定义的方法，位于名字叫做 [methods](https://github.com/visionmedia/node-methods) 的 node 的第三方模块中，这个模块定义了 http 中常用以及不常用的方法，Express 正是使用这个集合，动态地创建了相同名字的方法。

具体实现方式，可查阅 Express 的源码，实现代码位于 ./lib/application.js

```
app.get -> router.get -> router.route
```