import {Tabs, Typography} from 'antd';
import {Grid, RowTitle} from '@/components/Grid';

const itemsDisabled = [{key: '1', label: '标签'}, {key: '2', label: '标签'}, {key: '3', label: '标签', disabled: true}];

const items = [{key: '1', label: '标签'}, {key: '2', label: '标签'}, {key: '3', label: '标签'}];

export const TabsGrids = () => {
    return (
        <>
            <Typography.Title>Tabs 标签页</Typography.Title>
            <p>Tabs 可能会作为布局的一部分进行介绍</p>
            <Typography.Title level={3}>基础样式</Typography.Title>
            <Grid repeat={1}>
                <Tabs items={itemsDisabled} />
            </Grid>
            <Typography.Title level={3}>标签页尺寸</Typography.Title>
            <Grid repeat={2}>
                <RowTitle>small</RowTitle>
                <Tabs size="small" items={items} />
                <RowTitle>middle</RowTitle>
                <Tabs size="middle" items={items} />
                <RowTitle>large</RowTitle>
                <Tabs size="large" items={items} />
            </Grid>
        </>
    );
};
