import {Tabs} from 'antd';
import {Grid, RowTitle} from '@/components/Grid';

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
