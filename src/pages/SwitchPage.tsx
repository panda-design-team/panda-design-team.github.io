import {Switch} from 'antd';
import {Page, Grid, ColumnTitle} from '@/components';

export const SwitchPage = () => {
    return (
        <Page title="Switch 开关" status="待调整">
            <Grid>
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用 TODO</ColumnTitle>
                <ColumnTitle>禁用（关闭）</ColumnTitle>
                <Switch />
                <Switch checked disabled />
                <Switch checked={false} disabled />
            </Grid>
        </Page>
    );
};
