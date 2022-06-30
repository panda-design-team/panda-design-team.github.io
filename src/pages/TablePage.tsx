import {Table} from 'antd';
import {Page, Grid} from '@/components';

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

export const TablePage = () => {
    return (
        <Page title="Table 表格" status="开发中">
            <div>需要解决与 Tabs 相互冲突的问题</div>
            <Grid title="基础样式" repeat={1}>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                />
            </Grid>
        </Page>
    );
};
