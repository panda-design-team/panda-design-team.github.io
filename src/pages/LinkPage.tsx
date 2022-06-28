import Link from '@/panda-design/link';
import {Page, GroupTitle, Grid} from '@/components';

export const LinkPage = () => {
    return (
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
    );
};
