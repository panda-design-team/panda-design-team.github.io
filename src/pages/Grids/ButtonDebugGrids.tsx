import {Button as AntButton} from 'antd';
import {ColumnTitle, Grid} from '@/components/Grid';

export const ButtonDebugGrids = () => {
    return (
        <>
            <Grid
                title="附：测试 antd 默认样式"
                beforeGrid={<p>primary 的阴影显得过于重，对于 Button 推荐直接使用 panda 内的组件</p>}
                fitContent
                repeat={5}
            >
                <ColumnTitle>primary</ColumnTitle>
                <ColumnTitle>default</ColumnTitle>
                <ColumnTitle>dashed</ColumnTitle>
                <ColumnTitle>text</ColumnTitle>
                <ColumnTitle>link</ColumnTitle>
                <AntButton type="primary">主要按钮</AntButton>
                <AntButton>按钮</AntButton>
                <AntButton type="dashed">按钮</AntButton>
                <AntButton type="text">按钮</AntButton>
                <AntButton type="link">按钮</AntButton>
            </Grid>
        </>
    );
};
