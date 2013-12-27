---
layout  : post
title   : JS检测浏览器是否支持原生的date控件
---

代码借鉴自modernizr.com，因项目中只用到date控件，故抽离自此。

{% highlight javascript %}
var isSupportNativeDatepicker = (function() {
    var input, bool, smile = ':)'

    input = document.createElement('input')
    input.setAttribute('type', 'date');
    bool = input.type !== 'text';

    /* 
     * 对于不支持date控件的浏览器来说
     * Desktop: 
     *  type    : text
     *  bool    : false 
     *
     * Mobile
     *  type    : date
     *  bool    : true
     *
     */

    if (bool) { // type = date 的控件会执行这步
        input.value = smile

        bool = input.value != smile 
        /*
         * 判断值是否合法，依赖date控件值的特性，过滤伪造的type=date的控件
         * 伪造的date的控件返回的值是:)
         * 支持date的浏览器会过滤设置的非法值，返回空字符串
         */
    }

    return !! bool
})()

alert(isSupportNativeDatepicker)

{% endhighlight %}
