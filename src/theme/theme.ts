import {theme, ThemeConfig} from 'antd';
import {getTheme} from '@panda-design/components';
import {getPrimaryColor} from '@/regions';

const formatTheme = (theme: ThemeConfig) => {
    // 对于文档流中的 Title，不应用 panda-design 注入的 margin
    if (theme.components?.Typography) {
        delete theme.components.Typography.titleMarginTop;
        delete theme.components.Typography.titleMarginBottom;
    }
    return theme;
};

export const getThemeByColorPrimary = (color: string) => {
    if (color === 'antd') {
        return {};
    }
    return getTheme({colorPrimary: color}, formatTheme);
};

export const themeConfig = getThemeByColorPrimary(getPrimaryColor());

export const token = theme.getDesignToken(themeConfig);
