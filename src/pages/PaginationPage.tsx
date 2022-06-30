import {Pagination} from 'antd';
import {Page, Grid, ColumnTitle} from '@/components';

export const PaginationPage = () => {
    return (
        <Page title="Pagination 分页" status="开发中">
            <Grid title="基础样式" repeat={1}>
                <ColumnTitle>默认/悬浮/点击</ColumnTitle>
                <Pagination defaultCurrent={1} total={50} />
            </Grid>
        </Page>
    );
};
