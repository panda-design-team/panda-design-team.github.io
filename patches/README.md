# 使用 patch 禁用 antd 波浪

## 如何引用该 patch

复制 `patches` 目录下的 `antd+4.21.4.patch.back` 为 `antd+4.21.4.patch`

在 `package.json` 中增加:

```json
{
    "scripts": {
        "postinstall": "patch-package"
    }
}
```

更多说明请参考：https://www.npmjs.com/package/patch-package
