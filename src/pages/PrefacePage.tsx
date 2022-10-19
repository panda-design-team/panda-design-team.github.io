import styled from '@emotion/styled';
import {Segmented, Space} from 'antd';
import {Layer} from 'gaussian-background-generator';
import {IconLogo} from '@panda-design/components';
import {createLink} from '@/components/Link';
import GaussianBackground from '@/components/GaussianBackground';
import {useThemeType, setThemeType} from '@/regions';
import {Code} from '@/components/Typography';

const layersLight: Layer[] = [
    {orbs: 4, radius: 20, maxVelocity: 0.2, color: '#ebf1ff'},
    {orbs: 5, radius: 15, maxVelocity: 0.2, color: '#cfddff'},
    {orbs: 6, radius: 10, maxVelocity: 0.2, color: '#e6f9ff'},
    {orbs: 6, radius: 9, maxVelocity: 0.2, color: '#f8edff'},
    {orbs: 6, radius: 8, maxVelocity: 0.2, color: '#ffebf4'},
    {orbs: 6, radius: 7, maxVelocity: 0.2, color: '#fff8e0'},
    {color: '#fff'},
];

const StyledGaussianBackground = styled(GaussianBackground)`
    padding: 100px 50px 100px 50px;
`;

const StyledIconLogo = styled(IconLogo)`
    font-size: 80px !important;
`;

export const PageTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 80px;
    height: 120px;
    margin-bottom: 50px;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const NpmLink = createLink('https://www.npmjs.com/package/@panda-design/components');

const DemoLink = createLink('https://github.com/panda-design-team/panda-design-team.github.io');

export const PrefacePage = () => {
    const themeType = useThemeType();

    return (
        <StyledGaussianBackground layers={layersLight}>
            <PageTitle><StyledIconLogo />Panda Design</PageTitle>
            <div>
                <p>Panda Design 基于 antd@5 开发的一套设计系统，旨在 Ant Design 的基础上覆盖更多场景。</p>
                <p>这里是 Panda Design 的设计规范，规范主要会介绍到我们的一些理念，进一步的介绍组件以及它们的使用场景。</p>
                <p>目前此规范和相关的组件库都还没有正式发布。我们将稍晚于 antd@5 发布我们的正式版本。当然，如果你需要，你可以在<NpmLink>这里</NpmLink>找到现有的 Panda Design 组件库，但考虑到可能的巨大变动，我们并不建议你使用。</p>
                <p>在此，我并不想抢先发布 antd@5 相关的资讯。但 antd@5 的设计系统非常给力，使得我们可以畅想如何在其基础上构造我们的主题、自定义组件，并可以和 antd 以及其他的第三方自定义组件一起使用。</p>
                <p>我们会尽可能的与 antd 原本的 api 兼容，让你可以很快速的在各个风格内切换，让风格切换成为一件令人愉悦的事情。</p>
                <p>这份规范的源代码可以在<DemoLink>这里</DemoLink>找到。</p>
                <br />
                <p>
                    <Space>
                        <div>切换主题</div>
                        <Segmented
                            options={['panda', 'antd']}
                            value={themeType}
                            // @ts-expect-error
                            onChange={setThemeType}
                        />
                    </Space>
                </p>
                <p>在此篇文档中，我们会依次介绍 Panda Design 的 Color 色彩、Layout 布局、Button 按钮、Link 超链接、Body 页面主体、Form 表单、Decoration 装饰、Animation 动态效果。每个部分会包含数个组件。部分规范还在定制中，并非最终定稿。</p>
                <br />
                <p>你看到的这份规范基于 <Code>antd@5.0.0-alpha.3</Code>，并非最终定稿。</p>
            </div>
        </StyledGaussianBackground>
    );
};
