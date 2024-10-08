import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {Segmented, Space, Typography} from 'antd';
import {GaussianBackground, IconLogo} from '@panda-design/components';
import {trimStart} from 'lodash';
import {css} from '@emotion/css';
import {createLink} from '@/components/Link';
import {Role, setRoleType, useRoleType} from '@/regions';
import {Code} from '@/components/Typography';
import packageJson from '../../package.json';

const {dependencies} = packageJson;

const StyledGaussianBackground = styled(GaussianBackground)`
    padding: 100px;

    h1.ant-5-typography {
        margin-top: 80px;
    }
`;

const StyledIconLogo = styled(IconLogo)`
    font-size: 80px !important;
`;

const PageTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 80px;
    height: 120px;
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
            <p>2. 规范可以笼统的看作两个部分：a. 场景、以及 b. 场景中的组件，规范中对于场景的列举，主要是灵活的建议和启发。但是对于组件而言，可以把它视为积木城堡中的一整块，在搭积木时，我们不会把某一块积木锯开。</p>
            <p>3. 在日常的设计工作中，你可以使用规范来查询相应的场景，同类的场景可以延续之前的设计，对于前端同学来说也会更为高效。如果你发现某类场景没有被这份规范所覆盖，或者有值得改进的地方，这正是我们的契机，请不吝啬的指出场景覆盖的不足之处，帮助我们改进效能。</p>
            <p>4. 应当认识到，规范并不是万能的。一个通用的规范落入到一个具体的场景中时，有很多需要考虑的地方：怎样的组件更适合这些场景，如何组合串联起流程，这是业务产出中非常重要，也是依赖于设计师的一环。</p>
        </>
    ),
    前端开发: (
        <>
            <p>前端开发同学你好。😘😘。这份规范是用 react 技术栈写成的，这意味着页面上列出的所有的场景对你而言都是小菜一碟。不过你需要留意：</p>
            <p>对组件的 hack 是一个非常危险的行为，如果你必须要用魔改的方式实现你的需求，这一定意味着至少有两个地方出错了。其一，你不应该拿到一份不符合规范的设计稿，并且你不应该花费时间去处理规范和实际的不一致，这是流程上的错误；其二，你的魔改很可能会在将来失效，并给你的后人带来困难（很可能是你自己），这是技术债务层面上的错误。</p>
            <p>正确的做法是什么？你应当在视觉评审时尝试了解视觉设计背后的原因，如果你认为视觉稿不符合规范，你应当提出你的问题：为什么用这个组件而不是那个？为什么规范中是这个间距，而设计中是那个？等等...如果某个不符合规范的设计可以带来用户体验的提升，我们很愿意投入更多的时间和精力，请把相关的工作量计算在你的估时中。如果情况允许的话，请找到组件库开发同学，在规范中加入新的场景，这样其他的产品线也可以使用。或者你也可以选择不被说服，并按照规范进行开发。</p>
        </>
    ),
    组件库开发: (
        <>
            <p>组件库开发同学你好。😘😘。在组件开发过程中，我们需要始终保证规范中的内容是符合我们的期望的，一些额外的检查点也会添加到这个频道，在发布组件库前，你需要确认相关组件和场景的完好。</p>
        </>
    ),
};

export const PrefacePage = () => {
    const roleType = useRoleType();

    return (
        <StyledGaussianBackground>
            <PageTitle><StyledIconLogo />Panda Design</PageTitle>
            <Typography.Title>关于 Panda Design</Typography.Title>
            <p><Code>Panda Design</Code> 是基于 <Code>antd@5</Code> 开发的一套设计系统，旨在以高可插拔的方式注入新的设计风格。你可以在 <NpmLink>这里</NpmLink> 找到现有的 <Code>Panda Design</Code> 组件库代码，欢迎试用。</p>
            <p><Code>antd@5</Code> 的设计系统非常给力，使得我们可以畅想如何在其基础上构造我们的主题和组件，并可以和 antd 以及其他的第三方自定义组件一起使用。</p>
            <p>原则上，<Code>Panda Design</Code> 仅是 antd API 的拓展，你可以很快速且愉悦的在两个版本的风格之间切换。</p>
            <Typography.Title>关于此设计规范</Typography.Title>
            <p>这里是 <Code>Panda Design</Code> 的设计规范，主要会介绍到我们的一些理念、组件以及它们的使用场景。</p>
            <p>目前此规范仍在调整中，所以你可以看到我们采用了形如 <Code>0.x.x</Code> 的版本号。 这份规范的源代码可以在 <DemoLink>这里</DemoLink> 找到。</p>
            <br />
            <p>在此篇文档中，我们会依次介绍 <Code>Panda Design</Code> 的 Flavor 风格、Layout 布局、Button 按钮、Link 超链接、Body 页面主体、Form 表单、Decoration 装饰、Animation 动态效果。每个部分会包含规范说明、组件、用例。</p>
            <p>你看到的这份规范基于 <Code>antd@{trimStart(dependencies.antd, '^')}</Code> 与 <Code>@panda-design/components@{trimStart(dependencies['@panda-design/components'], '^')}</Code>，由于潜在可能的变动，尽量使用互相对应的版本。</p>
            <Typography.Title>选择一个职能</Typography.Title>
            <Space size={32} className={css`margin-bottom: 1em`}>
                <Space>
                    <div>职能</div>
                    <Segmented
                        options={['产品经理', '设计师', '前端开发', '组件库开发']}
                        value={roleType}
                        onChange={setRoleType}
                    />
                </Space>
            </Space>
            {roleText[roleType]}
        </StyledGaussianBackground>
    );
};
