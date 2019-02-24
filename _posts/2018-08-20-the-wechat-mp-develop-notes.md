---
title: 微信公众号开发笔记
category: 前端
---

## 菜单配置步骤

1. 检查 `wx` 和 `WeixinJSBridge` 对象存在
2. 请求当前页面的后端接口认证数据
3. 调用 `wx.config` 配置
4. 执行相应方法

## iOS

路由改变，链接不会更新，导致拷贝错误链接。

通过 `location.href = "xxxx"` 刷新

刷新页面需要标记，防止页面循环刷新

## token

为防止 `token` 拷贝，禁用“拷贝链接”，或 `token` 使用之后，移除该参数
