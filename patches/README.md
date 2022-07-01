# 使用 patch 修复 panda 和 antd 的动效冲突

## 如何引用该 patch

复制 `patches` 目录下的 `antd+5.0.0-experimental.0.patch`

在 `package.json` 中增加:

```json
{
    "scripts": {
        "postinstall": "patch-package"
    },
    "devDependencies": {
        "patch-package": "^6.4.7"
    }
}
```

更多说明请参考：https://www.npmjs.com/package/patch-package
