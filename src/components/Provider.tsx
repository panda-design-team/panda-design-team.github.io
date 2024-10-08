import {ReactNode} from 'react';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import {MessageContentHolder} from '@panda-design/components';
import {configProviderProps} from '@/theme/theme';

ConfigProvider.config({prefixCls: 'ant-5', theme: configProviderProps.theme});

interface Props {
    children: ReactNode;
}

function Provider({children}: Props) {
    return (
        <ConfigProvider
            {...configProviderProps}
            locale={zhCN}
            prefixCls="ant-5"
        >
            <MessageContentHolder />
            {children}
        </ConfigProvider>
    );
}

export default Provider;
