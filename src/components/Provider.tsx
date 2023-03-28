import {ConfigProvider, ThemeConfig} from 'antd';
import {ReactNode} from 'react';
import {theme} from '@panda-design/components';
import {useThemeType} from '@/regions';

ConfigProvider.config({prefixCls: 'ant5'});

const nextTheme: ThemeConfig = {
    ...theme,
    token: {
        ...theme.token,
        fontSizeHeading1: 28,
        fontSizeHeading2: 24,
        fontSizeHeading3: 20,
        fontSizeHeading4: 16,
        fontSizeHeading5: 14,
        lineHeightHeading1: 1.5,
        lineHeightHeading2: 1.5,
        lineHeightHeading3: 1.5,
        lineHeightHeading4: 1.5,
        lineHeightHeading5: 22 / 14,
    },
};

interface Props {
    children: ReactNode;
}

function Provider({children}: Props) {
    const themeType = useThemeType();
    return (
        <ConfigProvider
            autoInsertSpaceInButton={false}
            prefixCls="ant5"
            // NOTE antd 不支持 undefined 切换
            theme={themeType === 'panda' ? nextTheme : {}}
        >
            {children}
        </ConfigProvider>
    );
}

export default Provider;
