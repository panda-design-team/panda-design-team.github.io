import {ThemeConfig} from 'antd/es/config-provider/context';
import {colors} from '@panda-design/components';

export const theme: ThemeConfig = {
    token: {
        // ---- SeedToken ----
        colorPrimary: colors['gray-10'],
        colorSuccess: colors['success-6'],
        colorWarning: colors['warning-6'],
        colorError: colors['error-6'],
        colorInfo: colors['info-6'],
        // colorTextBase: undefined,
        // colorBgBase: undefined,
        borderRadius: 2,
        // font, line, motion, size, controlHeight, zIndex, opacityImage, wireframe 未列出，有需要可以自行研究

        // ---- NeutralColorMapToken ----
        // 暂时先保持 antd 规范，后续调整
        // colorTextBase: string;
        // colorBgBase: string;
        // colorText: string;
        // colorTextSecondary: string;
        // colorTextTertiary: string;
        // colorTextQuaternary: string;
        // colorFill: string;
        // colorFillSecondary: string;
        // colorFillTertiary: string;
        // colorFillQuaternary: string;
        // colorBgContainer: string;
        // colorBgElevated: string;
        // colorBgLayout: string;
        // colorBgSpotlight: string;
        // colorBorder: string;
        // colorBorderSecondary: string;

        // ---- ColorMapToken ----
        // 黑色系列全部定制
        colorPrimaryBg: colors['gray-3'], // 1
        colorPrimaryBgHover: colors['gray-3'], // 2
        colorPrimaryBorder: colors['gray-4'], // 3
        colorPrimaryBorderHover: colors['gray-10'], // 4 // 暂时只有 Slider 用了
        colorPrimaryHover: colors['gray-10'], // 5
        // colorPrimary: colors.black, // 6
        colorPrimaryActive: colors['gray-10'], // 7
        colorPrimaryTextHover: colors['gray-9'], // 8 // 不确定哪里用了
        colorPrimaryText: colors['gray-10'], // 9 // 不确定哪里用了
        colorPrimaryTextActive: colors['gray-9'], // 10 // 不确定哪里用了

        // ---- CommonMapToken ----
        // borderRadius 统一为 2
        borderRadiusXS: 2,
        borderRadiusSM: 2,
        borderRadiusLG: 2,
        // borderRadiusOuter: 2,

        // ---- AliasToken ----
        colorSplit: 'transparent',
        // Button
        controlOutline: 'transparent',
        // Table
        colorFillAlter: 'transparent',
        // Select
        // colorPrimaryBg: colors['gray-3'],
    },
    // 此部分 token 原则上还未确定，所以可能后续改动较大
    components: {
        Button: {
            // @ts-expect-error
            controlHeightSM: 28,
            controlHeight: 32,
            controlHeightLG: 36,
        },
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
        Menu: {
            // marginXXS: 8,
            padding: 20,
        },
    },
    // algorithm: defaultAlgorithmV4,
};
