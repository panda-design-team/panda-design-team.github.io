import {theme, ThemeConfig} from 'antd';
import {getConfigProviderProps} from '@panda-design/components';
import {getPrimaryColor} from '@/regions';
import {antPrefixCls} from '@/theme/constants';

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
    if (color === '#000' || color === 'black') {
        return getConfigProviderProps({colorPrimary: color}, {formatTheme, antPrefixCls});
    }
    return getConfigProviderProps({colorPrimary: color, colorInfo: color}, {formatTheme, antPrefixCls});
};

export const configProviderProps = getThemeByColorPrimary(getPrimaryColor());

export const token = theme.getDesignToken(configProviderProps.theme);
