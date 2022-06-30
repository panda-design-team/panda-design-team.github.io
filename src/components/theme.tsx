import {ThemeConfig} from 'antd/es/config-provider/context';
import colors from './colors';

export const theme: ThemeConfig = {
    token: {
        colorPrimary: '#000',
        colorSuccess: colors['--color-success-6'],
        colorWarning: colors['--color-warning-6'],
        colorError: colors['--color-error-6'],
        colorInfo: colors['--color-info-6'],
        fontSizeBase: 14,
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
