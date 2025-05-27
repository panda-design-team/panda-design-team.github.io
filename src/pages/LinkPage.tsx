import {Typography} from 'antd';
import {Page} from '@/components/Page';
import {ColumnTitle, Grid} from '@/components/Grid';
import {createLink, Link, LinkWithDisabledReason} from '@/components/Link';

interface Params {
    page: 'home' | 'about';
}

const PageLink = createLink<Params>('/{page}');
const ExampleLink = createLink('https://www.example.com');
const DemoLink = createLink('https://github.com/panda-design-team/panda-design-team.github.io/blob/main/src/components/Link.tsx');
const PackageLink = createLink('https://github.com/dancerphil/react-router-template-link');

export const LinkPage = () => {
    return (
        <Page title="4. Link 超链接">
            <p>
                一般情况下，Link 经常需要和 react-router-dom 配合使用，所以我们没有在 panda-design 导出 Link 组件，你可以
                <DemoLink>参考规范的实现</DemoLink>
                ，在你的代码库下根据配置创建相应的组件。
            </p>
            <p>进一步的，你可以使用 createLink 创建一个 Link 使用，并定义类型。</p>
            <p>当 url 是一个外部链接时，会自动的推断并标记。</p>
            <p>
                {'更多配置请前往 '}
                <PackageLink>react-router-template-link</PackageLink>
            </p>
            <Typography.Title>超链接</Typography.Title>
            <Grid fitContent repeat={4}>
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>文字</ColumnTitle>
                <ColumnTitle>无样式</ColumnTitle>
                <ColumnTitle>禁用</ColumnTitle>
                <Link to="/home">home</Link>
                <Link to="/home" linkType="text">home</Link>
                <Link to="/home" linkType="none">home</Link>
                <LinkWithDisabledReason to="/home" disabled disabledReason="权限不足">home</LinkWithDisabledReason>
                <PageLink page="about">about</PageLink>
                <PageLink page="about" linkType="text">about</PageLink>
                <PageLink page="about" linkType="none">about</PageLink>
                <PageLink page="about" disabled>about</PageLink>
                <Link to="https://www.example.com">www.example.com</Link>
                <Link to="https://www.example.com" linkType="text">www.example.com</Link>
                <ExampleLink linkType="none">www.example.com</ExampleLink>
                <ExampleLink disabled>www.example.com</ExampleLink>
            </Grid>
        </Page>
    );
};
