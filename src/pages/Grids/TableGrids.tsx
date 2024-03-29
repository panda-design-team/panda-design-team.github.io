import {Table, Typography} from 'antd';
import {Grid} from '@/components/Grid';

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
    },
    {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
    },
];

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
    },
];

export const TableGrids = () => {
    return (
        <>
            <Typography.Title>Table 表格</Typography.Title>
            <Grid repeat={1}>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                />
            </Grid>
        </>
    );
};
