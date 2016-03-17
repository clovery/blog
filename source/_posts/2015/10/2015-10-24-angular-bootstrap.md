---
title: angular 初始化
---

## 初始化的方式

1. 自动初始化
2. 手动初始化

### 自动初始化

引入 angular.js 文件，angular 会扫描 html 中拥有 ng-app 属性的首个标签，作为 angular 的根元素初始化应用。
	
	
	<html ng-app>
	...
	</html>
	<script src="angular.js"></script>

### 手动初始化

手动初始化需要用到 `angular.bootstrap(element, modules)` 方法。

	<html>
	...
	</html>
	<script src="angular.js"></script>
	<script>
	angular.module('app', [])
	angular.bootstrap(document, ['app'])
	</script>

## 二者的区别

自动初始化在只能实现单个的 angular 应用。

手动初始化可以在页面局部实现 angular 应用，单页面可以实现多个 angular 应用。

## 参考资源

* https://docs.angularjs.org/guide/bootstrap