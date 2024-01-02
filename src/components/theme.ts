import {themeBlack, themeBlue} from '@panda-design/components';

// 对于文档流中的 Title，不应用 panda-design 注入的 margin
if (themeBlack.components?.Typography) {
    delete themeBlack.components.Typography.titleMarginTop;
    delete themeBlack.components.Typography.titleMarginBottom;
}
if (themeBlue.components?.Typography) {
    delete themeBlue.components.Typography.titleMarginTop;
    delete themeBlue.components.Typography.titleMarginBottom;
}
if (themeBlack.token) {
    themeBlack.token.borderRadius = 4;
}
if (themeBlue.token) {
    themeBlue.token.borderRadius = 4;
}

export const themeMap = {
    black: themeBlack,
    blue: themeBlue,
    antd: {},
};
