import {Typography} from 'antd';
import {Page, Grid} from '@/components';

export const TypographyPage = () => {
    return (
        <Page title="Typography 文字" status="开发中">
            <Grid title="文字梯度" repeat={1}>
                <Typography.Title>h1. 标题</Typography.Title>
                <Typography.Title level={2}>h2. 标题</Typography.Title>
                <Typography.Title level={3}>h3. 标题</Typography.Title>
                <Typography.Title level={4}>h4. 标题</Typography.Title>
                <Typography.Title level={5}>h5. 标题</Typography.Title>
                <Typography.Text>正文</Typography.Text>
                <Typography.Text type="secondary">辅助信息</Typography.Text>
            </Grid>
        </Page>
    );
};
