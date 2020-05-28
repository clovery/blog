## UI 组件 (Part) 是如何注册的

类 `Part` 初始化时，调用 `layoutService.registerPart(this)` 实现。

## layoutService

文件 `vs/workbench/services/layout/browser/layoutService.ts` 定义接口 `IWorkbenchLayoutService`。

文件 `vs/workbench/browser/layout.ts` 中，定义 `Layout` 类，实现接口 `IWorkbenchLayoutService`。

## Parts

在文件 `/vs/workbench/services/layout/browser/layoutService.ts` 定义了枚举类型的 `Parts`。
