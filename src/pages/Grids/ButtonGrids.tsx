import {Button, IconLogo} from '@panda-design/components';
import {ColumnTitle, Grid, RowTitle} from '@/components/Grid';

export const ButtonGrids = () => {
    return (
        <>
            <Grid
                title="主要按钮"
                beforeGrid={<p>多用于强烈引导用户的操作或多个按钮组合在一起的区分，比如新建操作，确定操作</p>}
                fitContent
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
                beforeGrid={<p>常规按钮，多用于一般性操作，比如批量操作，编辑配置</p>}
                fitContent
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
                beforeGrid={<p>按钮氛围小号 small、中号 middle 和大号 large 三个规格，按钮中文字建议不要超过 6 个中文字符</p>}
                fitContent
            >
                <ColumnTitle />
                <ColumnTitle>最小宽度</ColumnTitle>
                <ColumnTitle>自适应边距</ColumnTitle>
                <RowTitle>small</RowTitle>
                <Button type="primary" size="small">主要按钮</Button>
                <Button type="primary" size="small" icon={<IconLogo />}>长文本按钮</Button>
                <RowTitle>middle</RowTitle>
                <Button type="primary">主要按钮</Button>
                <Button type="primary" icon={<IconLogo />}>长文本按钮</Button>
                <RowTitle>large</RowTitle>
                <Button type="primary" size="large">主要按钮</Button>
                <Button type="primary" size="large" icon={<IconLogo />}>长文本按钮</Button>
            </Grid>
            <Grid
                title="文字按钮"
                beforeGrid={<p>页面中信息层级较低的按钮形式，可用于大面积展示按钮的场景，例如表格操作列，按钮分为 14px 和 12px 两个规格</p>}
                repeat={4}
                fitContent
            >
                <ColumnTitle />
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <ColumnTitle>加载中</ColumnTitle>
                <RowTitle>普通样式 small</RowTitle>
                <Button type="text" size="small" icon={<IconLogo />}>普通按钮</Button>
                <Button type="text" size="small" icon={<IconLogo />} disabled>普通按钮</Button>
                <Button type="text" size="small" icon={<IconLogo />} loading>普通按钮</Button>
                <RowTitle>普通样式 middle</RowTitle>
                <Button type="text" icon={<IconLogo />}>普通按钮</Button>
                <Button type="text" icon={<IconLogo />} disabled>普通按钮</Button>
                <Button type="text" icon={<IconLogo />} loading>普通按钮</Button>
                <RowTitle>加强样式 small</RowTitle>
                <Button type="link" size="small" icon={<IconLogo />}>普通按钮</Button>
                <Button type="link" size="small" icon={<IconLogo />} disabled>普通按钮</Button>
                <Button type="link" size="small" icon={<IconLogo />} loading>普通按钮</Button>
                <RowTitle>加强样式 middle</RowTitle>
                <Button type="link" icon={<IconLogo />}>普通按钮</Button>
                <Button type="link" icon={<IconLogo />} disabled>普通按钮</Button>
                <Button type="link" icon={<IconLogo />} loading>普通按钮</Button>
                <RowTitle>纯文本样式 small</RowTitle>
                <Button type="text" size="small">普通按钮</Button>
                <Button type="text" size="small" disabled>普通按钮</Button>
                <Button type="text" size="small" loading>普通按钮</Button>
                <RowTitle>纯文本样式 middle</RowTitle>
                <Button type="text">普通按钮</Button>
                <Button type="text" disabled>普通按钮</Button>
                <Button type="text" loading>普通按钮</Button>
            </Grid>
            <Grid
                title="图标按钮"
                beforeGrid={<p>页面中控件占比最小的按钮，建议使用高频且易理解的图标，如关闭、复制、删除等，使用纯图标按钮必须有 Tooltip 提示按钮含义</p>}
                fitContent
            >
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <ColumnTitle>加载中</ColumnTitle>
                <Button type="text" icon={<IconLogo />} tooltip="操作按钮" />
                <Button type="text" icon={<IconLogo />} tooltip="操作按钮" disabled />
                <Button type="text" icon={<IconLogo />} tooltip="操作按钮" loading />
            </Grid>
        </>
    );
};
