import {Typography} from 'antd';
import styled from '@emotion/styled';
import {Text} from '@panda-design/components';
import {Page} from '@/components/Page';
import {MenuGrids} from '@/pages/Grids/MenuGrids';
import {WithDemo} from '@/components/WithDemo';
import {VisualFlowDemo} from '@/pages/Demos/VisualFlowDemo';
import {ModalGrids} from '@/pages/Grids/ModalGrids';

const Underline = styled.span`
    text-decoration: underline;
`;

export const LayoutPage = () => {
    return (
        <Page title="2. Layout 布局">
            <p>与 antd 类似的，我们简单了列举了一些文字排版的基本格式。但我们同时认为，根据不同的场景和需要，在一个具体的设计场景中，你可以进行必要的调整。</p>
            <p>文字是非常基本的信息载体，也是用户最常接触的页面元素。通过合理的字号、字重、字体颜色、以及行与行、段落与段落的间距，我们可以更好的表达信息。</p>
            <br />
            <Typography.Title level={3}>视觉动线</Typography.Title>
            <WithDemo demo={<VisualFlowDemo />}>
                <p>用户在一个页面中浏览和聚焦信息时，倾向于由左上至右下，从大到小。在我们排版时，需要遵从这个内在逻辑，让信息的排布符合由标题到正文，由概括到具体。这样更能够符合用户潜在的逻辑期待，使产品的表达更容易被理解：</p>
                <p>1.1 页面中最核心的内容显示在左上角，如：标题、标签页、核心操作</p>
                <p>1.2 次要的、小块的内容显示在右上角，如：筛选框、低频操作、可选的功能</p>
                <p>1.3 页面主体内容可以以合适的方式显示，如：文档流、列表、多栏等。每一份内容中，将核心信息展示在该内容区左上角。</p>
            </WithDemo>
            <Typography.Title level={3}>间隔</Typography.Title>
            <p>过于拥挤的文字排布会影响用户的阅读。浏览器端的交互，由于放开了纸张的限制，通常可以更加宽松一些。内容之间至少需要 1.5 倍的行间距。段与段之间，则可以再大一些。</p>
            <p>信息排布遵循「亲密度」原则：关联较为松散的内容，间距较大；关系紧密的内容，间距较小。</p>
            <Typography.Title level={3}>视觉引导</Typography.Title>
            <p>通过一些点缀，比如<Text type="info">颜色</Text>、<Underline>线条</Underline>、背景色、图标等，引导用户视线，用户可以脱离正常的浏览顺序，直接关注到想要的信息。</p>
            <p>不过，失败的视觉引导将会打断正常的阅读，不仅没有帮助用户获取信息，还会产生糟糕的体验。</p>
            <MenuGrids />
            <ModalGrids />
        </Page>
    );
};
