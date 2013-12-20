---
layout: post
title: 使用node.js开发博客的一些思考
---

## 基本功能

* 注册
* 登录
* 文章
* 留言
* 上传

## 组件

* 有效性验证
* 数据库接口


## 用户注册

数据结构
{% highlight javascript %}
['login'
, 'password'
, 'role'
, 'email'
, 'nickname'
, 'status'
, 'created']
{% endhighlight %}
    
用户名和邮箱需要验证唯一性

1. 不同的用户名，相同的邮箱
2. 用户名和邮箱组合唯一

无法保证用户的有效性，也无法保证邮箱的有效性。

采用方案2，用户名和邮箱组合，如果用户忘记先前注册，也起到提示作用，同时也避免无意义的申请。

抵制恶意注册，加入验证码功能。


## to be continued...
