import {ConfigProvider} from 'antd';
import {ReactNode} from 'react';
import {useThemeType} from '@/regions';
import {theme} from './theme';

interface Props {
    children: ReactNode;
}

function Provider({children}: Props) {
    const themeType = useThemeType();
    return (
        <ConfigProvider
            autoInsertSpaceInButton={false}
            // TODO 待 antd 修复
            theme={themeType === 'panda' ? theme : undefined}
        >
            {children}
        </ConfigProvider>
    );
}

export default Provider;
