---
title: 我为什么要使用 jade
date: '2013-12-28'
tags: ['前端', 'Jade']
---

## 想像这样一种境况：

中小型项目，静态页面有 30 张左右。页面有相同的头尾，也有可通用的组件。在复用组件的时候，使用拷贝、粘贴。然后，当这个组件变更的时候，要替换所有使用了该组件的页面。

然后，有一天，接到需求，整个项目的页面头部需要替换部分文字提示，页尾统一加上版权信息，这一个列表项都加上链接或都去掉链接。

如果这些工作全部要手动去完成。假想下一个项目有百张页面，那岂不是要疯掉。陷入拷贝粘贴的困境中。所幸，我们有一些技术可以选择。

## Apache 提供模块的 SSI

SSI 全称 (Server Side Include)，你可以从[这里](http://httpd.apache.org/docs/current/howto/ssi.html)获取更多的资料。

<pre>
&lt;!--#include file="layouts/header.html"--&gt;
...
&lt;!--#include file="layouts/footer.html"--&gt;
</pre>

像这样，把公共部分提取出去，只要修改一处就可。太复杂的语法没有用过。在一定程度上能解决些复用的问题。

这样做所带来的问题是，如何将这些生成最终的 html 代码！apache 只是给了你一种动态的效果，不能帮助你保存生成后的 html 代码。有 node 之后，做这些事情变不再复杂。当然，别的语言也可以达到同样的效果。当然你要熟悉改语言。

## 为什么选择 jade

jade 改变了 html 书写的方式。jade 代码简洁、优美，生成的 html 代码亦然。我相信你的职业生涯中肯定会遇到一些缩进风格迥异的同事，甚至不缩进的 html 代码，而 jade 生成的 html 代码，肯定会更令你愉悦些。至少你不用关心标签是否闭合了。

jade 能帮我解决一些问题，而这些问题正是在页面开发中不断遇到的重复的事情

- 模版重用 (extend、block)
- 模块重用 (include)
- 对象迭代 (each)
- 函数功能 (mixin)

关于 jade 的友好性来说，各人有不同的看法。如果你喜欢 python，也可能喜欢 jade。强制缩进没什么不好，习惯而已，混用 tab 和 space 导致的问题，不是 jade 的问题。你都这么随意了，为什么不能受到语言的报复呢？！

## jade to html

jade 代码只是一种中间形式，不会提供给后端程序，他们肯定也不乐意接受。当然你的后端是 node 开发那就再好不过了:)

这时候，应该考虑如何将 jade 转成 html 代码。jade 本身提供了命令行工具，感兴趣可自行去官网学习。在日常工作中，我个人最常用的是 Grunt 来 build jade， 生成 html 代码。或者，你可以使用 [yeoman](http://yeoman.io/) 来构建你自己的开发环境，乃至项目组的工作环境。

本文只是介绍个人使用 jade 的理由，具体示例可以从官网取得。

## 参考资源

1. [jade-lang.com](jade-lang.com)
2. [对 Jade 的一些看法](http://willerce.com/post/the-views-of-jade)
3. [如何选择 EJS 和 Jade？](http://www.zhihu.com/question/20355486)
