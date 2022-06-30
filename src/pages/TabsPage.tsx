import {Tabs} from 'antd';
import {Grid, Page, ColumnTitle} from '@/components';

export const TabsPage = () => {
    return (
        <Page title="Tabs 标签页" status="开发中">
            <div>需要解决与 Table 相互冲突的问题</div>
            <Grid title="基础样式" repeat={1}>
                <div>默认</div>
                <Tabs>
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" disabled />
                </Tabs>
            </Grid>
            <Grid title="标签页尺寸" repeat={2}>
                <ColumnTitle>small</ColumnTitle>
                <Tabs size="small">
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" />
                </Tabs>
                <ColumnTitle>middle</ColumnTitle>
                <Tabs size="middle">
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" />
                </Tabs>
                <ColumnTitle>large</ColumnTitle>
                <Tabs size="large">
                    <Tabs.TabPane key="1" tab="标签" />
                    <Tabs.TabPane key="2" tab="标签" />
                    <Tabs.TabPane key="3" tab="标签" />
                </Tabs>
            </Grid>

        </Page>
    );
};
