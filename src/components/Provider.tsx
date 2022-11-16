import {ConfigProvider} from 'antd';
import {ReactNode} from 'react';
import {useThemeType} from '@/regions';
import {theme} from './theme';

ConfigProvider.config({prefixCls: 'ant5'});

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
            theme={themeType === 'panda' ? theme : {}}
        >
            {children}
        </ConfigProvider>
    );
}

export default Provider;
