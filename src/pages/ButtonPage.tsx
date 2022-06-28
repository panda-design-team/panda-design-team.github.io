import styled from '@emotion/styled';
import {Button, IconLogo} from '@panda-design/components';
import {Page, GroupTitle, Grid} from '@/components';

const VerticalCenter = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonPage = () => {
    return (
        <Page title="Button 按钮">
            <Grid
                title="主要按钮"
                description="多用于强烈引导用户的操作或多个按钮组合在一起的区分，比如新建操作，确定操作"
            >
                <GroupTitle>默认 / 悬浮 / 点击</GroupTitle>
                <GroupTitle>禁用</GroupTitle>
                <GroupTitle>加载中</GroupTitle>
                <Button type="primary">主要按钮</Button>
                <Button type="primary" disabled disabledReason="权限不足">主要按钮</Button>
                <Button type="primary" loading>主要按钮</Button>
                <Button type="primary" icon={<IconLogo />}>主要按钮</Button>
                <Button type="primary" icon={<IconLogo />} disabled>主要按钮</Button>
                <Button type="primary" icon={<IconLogo />} loading>主要按钮</Button>
            </Grid>
            <Grid
                title="普通按钮"
                description="常规按钮，多用于一般性操作，比如批量操作，编辑配置"
            >
                <GroupTitle>默认 / 悬浮 / 点击</GroupTitle>
                <GroupTitle>禁用</GroupTitle>
                <GroupTitle>加载中</GroupTitle>
                <Button type="flat">普通按钮</Button>
                <Button type="flat" disabled>普通按钮</Button>
                <Button type="flat" loading>普通按钮</Button>
                <Button type="default" icon={<IconLogo />}>普通按钮</Button>
                <Button type="default" icon={<IconLogo />} disabled>普通按钮</Button>
                <Button type="default" icon={<IconLogo />} loading>普通按钮</Button>
            </Grid>
            <Grid
                title="按钮尺寸"
                description="按钮氛围小号 small、中号 middle 和大号 large 三个规格，按钮中文字建议不要超过 6 个中文字符"
            >
                <GroupTitle />
                <GroupTitle>最小宽度</GroupTitle>
                <GroupTitle>自适应边距</GroupTitle>
                <VerticalCenter>small</VerticalCenter>
                <Button type="primary" size="small">主要按钮</Button>
                <Button type="primary" size="small" icon={<IconLogo />}>长文本按钮</Button>
                <VerticalCenter>middle</VerticalCenter>
                <Button type="primary" size="middle">主要按钮</Button>
                <Button type="primary" size="middle" icon={<IconLogo />}>长文本按钮</Button>
                <VerticalCenter>large</VerticalCenter>
                <Button type="primary" size="large">主要按钮</Button>
                <Button type="primary" size="large" icon={<IconLogo />}>长文本按钮</Button>
            </Grid>
            <Grid
                title="文字按钮"
                description="页面中信息层级较低的按钮形式，可用于大面积展示按钮的场景，例如表格操作列，按钮分为 14px 和 12px 两个规格"
            >
                <GroupTitle>默认 / 悬浮 / 点击</GroupTitle>
                <GroupTitle>禁用</GroupTitle>
                <GroupTitle>加载中</GroupTitle>
                <Button type="text" size="middle">普通按钮</Button>
                <Button type="text" size="middle" disabled>普通按钮</Button>
                <Button type="text" size="middle" loading>普通按钮</Button>
                <Button type="text" size="small">普通按钮</Button>
                <Button type="text" size="small" disabled>普通按钮</Button>
                <Button type="text" size="small" loading>普通按钮</Button>
            </Grid>
            <Grid
                title="图标按钮"
                description="页面中控件占比最小的按钮，建议使用高频且易理解的图标，如关闭、复制、删除等，使用纯图标按钮必须有 Tooltip 提示按钮含义"
            >
                <GroupTitle>默认 / 悬浮 / 点击</GroupTitle>
                <GroupTitle>禁用</GroupTitle>
                <GroupTitle>加载中</GroupTitle>
                <Button type="icon" icon={<IconLogo />} tooltip="操作按钮" />
                <Button type="icon" icon={<IconLogo />} tooltip="操作按钮" disabled />
                <Button type="icon" icon={<IconLogo />} tooltip="操作按钮" loading />
            </Grid>
        </Page>
    );
};
