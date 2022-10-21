import {injectGlobal} from '@emotion/css';
import {ThemeConfig} from 'antd/es/config-provider/context';
import {colors} from '@panda-design/components';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: colors['gray-10'],
        colorSuccess: colors['success-6'],
        colorWarning: colors['warning-6'],
        colorError: colors['error-6'],
        colorInfo: colors['brand-6'],
        fontSizeBase: 14,
        // TODO massage 未生效
        radiusBase: 2,
        radiusXS: 2,
        radiusSM: 2,
        radiusLG: 2,
        radiusOuter: 2,
        // motionBase: 0,
        // motionUnit: 0,

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
        // 调整 padding
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
