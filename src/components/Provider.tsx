import {ReactNode, useLayoutEffect} from 'react';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {colors} from '@panda-design/components';
import {useThemeType} from '@/regions';
import {themeMap} from '@/components/theme';

ConfigProvider.config({prefixCls: 'ant5', theme: themeMap.black});

interface Props {
    children: ReactNode;
}

function Provider({children}: Props) {
    const themeType = useThemeType();

    // 为了解决动态主题样式问题，panda 本身并不支持动态主题
    useLayoutEffect(
        () => {
            document.body.style.setProperty('--panda-color-primary', ['blue', 'antd'].includes(themeType) ? colors['info-6'] : colors.black);
        },
        [themeType]
    );

    return (
        <ConfigProvider
            autoInsertSpaceInButton={false}
            locale={zhCN}
            prefixCls="ant5"
            // NOTE antd 不支持 undefined 切换
            theme={themeMap[themeType] ?? themeMap.black}
        >
            {children}
        </ConfigProvider>
    );
}

export default Provider;
