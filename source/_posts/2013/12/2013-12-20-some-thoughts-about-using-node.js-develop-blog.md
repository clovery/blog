---
title: 使用 Node.js 开发博客的一些思考
---

## Node.js模块选择

* [express](https://github.com/visionmedia/express)
* [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) or [mongoose](https://github.com/learnboost/mongoose)

Express处理前端请求，配合MongoDB数据库，足以满足项目的需求。mongoose相对官方提供的node库，api设计得更加友好些。前期使用了官方提供的库，切换到mongoose虽然没有花费太多精力。值得思考的是如何封装各种驱动库，提供统一接口，减少数据库切换带来的代价。

## 基本功能

* 注册
* 登录
* 文章
* 留言
* 上传

## 组件

* 验证码
* 注册数据保护
* 数据模型接口


## 用户注册

数据结构，mongoose提供的方案

```javascript
{
  login     : String,
  password  : String,
  email     : String,
  nickname  : { type: String, default: '' },
  created   : { type: Date, default: Date.now },
  status    : { type: String, default: '' }
}
```

用户名和邮箱验证的问题

1. 不同的用户名，相同的邮箱
2. 用户名和邮箱组合唯一

采用方案2，用户名和邮箱组合，如果用户忘记先前注册，也起到提示作用，同时也避免无意义的申请。

防止恶意注册，可加入验证码功能。


## to be continued...


