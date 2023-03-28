import {Alert, Typography} from 'antd';
import {Grid, ColumnTitle, RowTitle} from '@/components/Grid';

export const AlertGrids = () => {
    return (
        <>
            <Typography.Title>Alert 警告提示</Typography.Title>
            <Grid repeat={5}>
                <ColumnTitle />
                <ColumnTitle>success</ColumnTitle>
                <ColumnTitle>info</ColumnTitle>
                <ColumnTitle>warning</ColumnTitle>
                <ColumnTitle>error</ColumnTitle>
                <RowTitle>含图标</RowTitle>
                <Alert showIcon type="success" message="Success Text" />
                <Alert showIcon type="info" message="Info Text" />
                <Alert showIcon type="warning" message="Warning Text" />
                <Alert showIcon type="error" message="Error Text" />
                <RowTitle>不含图标</RowTitle>
                <Alert type="success" message="Success Text" />
                <Alert type="info" message="Info Text" />
                <Alert type="warning" message="Warning Text" />
                <Alert type="error" message="Error Text" />
            </Grid>
        </>
    );
};
