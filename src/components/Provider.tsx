import {ConfigProvider} from 'antd';
import {ReactNode} from 'react';
import {theme} from '@panda-design/components';
import {useThemeType} from '@/regions';

ConfigProvider.config({prefixCls: 'ant5'});

// 对于文档流中的 Title，不应用 panda-design 注入的 margin
if (theme.components?.Typography) {
    delete theme.components.Typography.titleMarginTop;
    delete theme.components.Typography.titleMarginBottom;
}
theme.cssVar = true;

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
