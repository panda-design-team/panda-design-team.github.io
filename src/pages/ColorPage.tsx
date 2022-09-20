import styled from '@emotion/styled';
import {ColorLevel, colors, ColorType} from '@panda-design/components';
import {Page, Grid} from '@/components';
import {isLight} from '@/utils';

const ColorItem = styled.div<{color: string}>`
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 264px;
    height: 48px;
    ${props => `
        background-color: ${props.color};
        color: ${isLight(props.color) ? 'black' : 'white'}
    `}
`;

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

export const ColorPage = () => {
    return (
        <Page isFirst title="1. Color 色彩">
            <div>
                <p>首先介绍一下 Panda Design 的色彩构成。</p>
                <br />
                <p>色彩构成了用户对产品的第一印象</p>
                <p>「黑与白」的对比，是所有色彩中最为强烈的对比。强而有力的黑白对比是 Panda Design 最突出的观感。</p>
                <p>「黑与白」相互调和，「黑」可以流动为「白」，「白」也可以流动为「黑」。有无相生，「黑与白」的流动，构成了 Panda Design 的交互模式。</p>
                <br />
                <p>在整体为黑白的页面主题上，我们再对部分要素通过功能色和辅助色的方式进行高亮，以此引导用户的注意力。这部分内容将在 7. Decoration 装饰 中进行更详细的阐述。</p>
            </div>
            <Grid title="主色">
                <ColorGroup type="gray" />
            </Grid>
            <Grid
                title="功能色"
                repeat={4}
            >
                <ColorGroup type="brand" />
                <ColorGroup type="error" />
                <ColorGroup type="success" />
                <ColorGroup type="warning" />
            </Grid>
            <Grid title="辅助色" repeat={4}>
                <ColorGroup type="cyan" />
                <ColorGroup type="light-purple" />
                <ColorGroup type="magenta" />
                <ColorGroup type="gold" />
            </Grid>
        </Page>
    );
};
