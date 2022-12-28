import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {Segmented, Space} from 'antd';
import {Layer} from 'gaussian-background-generator';
import {IconLogo} from '@panda-design/components';
import {createLink} from '@/components/Link';
import GaussianBackground from '@/components/GaussianBackground';
import {useThemeType, setThemeType, useRoleType, setRoleType, Role} from '@/regions';
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

const roleText: Record<Role, ReactNode> = {
    产品经理: (
        <>
            <p>产品经理同学你好。😘😘。通过这份规范，你将了解到通常的一些交互准则、以及视觉效果。在进行原型设计时，你会对最终的呈现有一些底气。</p>
            <p>对于规范中所列举的种种效果，后续的设计和研发工作相对会比较轻松，对于产出的效率会有基本的保证。</p>
        </>
    ),
    设计师: (
        <>
            <p>设计师同学你好。😘😘。规范对于你将有几点最主要的帮助。</p>
            <p>1. 如果你刚加入这个团队，你可以通过规范了解到我们的交互准则、以及视觉效果。我们尽可能的从原理的角度来阐述，以期所有的交互/视觉设计师都拥有相对一致的设计理念和设计思路。</p>
            <p>2. 规范可以笼统的看作两个部分：a. 场景、以及 b. 场景中的组件，规范中对于场景的列举，主要是灵活的建议和启发。但是对于组件而言，请把它视为积木城堡中的一整块，在搭积木时，我们不会把某一块积木锯开。</p>
            <p>3. 在日常的设计工作中，你可以使用规范来查询相应的场景，同类的场景可以延续之前的设计，对于前端同学来说也会更为高效。如果你发现某类场景没有被这份规范所覆盖，或者有值得改进的地方，这正是我们的契机，请不吝啬的指出场景覆盖的不足之处，帮助我们改进效能。</p>
            <p>4. 应当认识到，规范并不是万能的。一个通用的规范落入到一个具体的场景中时，有很多需要考虑的地方：怎样的组件更适合这些场景，如何组合串联起流程，这是业务产出中非常重要，也是依赖于设计师的一环。</p>
        </>
    ),
    前端开发: (
        <>
            <p>前端开发同学你好。😘😘。这份规范是用 react 技术栈写成的，这意味着页面上列出的所有的场景对你而言都是小菜一碟。不过你需要留意：</p>
            <p>对组件的 hack 是一个非常危险的行为，如果你必须要用魔改的方式实现你的需求，这一定意味着至少有两个地方出错了。其一，你不应该拿到一份不符合规范的设计稿，并且你不应该花费时间去处理规范和实际的不一致，这是流程上的错误；其二，你的魔改很可能会在将来失效，并给你的后人带来困难（很可能是你自己），这是技术债务层面上的错误。</p>
            <p>正确的做法是什么？你应当在视觉评审时尝试了解视觉设计背后的原因，如果你认为视觉稿不符合规范，你应当提出你的问题：为什么用这个组件而不是那个？为什么规范中是这个间距，而设计中是那个？</p>
            <p>如果可以带来确实的用户体验的提升，我们很愿意投入更多的时间和精力，如果可以的话，你也可以在规范中添加新的场景，这样其他的产品线也可以使用。但如果你没有被说服，那么按照规范总是没有错的。</p>
        </>
    ),
    组件库开发: (
        <>
            <p>组件库开发同学你好。😘😘。在组件开发过程中，我们需要始终保证规范中的内容是符合我们的期望的，一些额外的检查点也会添加到这个频道，在发布组件库前，你需要确认相关组件和场景的完好。</p>
        </>
    ),
};

export const PrefacePage = () => {
    const themeType = useThemeType();
    const roleType = useRoleType();

    return (
        <StyledGaussianBackground layers={layersLight}>
            <PageTitle><StyledIconLogo />Panda Design</PageTitle>
            <div>
                <p>Panda Design 基于 antd@5 开发的一套设计系统，旨在 Ant Design 的基础上覆盖更多场景。</p>
                <p>这里是 Panda Design 的设计规范，规范主要会介绍到我们的一些理念，进一步的介绍组件以及它们的使用场景。</p>
                <p>目前此规范和相关的组件库都还没有正式发布。我们将稍晚于 antd@5 发布我们的正式版本。当然，如果你需要，你可以在<NpmLink>这里</NpmLink>找到现有的 Panda Design 组件库，但考虑到可能的巨大变动，我们并不建议你使用。</p>
                <p>antd@5 的设计系统非常给力，使得我们可以畅想如何在其基础上构造我们的主题、自定义组件，并可以和 antd 以及其他的第三方自定义组件一起使用。我们会尽可能的与 antd 原本的 api 兼容，让你可以很快速的在各个风格内切换，让风格切换成为一件令人愉悦的事情。</p>
                <p>这份规范的源代码可以在<DemoLink>这里</DemoLink>找到。</p>
                <br />
                <p>在此篇文档中，我们会依次介绍 Panda Design 的 Color 色彩、Layout 布局、Button 按钮、Link 超链接、Body 页面主体、Form 表单、Decoration 装饰、Animation 动态效果。每个部分会包含数个组件。部分规范还在定制中，并非最终定稿。</p>
                <br />
                <p>
                    <Space size={32}>
                        <Space>
                            <div>我的角色</div>
                            <Segmented
                                options={['产品经理', '设计师', '前端开发', '组件库开发']}
                                value={roleType}
                                // @ts-expect-error
                                onChange={setRoleType}
                            />
                        </Space>
                        {(roleType === '组件库开发') && (
                            <Space>
                                <div>切换主题</div>
                                <Segmented
                                    options={['panda', 'antd']}
                                    value={themeType}
                                    // @ts-expect-error
                                    onChange={setThemeType}
                                />
                            </Space>
                        )}
                    </Space>
                </p>
                {roleText[roleType]}
                <br />
                <p>你看到的这份规范基于 <Code>antd@5.1.1</Code>，并非最终定稿。</p>
            </div>
        </StyledGaussianBackground>
    );
};
