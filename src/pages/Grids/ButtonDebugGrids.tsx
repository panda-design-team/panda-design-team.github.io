import {Typography} from 'antd';
import {Button} from '@panda-design/components';
import {css} from '@emotion/css';
import {ColumnTitle, Grid, RowTitle} from '@/components/Grid';

const ghostContainerCss = css`
    background-color: lightgray;
    padding: 10px 500px 10px 20px;
    margin: -10px -500px -10px -20px;
`;

export const ButtonDebugGrids = () => {
    return (
        <>
            <Typography.Title>样式表</Typography.Title>
            <Grid fitContent repeat={7}>
                <ColumnTitle />
                <ColumnTitle>primary</ColumnTitle>
                <ColumnTitle>flat</ColumnTitle>
                <ColumnTitle>default</ColumnTitle>
                <ColumnTitle>dashed</ColumnTitle>
                <ColumnTitle>text</ColumnTitle>
                <ColumnTitle>link</ColumnTitle>
                <RowTitle>normal</RowTitle>
                <Button type="primary">主要按钮</Button>
                <Button type="flat">按钮</Button>
                <Button>按钮</Button>
                <Button type="dashed">按钮</Button>
                <Button type="text">按钮</Button>
                <Button type="link">按钮</Button>
                <RowTitle>disabled</RowTitle>
                <Button disabled type="primary">主要按钮</Button>
                <Button disabled type="flat">按钮</Button>
                <Button disabled>按钮</Button>
                <Button disabled type="dashed">按钮</Button>
                <Button disabled type="text">按钮</Button>
                <Button disabled type="link">按钮</Button>
                <RowTitle>danger</RowTitle>
                <Button danger type="primary">主要按钮</Button>
                <Button danger type="flat">按钮</Button>
                <Button danger>按钮</Button>
                <Button danger type="dashed">按钮</Button>
                <Button danger type="text">按钮</Button>
                <Button danger type="link">按钮</Button>
                <RowTitle>ghost</RowTitle>
                <div className={ghostContainerCss}>
                    <Button ghost type="primary">主要按钮</Button>
                </div>
                <Button ghost type="flat">按钮</Button>
                <Button ghost>按钮</Button>
                <Button ghost type="dashed">按钮</Button>
                <Button ghost type="text">按钮</Button>
                <Button ghost type="link">按钮</Button>
            </Grid>
        </>
    );
};
