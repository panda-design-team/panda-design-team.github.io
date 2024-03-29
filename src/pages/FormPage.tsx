import {Page} from '@/components/Page';
import {Code} from '@/components/Typography';
import CheckCardGrids from '@/pages/Grids/CheckCardGrids';
import {useRoleType} from '@/regions';
import {FormGrids} from './Grids/FormGrids';
import {VerticalGrids} from './Grids/VerticalGrids';

export const FormPage = () => {
    const roleType = useRoleType();
    return (
        <Page title="6. Form 表单">
            <p>在业务中，我们不可避免的有需要用户「大量输入」的场景，与开发者写代码不同，表单重在体现出数据的结构化特征，以便让用户形成习惯，这个习惯包括以下几个方面：</p>
            <p>1. 构建某个具体的业务表单的特征，使用户在使用过程中获得顺畅感</p>
            <p>2. 构建表单域的特征，使用户可以快速学习新的表单</p>
            <br />
            <p>那么，如何构建业务表单的特征，即「表单指纹」呢？</p>
            <p>「表单指纹」来源于表单的数据结构，而我们所要做的，是让用户的意识恰好可以匹配该结构，以此消除不违和感，提升顺畅感。</p>
            <p>1. 表单结构延续 F 型视觉流，在左上角放置表单的标题，适当穿插章节标题</p>
            <p>2. 表单的前几项内容，具备自解释的特性，比如：名称、类型、描述等</p>
            <p>3. 表单的项呈左右结构，表单控件的类型和宽度暗示了数据类型和数据长度</p>
            <p>4. 错落有致中的秩序</p>
            <br />
            <p>表单域的特征，主要由 <Code>Form.Item</Code> 所规定的结构，加上对应的表单控件构成。</p>
            <FormGrids />
            <VerticalGrids />
            {roleType === '组件库开发' && <CheckCardGrids />}
        </Page>
    );
};
