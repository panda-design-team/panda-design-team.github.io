import {Button, IconLogo} from '@/panda-design';
import {Page, ColumnTitle, Grid, RowTitle} from '@/components';
import {createLink} from '@/components/Link';

const DocLink = createLink('https://github.com/panda-design-team/panda-design-team.github.io/blob/main/patches/README.md');

export const ButtonPage = () => {
    return (
        <Page title={'Button 按钮'} done>
            <div>
                <p>
                    由于 antd 波浪动效的实现使用了 ::after 伪类，在使用新动效时会有冲突，这导致点击按钮后动画效果会有一些偏差。在 Panda Design 正式发布之时，我们承诺会解决此问题，但此时，你需要
                    <DocLink>参考此文档</DocLink>
                    处理动效的冲突。
                </p>
            </div>
            <Grid
                title="主要按钮"
                description="多用于强烈引导用户的操作或多个按钮组合在一起的区分，比如新建操作，确定操作"
            >
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <ColumnTitle>加载中</ColumnTitle>
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
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <ColumnTitle>加载中</ColumnTitle>
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
                <ColumnTitle />
                <ColumnTitle>最小宽度</ColumnTitle>
                <ColumnTitle>自适应边距</ColumnTitle>
                <RowTitle>small</RowTitle>
                <Button type="primary" size="small">主要按钮</Button>
                <Button type="primary" size="small" icon={<IconLogo />}>长文本按钮</Button>
                <RowTitle>middle</RowTitle>
                <Button type="primary" size="middle">主要按钮</Button>
                <Button type="primary" size="middle" icon={<IconLogo />}>长文本按钮</Button>
                <RowTitle>large</RowTitle>
                <Button type="primary" size="large">主要按钮</Button>
                <Button type="primary" size="large" icon={<IconLogo />}>长文本按钮</Button>
            </Grid>
            <Grid
                title="文字按钮"
                description="页面中信息层级较低的按钮形式，可用于大面积展示按钮的场景，例如表格操作列，按钮分为 14px 和 12px 两个规格"
            >
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <ColumnTitle>加载中</ColumnTitle>
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
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <ColumnTitle>加载中</ColumnTitle>
                <Button type="icon" icon={<IconLogo />} tooltip="操作按钮" />
                <Button type="icon" icon={<IconLogo />} tooltip="操作按钮" disabled />
                <Button type="icon" icon={<IconLogo />} tooltip="操作按钮" loading />
            </Grid>
        </Page>
    );
};
