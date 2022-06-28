import {ReactNode, useCallback} from 'react';
import styled from 'styled-components';
import {createMappedRegion} from 'region-core';
import {Radio, Input, Select, Checkbox} from 'antd';
import Button from '@/panda-design/button';
import Link from '@/panda-design/link';
import Tag from '@/panda-design/tag';
import '@/panda-design/style/index.global.less';
import {IconLogo} from '@/icons';
import {ColorGroup, EllipsisTag} from './Detail';

const PageTitle = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    padding: 0 46px;
    font-size: 48px;
    height: 118px;
    background-color: var(--color-gray-3);
    cursor: pointer;
    z-index: 1;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 96px 96px 96px;
    gap: 80px;
`;

const pageVisibleRegion = createMappedRegion<string, boolean>(true, {withLocalStorageKey: 'PandaDesign/page'});

interface PageProps {
    title: string;
    children?: ReactNode;
}

function Page({title, children}: PageProps) {
    const visible = pageVisibleRegion.useValue(title);
    const toggle = useCallback(
        () => {
            pageVisibleRegion.set(title, v => !v);
        },
        [title]
    );
    return (
        <>
            <PageTitle onClick={toggle}>{title}</PageTitle>
            {visible && <PageContainer>{children}</PageContainer>}
        </>
    );
}

const Center = styled.div`
    display: flex;
    align-items: center;
`;

const GridContainer = styled.div<{repeat?: number}>`
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(${props => props.repeat ?? 3}, auto);
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    padding-top: 10px;

    > * {
        width: fit-content;
    }
`;

interface GridProps {
    title?: string;
    description?: string;
    children: ReactNode;
    repeat?: number;
}

function Grid({title, description, children, repeat = 3}: GridProps) {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
            <GridContainer repeat={repeat}>{children}</GridContainer>
        </div>
    );
}

const GroupTitle = styled.div`
    color: var(--color-gray-8);
`;

export const Demo = () => {
    return (
        <>
            <Page title="Color 色彩">
                <Grid title="主色">
                    <ColorGroup type="brand" />
                    <ColorGroup type="gray" />
                </Grid>
                <Grid title="功能色">
                    <ColorGroup type="error" />
                    <ColorGroup type="success" />
                    <ColorGroup type="warning" />
                </Grid>
                <Grid title="辅助色" repeat={4}>
                    <ColorGroup type="cyan" />
                    <ColorGroup type="light-purple" />
                    <ColorGroup type="magenta" />
                    <ColorGroup type="gold" />
                </Grid>
            </Page>
            <Page title="Typography 文字">
                略
            </Page>
            <Page title="Button 按钮">
                <Grid
                    title="主要按钮"
                    description="多用于强烈引导用户的操作或多个按钮组合在一起的区分，比如新建操作，确定操作"
                >
                    <GroupTitle>默认 / 悬浮 / 点击</GroupTitle>
                    <GroupTitle>禁用</GroupTitle>
                    <GroupTitle>加载中</GroupTitle>
                    <Button type="primary">主要按钮</Button>
                    <Button type="primary" disabled onClick={console.error} disabledReason="权限不足">主要按钮</Button>
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
                    <Center>small</Center>
                    <Button type="primary" size="small">主要按钮</Button>
                    <Button type="primary" size="small" icon={<IconLogo />}>长文本按钮</Button>
                    <Center>middle</Center>
                    <Button type="primary" size="middle">主要按钮</Button>
                    <Button type="primary" size="middle" icon={<IconLogo />}>长文本按钮</Button>
                    <Center>large</Center>
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
            <Page title="Link 超链接">
                <Grid
                    repeat={2}
                    title="超链接"
                    // eslint-disable-next-line max-len
                    description="一般用于链接，即导航至某位置，分为当前页面刷新和新页面打开两个场景，当前页刷新场景使用不带图标样式，如表格内链接内容，表格首列信息等，新页面打开超链接使用带有跳转图标的样式，如使用说明等操作"
                >
                    <GroupTitle>默认 / 悬浮 / 点击</GroupTitle>
                    <GroupTitle>禁用</GroupTitle>
                    <Link to="/home">home</Link>
                    <Link to="/home" disabled disabledReason="权限不足">home</Link>
                    <Link to="/home" linkType="text">home</Link>
                    <Link to="/home" linkType="text" disabled>home</Link>
                    <Link to="https://www.example.com">www.example.com</Link>
                    <Link to="https://www.example.com" disabled>www.example.com</Link>
                </Grid>
            </Page>
            <Page title="Tag 标签">
                <Grid title="基础标签" repeat={2}>
                    <Tag type="flat">标签</Tag>
                    <EllipsisTag type="flat">标签文字很多放不下</EllipsisTag>
                </Grid>
                <Grid title="标签样式表" repeat={11}>
                    <GroupTitle>primary</GroupTitle>
                    <GroupTitle>flat</GroupTitle>
                    <GroupTitle>bordered</GroupTitle>
                    <GroupTitle>border-default</GroupTitle>
                    <GroupTitle>text-default</GroupTitle>
                    <GroupTitle>round</GroupTitle>
                    <GroupTitle>round</GroupTitle>
                    <GroupTitle>round</GroupTitle>
                    <GroupTitle>round</GroupTitle>
                    <GroupTitle>round</GroupTitle>
                    <GroupTitle>disabled</GroupTitle>
                    <Tag color="brand" type="primary">标签</Tag>
                    <Tag color="brand" type="flat">标签</Tag>
                    <Tag color="brand" type="bordered">标签</Tag>
                    <Tag color="brand" type="border-default">标签</Tag>
                    <Tag color="brand" type="text-default">标签</Tag>
                    <Tag round color="brand" type="primary">标签</Tag>
                    <Tag round color="brand" type="flat">标签</Tag>
                    <Tag round color="brand" type="bordered">标签</Tag>
                    <Tag round color="brand" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="brand" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="brand" type="primary">标签</Tag>
                    <Tag color="error" type="primary">标签</Tag>
                    <Tag color="error" type="flat">标签</Tag>
                    <Tag color="error" type="bordered">标签</Tag>
                    <Tag color="error" type="border-default">标签</Tag>
                    <Tag color="error" type="text-default">标签</Tag>
                    <Tag round color="error" type="primary">标签</Tag>
                    <Tag round color="error" type="flat">标签</Tag>
                    <Tag round color="error" type="bordered">标签</Tag>
                    <Tag round color="error" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="error" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="error" type="primary">标签</Tag>
                    <Tag color="success" type="primary">标签</Tag>
                    <Tag color="success" type="flat">标签</Tag>
                    <Tag color="success" type="bordered">标签</Tag>
                    <Tag color="success" type="border-default">标签</Tag>
                    <Tag color="success" type="text-default">标签</Tag>
                    <Tag round color="success" type="primary">标签</Tag>
                    <Tag round color="success" type="flat">标签</Tag>
                    <Tag round color="success" type="bordered">标签</Tag>
                    <Tag round color="success" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="success" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="success" type="primary">标签</Tag>
                    <Tag color="warning" type="primary">标签</Tag>
                    <Tag color="warning" type="flat">标签</Tag>
                    <Tag color="warning" type="bordered">标签</Tag>
                    <Tag color="warning" type="border-default">标签</Tag>
                    <Tag color="warning" type="text-default">标签</Tag>
                    <Tag round color="warning" type="primary">标签</Tag>
                    <Tag round color="warning" type="flat">标签</Tag>
                    <Tag round color="warning" type="bordered">标签</Tag>
                    <Tag round color="warning" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="warning" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="warning" type="primary">标签</Tag>
                    <Tag color="gray" type="primary">标签</Tag>
                    <Tag color="gray" type="flat">标签</Tag>
                    <Tag color="gray" type="bordered">标签</Tag>
                    <Tag color="gray" type="border-default">标签</Tag>
                    <Tag color="gray" type="text-default">标签</Tag>
                    <Tag round color="gray" type="primary">标签</Tag>
                    <Tag round color="gray" type="flat">标签</Tag>
                    <Tag round color="gray" type="bordered">标签</Tag>
                    <Tag round color="gray" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="gray" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="gray" type="primary">标签</Tag>
                    <Tag color="disabled" type="primary">标签</Tag>
                    <Tag color="disabled" type="flat">标签</Tag>
                    <Tag color="disabled" type="bordered">标签</Tag>
                    <Tag color="disabled" type="border-default">标签</Tag>
                    <Tag color="disabled" type="text-default">标签</Tag>
                    <Tag round color="disabled" type="primary">标签</Tag>
                    <Tag round color="disabled" type="flat">标签</Tag>
                    <Tag round color="disabled" type="bordered">标签</Tag>
                    <Tag round color="disabled" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="disabled" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="disabled" type="primary">标签</Tag>
                    <Tag color="cyan" type="primary">标签</Tag>
                    <Tag color="cyan" type="flat">标签</Tag>
                    <Tag color="cyan" type="bordered">标签</Tag>
                    <Tag color="cyan" type="border-default">标签</Tag>
                    <Tag color="cyan" type="text-default">标签</Tag>
                    <Tag round color="cyan" type="primary">标签</Tag>
                    <Tag round color="cyan" type="flat">标签</Tag>
                    <Tag round color="cyan" type="bordered">标签</Tag>
                    <Tag round color="cyan" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="cyan" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="cyan" type="primary">标签</Tag>
                    <Tag color="light-purple" type="primary">标签</Tag>
                    <Tag color="light-purple" type="flat">标签</Tag>
                    <Tag color="light-purple" type="bordered">标签</Tag>
                    <Tag color="light-purple" type="border-default">标签</Tag>
                    <Tag color="light-purple" type="text-default">标签</Tag>
                    <Tag round color="light-purple" type="primary">标签</Tag>
                    <Tag round color="light-purple" type="flat">标签</Tag>
                    <Tag round color="light-purple" type="bordered">标签</Tag>
                    <Tag round color="light-purple" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="light-purple" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="light-purple" type="primary">标签</Tag>
                    <Tag color="magenta" type="primary">标签</Tag>
                    <Tag color="magenta" type="flat">标签</Tag>
                    <Tag color="magenta" type="bordered">标签</Tag>
                    <Tag color="magenta" type="border-default">标签</Tag>
                    <Tag color="magenta" type="text-default">标签</Tag>
                    <Tag round color="magenta" type="primary">标签</Tag>
                    <Tag round color="magenta" type="flat">标签</Tag>
                    <Tag round color="magenta" type="bordered">标签</Tag>
                    <Tag round color="magenta" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="magenta" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="magenta" type="primary">标签</Tag>
                    <Tag color="gold" type="primary">标签</Tag>
                    <Tag color="gold" type="flat">标签</Tag>
                    <Tag color="gold" type="bordered">标签</Tag>
                    <Tag color="gold" type="border-default">标签</Tag>
                    <Tag color="gold" type="text-default">标签</Tag>
                    <Tag round color="gold" type="primary">标签</Tag>
                    <Tag round color="gold" type="flat">标签</Tag>
                    <Tag round color="gold" type="bordered">标签</Tag>
                    <Tag round color="gold" type="border-default">标签</Tag>
                    <Tag round icon={<IconLogo />} color="gold" type="text-default">标签</Tag>
                    <Tag disabled icon={<IconLogo />} color="gold" type="primary">标签</Tag>
                </Grid>
            </Page>
            <Page title="Radio 单选框">
                <Radio>Radio</Radio>
                <Radio.Group>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </Radio.Group>
            </Page>
            <Page title="多样操作">
                <Grid repeat={4}>
                    <Input />
                    <Select />
                    <Checkbox>A</Checkbox>
                    <Button>确认</Button>
                </Grid>
            </Page>
        </>
    );
};
