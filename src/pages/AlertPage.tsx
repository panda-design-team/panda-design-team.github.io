import {Alert} from 'antd';
import {Page, Grid, ColumnTitle} from '@/components';

export const AlertPage = () => {
    return (
        <Page title="Alert 警告提示" status="开发中">
            <div>【experimental】看起来 antd 用 primaryColor 作为 infoColor 了，待 antd 方修复</div>
            <Grid title="基础样式" repeat={1}>
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
        </Page>
    );
};
