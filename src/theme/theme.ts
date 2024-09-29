import {theme, ThemeConfig} from 'antd';
import {getConfigProviderProps} from '@panda-design/components';
import {getPrimaryColor} from '@/regions';
import {colors} from '@/theme/colors';
import {antPrefixCls} from '@/theme/constants';

const formatTheme = (theme: ThemeConfig) => {
    // 对于文档流中的 Title，不应用 panda-design 注入的 margin
    if (theme.components?.Typography) {
        delete theme.components.Typography.titleMarginTop;
        delete theme.components.Typography.titleMarginBottom;
    }
    if (theme.components) {
        theme.components.Menu = {
            activeBarBorderWidth: 0, // from 1
            groupTitleFontSize: 12, // from 14
            itemMarginInline: 8, // from 4
            iconSize: 16, // from 14
        };
        theme.components.Table = {
            fontWeightStrong: 'normal' as unknown as number,
            headerBg: 'transparent', // from #f0f0f0
            headerSplitColor: 'transparent', // from #f0f0f0
            rowHoverBg: 'transparent', // from #fafafa
            borderColor: colors['gray-3'], // from #f0f0f0
            headerColor: colors['gray-7'], // from rgba(0, 0, 0, 0.88)
            cellPaddingBlock: 10, // from 16
            cellPaddingBlockMD: 10, // from 12 (保持 MD 要小于等于 LG)
            cellPaddingInline: 10, // from 16
        };
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
