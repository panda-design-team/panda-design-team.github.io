import {Tabs, Typography} from 'antd';
import {Grid, RowTitle} from '@/components/Grid';

export const TabsGrids = () => {
    return (
        <>
            <Typography.Title>Tabs 标签页</Typography.Title>
            <p>Tabs 可能会作为布局的一部分进行介绍</p>
            <Typography.Title level={3}>基础样式</Typography.Title>
            <Grid repeat={1}>
                <Tabs>
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" disabled />
                </Tabs>
            </Grid>
            <Typography.Title level={3}>标签页尺寸</Typography.Title>
            <Grid repeat={2}>
                <RowTitle>small</RowTitle>
                <Tabs size="small">
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" />
                </Tabs>
                <RowTitle>middle</RowTitle>
                <Tabs size="middle">
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" />
                </Tabs>
                <RowTitle>large</RowTitle>
                <Tabs size="large">
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" />
                </Tabs>
            </Grid>
        </>
    );
};
