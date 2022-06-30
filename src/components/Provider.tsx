import {ConfigProvider} from 'antd';
import {ReactNode} from 'react';
import {theme} from './theme';

interface Props {
    children: ReactNode;
}

function Provider({children}: Props) {
    return (
        <ConfigProvider
            autoInsertSpaceInButton={false}
            theme={theme}
        >
            {children}
        </ConfigProvider>
    );
}

export default Provider;
