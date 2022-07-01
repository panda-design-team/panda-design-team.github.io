import {ThemeConfig} from 'antd/es/config-provider/context';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#000',
        colorSuccess: '#40b333',
        colorWarning: '#f27c49',
        colorError: '#e64552',
        colorInfo: '#317ff5',
        fontSizeBase: 14,
        motionBase: 0,
        motionUnit: 0,
    },
    override: {
        derivative: {
            colorSplit: 'transparent',
            colorBgContainerSecondary: 'transparent',
        },
        alias: {
        },
    },
    hashed: true,
};
