import {injectGlobal} from '@emotion/css';
import {ThemeConfig} from 'antd/es/config-provider/context';
import {colors} from '@panda-design/components';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: colors['gray-10'],
        colorSuccess: colors['success-6'],
        colorWarning: colors['warning-6'],
        colorError: colors['error-6'],
        colorInfo: colors['info-6'],
        // fontSize: 14,
        // TODO massage 没有在 Provider 下，暂时也没有提供配置
        borderRadius: 2,
        borderRadiusXS: 2,
        borderRadiusSM: 2,
        borderRadiusLG: 2,
        borderRadiusOuter: 2,
        // motionBase: 0,
        // motionUnit: 0,

        // 下面的变量需要测试调整
        // alias
        colorSplit: 'transparent',
        // Button
        controlOutline: 'transparent',
        // Table
        colorFillAlter: 'transparent',
        // Select
        controlItemBgActive: colors['gray-3'],
    },
    components: {
        Table: {
            // colorFillAlter 的粒度不够细，加了以后 hover 的背景颜色也没了
            // colorFillAlter: 'transparent',
            padding: 10,
            paddingContentVerticalLG: 10,
        },
        Tree: {
            paddingXS: 0,
            // 非规范
            // colorPrimary: colors['info-2'],
            // colorTextLightSolid: 'inherit',
            // controlHeightSM: 28,
        },
        Tabs: {
            // 还没提供
            // tabsHorizontalGutter: 0,
        },
    },
    // algorithm: defaultAlgorithmV4,
};

export const resetStyle = () => {
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
        html,
        body {
            padding: 0;
            margin: 0;
        }
        
        body {
            font-feature-settings: "tnum","tnum";
            background-color: #fff;
            color: rgba(0,0,0,.85);
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
            font-size: 14px;
            font-variant: tabular-nums;
            line-height: 1.5715;
            // additional
            overflow-x: hidden;
        }
    `;
};
