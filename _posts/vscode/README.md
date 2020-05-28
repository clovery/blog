# vscode

## UI Interface

[官方文档](https://code.visualstudio.com/docs/getstarted/userinterface)

## 
```
layoutService
```

`vs/workbench/browser/workbench.ts` -> `renderWorkbench`

创建不同的 `Parts`，之后调用 `Part.create`，来渲染不同的 `Part`。

`Part` 类位于 `vs/workbench/part.ts` 文件，其 `create` 方法，负责绘制 `UI` 部分。



## StatusbarPart

位于 `vs/workbench/browser/parts/statusbar/statusbarPart.ts` 文件，继承自 `Part`。


`vs/workbench/browser/parts/activitybarPart.ts` 界面最左侧的部分，宽度固定 48。
