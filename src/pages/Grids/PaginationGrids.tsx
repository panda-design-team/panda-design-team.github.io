import {Pagination, Typography} from 'antd';
import {Grid, ColumnTitle} from '@/components/Grid';

export const PaginationGrids = () => {
    return (
        <>
            <Typography.Title>Pagination 分页</Typography.Title>
            <Grid repeat={1}>
                <ColumnTitle>默认/悬浮/点击</ColumnTitle>
                <Pagination defaultCurrent={1} total={50} />
            </Grid>
        </>
    );
};
