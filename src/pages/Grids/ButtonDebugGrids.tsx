import {Button as AntButton} from 'antd';
import {ColumnTitle, Grid} from '@/components/Grid';

export const ButtonDebugGrids = () => {
    return (
        <>
            <Grid
                title="附：测试 antd 默认样式"
                fitContent
                repeat={7}
            >
                <ColumnTitle>primary</ColumnTitle>
                <ColumnTitle>default</ColumnTitle>
                <ColumnTitle>dashed</ColumnTitle>
                <ColumnTitle>text</ColumnTitle>
                <ColumnTitle>link</ColumnTitle>
                <ColumnTitle>danger</ColumnTitle>
                <ColumnTitle>ghost</ColumnTitle>
                <AntButton type="primary">主要按钮</AntButton>
                <AntButton>按钮</AntButton>
                <AntButton type="dashed">按钮</AntButton>
                <AntButton type="text">按钮</AntButton>
                <AntButton type="link">按钮</AntButton>
                <AntButton type="primary" danger>按钮</AntButton>
                <AntButton type="primary" ghost>按钮</AntButton>
            </Grid>
        </>
    );
};
