# Panda Design

## 一些思路

1. 规划中有与 osui 互相适配的需要，主要是把 osui 假装为 panda，所以尽量用 osui 中已经存在的概念和技术。
2. 部分组件可能会从 `rc-components` 来开发，但这样确实成本很高，所以应该也有部分组件是从 antd 来开发。兼容性需要再看下。一个已知问题是 ipipe service 组件可能会引入一些 side effect。
3. 发布某个包后，将 `import Button from '@/panda-design/button';` 改为 `import Button from '@panda-design/button';` 即可。
4. 部分组件实际是由其他组件库实现的，仅仅改了色盘。所以 panda-design 主要可能是单包引用，有需要的地方则改。成熟后也许提供整包引用。
5. 所有 className 和 css variable 有 panda 前缀

## TODO

- [x] Color 色盘
- [x] Button 按钮
- [x] Link 链接
- [x] Icon 图标，暂时用 yarn generate-icons 的方案
- [x] Tag 标签
- [ ] 替换所有 Tag 标签
- [ ] 解决 css 复用问题 @see `src/design/Card/index.less`
- [ ] 发包前解决 antd 修改问题 @see `patches/antd.patch`
- [ ] 解决 ipipe service component 的问题，可能采取发包的方式。
- [ ] 部分组件已设计，如无特殊动效，采用 osui + css variables 覆盖实现（也可能考虑 antd@5 动态主题）
- [ ] 其他组件待设计
