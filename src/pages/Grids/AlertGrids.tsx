import {Alert} from 'antd';
import {Grid, ColumnTitle} from '@/components';

export const AlertGrids = () => {
    return (
        <Grid title="Alert 警告提示" repeat={1}>
            <ColumnTitle>含图标</ColumnTitle>
            <Alert showIcon type="success" message="Success Text" />
            <Alert showIcon type="info" message="Info Text" />
            <Alert showIcon type="warning" message="Warning Text" />
            <Alert showIcon type="error" message="Error Text" />
            <ColumnTitle>不含图标</ColumnTitle>
            <Alert type="success" message="Success Text" />
            <Alert type="info" message="Info Text" />
            <Alert type="warning" message="Warning Text" />
            <Alert type="error" message="Error Text" />
        </Grid>
    );
};
