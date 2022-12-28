import {Tabs} from 'antd';
import {Grid, ColumnTitle} from '@/components/Grid';

export const TabsGrids = () => {
    return (
        <>
            <Grid title="Tabs 标签页">
                <div>
                    <p>Tabs 可能会作为布局的一部分进行介绍</p>
                </div>
            </Grid>
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
        </>
    );
};
