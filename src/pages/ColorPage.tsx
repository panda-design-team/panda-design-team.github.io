import {ColorLevel, colors, ColorType, Tag} from '@panda-design/components';
import styled from '@emotion/styled';
import {Typography} from 'antd';
import {Page} from '@/components/Page';
import {Grid} from '@/components/Grid';
import {ColorItem} from '@/components/ColorItem';
import {Code} from '@/components/Typography';

interface ColorGroupProps {
    type: ColorType;
}

const colorLevels: ColorLevel[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export function ColorGroup({type}: ColorGroupProps) {
    return (
        <div>
            {colorLevels.map(i => {
                const color = colors[`${type}-${i}`];
                return (
                    <ColorItem
                        key={i}
                        color={color}
                    >
                        {`${type[0].toUpperCase()}${type.slice(1)}${i}`}
                    </ColorItem>
                );
            })}
        </div>
    );
}

const StyledTag = styled(Tag)`
    margin-inline-start: 8px;
    
    span {
        margin-inline-start: 4px;
    }
`;

export const ColorPage = () => {
    return (
        <Page isFirst title="1. Color 色彩">
            <p>首先介绍一下 Panda Design 的色彩构成。</p>
            <Typography.Title>黑白灰</Typography.Title>
            <p>色彩构成了用户对产品的第一印象。</p>
            <p>「黑与白」的对比，是所有色彩中最为强烈的对比。强而有力的黑白对比是 Panda Design 最突出的观感。</p>
            <p>「黑与白」相互调和，「黑」可以流动为「白」，「白」也可以流动为「黑」。有无相生，「黑与白」的流动，构成了 Panda Design 的交互模式。</p>
            <Grid>
                <ColorGroup type="gray" />
            </Grid>
            <Typography.Title>功能色</Typography.Title>
            <p>在整体为黑白的页面主题上，我们再对部分要素通过功能色和辅助色的方式进行高亮，以此引导用户的注意力。其中，功能色承载了用户对于结果的感知，其中：</p>
            <p>1. Info 用以表达提醒、正常运行状态（此时配合动画）；</p>
            <p>2. Error 用以表达错误、失败、阻塞等信息，这些信息相对严重，并会阻碍用户下一步的行为；</p>
            <p>3. Success 用以表达正确、成功等信息；</p>
            <p>4. Warning 用以表达警告信息，需要用户关注，但经常并不阻碍流程。</p>
            <Grid repeat={4}>
                <ColorGroup type="info" />
                <ColorGroup type="error" />
                <ColorGroup type="success" />
                <ColorGroup type="warning" />
            </Grid>
            <Typography.Title>辅助色</Typography.Title>
            <p>
                辅助色并不包含确切的含义，而是用于分类一些实体。举例来说，同为动物，我们可以给
                <StyledTag type="flat" color="cyan" icon="🐱">猫</StyledTag>
                和
                <StyledTag type="flat" color="light-purple" icon="🐶">狗</StyledTag>
                分配两种辅助色，仅用于更好的区分两者，在用户使用一段时间后，就可以从辅助色来判断信息。这部分内容将在 <Code>7. Decoration 装饰</Code> 中进行更详细的阐述。
            </p>
            <Grid repeat={4}>
                <ColorGroup type="cyan" />
                <ColorGroup type="light-purple" />
                <ColorGroup type="magenta" />
                <ColorGroup type="gold" />
            </Grid>
        </Page>
    );
};
