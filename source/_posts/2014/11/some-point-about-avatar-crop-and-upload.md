---
title: 关于头像裁切上传的相关知识
---

* 上传控件美化
* 无刷新上传
* 图片裁切

## 上传控件美化

浏览器之间对上传控件的皮肤和交互有着不同的定义，出于对设计师超高的审美要求，需要对原生的上传控件做修改，已符合设计稿的初衷，所谓对上传控件的修改，无非是使用图片来遮罩上传控件，有关知识点如下：

1. 使上传控件的透明度为0
2. 图片遮罩在上传控件上面

`html` 结构

    <form action="/avatar" method="post" enctype="multipart/form-data" class="reform-file-ctrl avatar">
     <input type="file" name="avatar" class="file">
     <span class="icon"></span>
    </form>


`css` 代码

    .reform-file-ctrl {
      width: 180px; height: 40px; overflow: hidden; position: relative;
    }
    .reform-file-ctrl .file, .reform-file-ctrl .icon {
      display: block; width: 180px; height: 40px;
      position: absolute; left: 0; top: 0;
      font-size: 100em; background: red;
    }
    .reform-file-ctrl .file {
      opacity: 0;
      filter: alpha(opacity=0);
      z-index: 1;
    }

[查看效果](http://jsfiddle.net/clovery_org/ebcL04r0/)

## 无刷新上传

回顾古老的互联网时代，表单提交还是跳转页面的方式。如今，我们可以使用 `ajax` 实现无刷新表单提交。

虽然 [XMLHttpRequest2](http://www.html5rocks.com/en/tutorials/file/xhr2/) 实现了无刷新上传，但是在部分浏览器占据广大的市场，又不支持这种特性的今天，也只能采取保守的方式来实现这个功能。

基本上这个功能所要求的知识点不多，无非是将表单的 `target` 属性赋值隐藏的 `iframe` 的名字，这样在表单提交的时候，就不会跳转到它提交的地址，从而避免了页面刷新。

`html` 结构

    <form action="/avatar" method="post" enctype="multipart/form-data" target="avatar-iframe">
     <input type="file">
     <input type="submit">
    </form>
    <iframe name="avatar-iframe" src="about:blank" width="0" height="0"></iframe>

`css` 代码

    iframe { display: none; }

上面的代码，我们简单实现了无刷新上传的功能。

还有一个问题，当服务器返回数据，数据到了哪里？如何处理这些数据呢？

答案是：隐藏的 `iframe` 中。这时候，服务器返回的数据必须是一段包含了 `js` 片段的 `html` 代码，这样在 `iframe` 中才能把数据发送给父窗口。

父页面提供一个函数，供子页面调用，从而实现数据通信。

## 图片裁切

图片裁切功能，需要用到 `jquery` 的插件：[imgAreaSelect](http://odyniec.net/projects/imgareaselect/)。