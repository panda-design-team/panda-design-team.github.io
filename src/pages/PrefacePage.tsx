import styled from '@emotion/styled';
import {Segmented, Space} from 'antd';
import {Layer} from 'gaussian-background-generator';
import {IconLogo} from '@panda-design/components';
import {createLink} from '@/components/Link';
import GaussianBackground from '@/components/GaussianBackground';
import {useThemeType, setThemeType} from '@/regions';

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

const DemoLink = createLink('https://github.com/panda-design-team/panda-design-team.github.io');

export const PrefacePage = () => {
    const themeType = useThemeType();

    return (
        <StyledGaussianBackground layers={layersLight}>
            <PageTitle><StyledIconLogo />Panda Design</PageTitle>
            <div>
                <p>Panda Design 基于 antd@5 开发的一套设计系统，旨在 Ant Design 的基础上覆盖更多场景。</p>
                <p>这里是 Panda Design 的设计规范，规范中会详细的介绍每一个组件和它们的使用场景。</p>
                <p>目前，你只能查看部分规范，相关的组件库还没有发布。我们将稍晚于和 antd@5 的 alpha 版本发布我们的 alpha 版本。</p>
                <p>在此，我并不想抢先发布 antd@5 相关的资讯。但 antd@5 的设计系统非常给力，使得我们可以畅想如何在其基础上构造我们的主题、自定义组件，并可以和 antd 以及其他的第三方自定义组件一起使用。</p>
                <p>我们会尽可能的与 antd 原本的 api 兼容，让你可以很快速的在各个风格内切换，让风格切换成为一件令人愉悦的事情。</p>
                <p>这份规范的源代码可以在<DemoLink>这里</DemoLink>找到。</p>
                <br />
                <p>你看到的这份规范基于 antd@5.0.0-experimental.23，并非最终定稿。</p>
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
            </div>
        </StyledGaussianBackground>
    );
};
