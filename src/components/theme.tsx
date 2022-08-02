import {injectGlobal} from '@emotion/css';
import {ThemeConfig} from 'antd/es/config-provider/context';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#000',
        colorSuccess: '#40b333',
        colorWarning: '#f27c49',
        colorError: '#e64552',
        colorInfo: '#317ff5',
        fontSizeBase: 14,
        // motionBase: 0,
        // motionUnit: 0,
    },
    override: {
        derivative: {
        },
        alias: {
            colorSplit: 'transparent',
            // colorBgContainerSecondary: 'transparent',
        },
        // 调整默认阴影
        Button: {},
        // 调整 padding
        Tabs: {},
    },
    hashed: true,
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
        }
    `;
};
