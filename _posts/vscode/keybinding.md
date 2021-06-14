# keybinding

1. 监听键盘事件
2. 注册快捷键
3. 解析注册的快捷键，调用处理器

## 流程

绑定事件 `vs/workbench/services/keybinding/browser/keybindingService.ts`。

监听 window keydown 事件，触发 `this._dispatch(keyEvent, keyEvent.target)`。

接着转到 `vs/platform/keybinding/common/abstractKeybindingService.ts`，调用 `_doDispatch(keybinding: ResolvedKeybinding, target: IContextKeyServiceTarget, isSingleModiferChord = false)` 方法，解析获取注册的快捷键，调用其提供的 `handler`。



## 快捷键

### 保存

注册 `vs/workbench/contrib/files/browser/fileCommands.ts`

```ts
export const SAVE_FILE_COMMAND_ID = 'workbench.action.files.save'

KeybindingsRegistry.registerCommandAndKeybindingRule({
  when: undefined,
  weight: KeybindingWeight.WorkbenchContrib,
  primary: KeyMod.CtrlCmd | KeyCode.KEY_S,
  id: SAVE_FILE_COMMAND_ID,
  handler: accessor => {
    return saveSelectedEditors(accessor, { reason: SaveReason.EXPLICIT, force: true /* force save even when non-dirty */ });
  }
});
```
