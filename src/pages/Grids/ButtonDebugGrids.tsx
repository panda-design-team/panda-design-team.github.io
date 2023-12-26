import {Button as AntButton, Typography} from 'antd';
import {css} from '@emotion/css';
import {ColumnTitle, Grid} from '@/components/Grid';

const ghostContainerCss = css`
    background-color: lightgray;
    padding: 10px 500px 10px 20px;
    margin: -10px -500px -10px -20px;
`;

export const ButtonDebugGrids = () => {
    return (
        <>
            <Typography.Title>附：测试 antd 默认样式</Typography.Title>
            <Grid fitContent repeat={6}>
                <ColumnTitle>primary</ColumnTitle>
                <ColumnTitle>default</ColumnTitle>
                <ColumnTitle>dashed</ColumnTitle>
                <ColumnTitle>text</ColumnTitle>
                <ColumnTitle>link</ColumnTitle>
                <ColumnTitle>danger</ColumnTitle>
                <AntButton type="primary">主要按钮</AntButton>
                <AntButton>按钮</AntButton>
                <AntButton type="dashed">按钮</AntButton>
                <AntButton type="text">按钮</AntButton>
                <AntButton type="link">按钮</AntButton>
                <AntButton type="primary" danger>按钮</AntButton>
                <AntButton disabled type="primary">主要按钮</AntButton>
                <AntButton disabled>按钮</AntButton>
                <AntButton disabled type="dashed">按钮</AntButton>
                <AntButton disabled type="text">按钮</AntButton>
                <AntButton disabled type="link">按钮</AntButton>
                <AntButton disabled type="primary" danger>按钮</AntButton>
                <div className={ghostContainerCss}>
                    <AntButton ghost type="primary">主要按钮</AntButton>
                </div>
                <AntButton ghost>按钮</AntButton>
                <AntButton ghost type="dashed">按钮</AntButton>
                <AntButton ghost type="text">按钮</AntButton>
                <AntButton ghost type="link">按钮</AntButton>
                <AntButton ghost type="primary" danger>按钮</AntButton>
            </Grid>
        </>
    );
};
