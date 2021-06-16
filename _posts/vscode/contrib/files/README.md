# Explorer

## 目录结构

```txt
├── browser
│   ├── editors
│   │   ├── binaryFileEditor.ts
│   │   ├── fileEditorHandler.ts
│   │   ├── fileEditorInput.ts
│   │   ├── textFileEditor.ts
│   │   ├── textFileEditorTracker.ts
│   │   └── textFileSaveErrorHandler.ts
│   ├── explorerService.ts
│   ├── explorerViewlet.ts
│   ├── fileActions.contribution.ts
│   ├── fileActions.ts
│   ├── fileCommands.ts
│   ├── fileImportExport.ts
│   ├── files.contribution.ts
│   ├── files.ts
│   ├── files.web.contribution.ts
│   ├── media
│   │   └── explorerviewlet.css
│   └── views
│       ├── emptyView.ts
│       ├── explorerDecorationsProvider.ts
│       ├── explorerView.ts
│       ├── explorerViewer.ts
│       ├── media
│       │   └── openeditors.css
│       └── openEditorsView.ts
├── common
│   ├── dirtyFilesIndicator.ts
│   ├── explorerModel.ts
│   ├── files.ts
│   └── workspaceWatcher.ts
├── electron-sandbox
│   ├── fileActions.contribution.ts
│   ├── fileCommands.ts
│   ├── files.contribution.ts
│   └── textFileEditor.ts
└── test
    └── browser
        ├── editorAutoSave.test.ts
        ├── explorerModel.test.ts
        ├── explorerView.test.ts
        ├── fileActions.test.ts
        ├── fileEditorInput.test.ts
        ├── fileOnDiskProvider.test.ts
        └── textFileEditorTracker.test.ts
```

[`vs/workbench/contrib/files/browser/views/explorerView.ts`](https://github.com/clovery/vscode/blob/main/src/vs/workbench/contrib/files/browser/views/explorerView.ts)

```
export class ExplorerView extends ViewPane {

}
```
