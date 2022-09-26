import {Typography} from 'antd';
import {Page} from '@/components/Page';
import {Grid} from '@/components/Grid';

export const LayoutPage = () => {
    return (
        <Page title="2. Layout 布局">
            <div>
                <p>与 antd 类似的，我们简单了列举了一些文字排版的基本格式。但我们同时认为，根据不同的场景和需要，在一个具体的设计场景中，你可以进行必要的调整。</p>
                <p>文字是非常基本的信息载体，也是用户最常接触的页面元素。通过合理的字号、字重、字体颜色、以及行与行、段落与段落的间距，我们可以更好的表达信息。</p>
                <br />
                <p>一、视觉动线</p>
                <p>用户在一个页面中浏览和聚焦信息时，倾向于由左上至右下，从大到小。在我们排版时，需要遵从这个内在逻辑，让信息的排布符合由标题到正文，由概括到具体。这样更能够符合用户潜在的逻辑期待，使产品的表达更容易被理解。</p>
                <p>二、间隔</p>
                <p>过于拥挤的文字排布会影响用户的阅读，在 web 端的交互，由于放开了纸张的限制，通常可以更加宽松一些。我们推荐 1.5 倍左右的行间距。段与段之间，则可以间隔再大一些。通常满足信息的关联性越高，间距则较小，反之则应该远离。</p>
                <p>三、视觉引导</p>
                <p>通过一些点缀，或者线条、色块，我们可以引导用户视线，但需注意其与信息的内在联系，失败的视觉引导可能起到相反的作用。</p>
            </div>
            <Grid title="Typography 排版" repeat={1}>
                <Typography.Title>h1. 标题</Typography.Title>
                <Typography.Title level={2}>h2. 标题</Typography.Title>
                <Typography.Title level={3}>h3. 标题</Typography.Title>
                <Typography.Title level={4}>h4. 标题</Typography.Title>
                <Typography.Title level={5}>h5. 标题</Typography.Title>
                <Typography.Text>正文</Typography.Text>
                <Typography.Text type="secondary">辅助信息</Typography.Text>
            </Grid>
        </Page>
    );
};
