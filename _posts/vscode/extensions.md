# extensions

```
installVSIXAction.run(vsixPaths?: URI[]) -> this.extensionsWorkbenchService.install(vsix)
-> extensionService.install(vsix)
```

# 安装扩展

vs/platform/extensionManagement/node/extensionManagementService.ts

## 读取 extension package.json 数据

```
getManifest(vsix: string)

'extension/package.json'
```

installFromZipPath(...)

## 调用扩展




