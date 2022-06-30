import {Page} from '@/components';
import {createLink} from '@/components/Link';

const DemoLink = createLink('https://github.com/panda-design-team/panda-design-team.github.io');

export const PrefacePage = () => {
    return (
        <Page title="Preface 前言">
            <div>
                <p>Panda Design 基于 antd@5 开发的一套设计系统，旨在 Ant Design 的基础上覆盖更多场景。</p>
                <p>这里是 Panda Design 的设计规范，规范中会详细的介绍每一个组件和它们的使用场景。</p>
                <p>目前，你只能查看部分规范，相关的组件库还没有发布。我们将稍晚于和 antd@5 的 alpha 版本发布我们的 alpha 版本。</p>
                <p>在此，我并不想抢先发布 antd@5 相关的资讯。但 antd@5 的设计系统非常给力，使得我们可以畅想如何在其基础上构造我们的主题、自定义组件，并可以和 antd 以及其他的第三方自定义组件一起使用。</p>
                <p>我们会尽可能的与 antd 原本的 api 兼容，让你可以很快速的在各个风格内切换，让风格切换成为一件令人愉悦的事情。</p>
                <p>这份规范的源代码可以在<DemoLink>这里</DemoLink>找到。</p>
            </div>
        </Page>
    );
};
