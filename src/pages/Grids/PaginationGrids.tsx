import {Pagination} from 'antd';
import {Grid, ColumnTitle} from '@/components';

export const PaginationGrids = () => {
    return (
        <>
            <Grid title="Pagination 分页" repeat={1}>
                <ColumnTitle>默认/悬浮/点击</ColumnTitle>
                <Pagination defaultCurrent={1} total={50} />
            </Grid>
        </>
    );
};
