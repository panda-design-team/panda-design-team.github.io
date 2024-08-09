import {ReactNode, useEffect} from 'react';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {getPrimaryColor, usePrimaryColor} from '@/regions';
import {getThemeByColorPrimary} from '@/theme/theme';

ConfigProvider.config({prefixCls: 'ant-5', theme: getThemeByColorPrimary(getPrimaryColor())});

interface Props {
    children: ReactNode;
}

function Provider({children}: Props) {
    const primaryColor = usePrimaryColor();

    useEffect(
        () => {
            ConfigProvider.config({prefixCls: 'ant-5', theme: getThemeByColorPrimary(primaryColor)});
        },
        [primaryColor]
    );

    return (
        <ConfigProvider
            autoInsertSpaceInButton={false}
            locale={zhCN}
            prefixCls="ant-5"
            // NOTE antd 不支持 undefined 切换
            theme={getThemeByColorPrimary(primaryColor)}
        >
            {children}
        </ConfigProvider>
    );
}

export default Provider;
