import {Switch} from 'antd';
import {ColumnTitle, Grid, Page} from '@/components';
import {CheckboxGrids} from './Grids/CheckboxGrids';
import {RadioGrids} from './Grids/RadioGrids';

export const FormPage = () => {
    return (
        <Page title="6. Form 表单">
            <div>
                <p>还在开发中，但可以确定的是，表单会分为表单域和表单组件两个部分。</p>
            </div>
            <Grid title="Switch 开关">
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <ColumnTitle>禁用（关闭）</ColumnTitle>
                <Switch />
                <Switch checked disabled />
                <Switch checked={false} disabled />
            </Grid>
            <CheckboxGrids />
            <RadioGrids />
        </Page>
    );
};
