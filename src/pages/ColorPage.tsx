import {ColorLevel, colors, ColorType} from '@panda-design/components';
import {Page} from '@/components/Page';
import {Grid} from '@/components/Grid';
import {ColorItem} from '@/components/ColorItem';

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
            </div>
            <Grid
                title="黑白灰"
                beforeGrid={(
                    <div>
                        <p>色彩构成了用户对产品的第一印象</p>
                        <p>「黑与白」的对比，是所有色彩中最为强烈的对比。强而有力的黑白对比是 Panda Design 最突出的观感。</p>
                        <p>「黑与白」相互调和，「黑」可以流动为「白」，「白」也可以流动为「黑」。有无相生，「黑与白」的流动，构成了 Panda Design 的交互模式。</p>
                    </div>
                )}
            >
                <ColorGroup type="gray" />
            </Grid>
            <Grid
                title="功能色"
                repeat={4}
                beforeGrid={(
                    <div>
                        <p>功能色承载了用户对于结果的感知，</p>
                    </div>
                )}
            >
                <ColorGroup type="info" />
                <ColorGroup type="error" />
                <ColorGroup type="success" />
                <ColorGroup type="warning" />
            </Grid>
            <Grid
                title="辅助色"
                repeat={4}
                beforeGrid={(
                    <div>
                        <p>在整体为黑白的页面主题上，我们再对部分要素通过功能色和辅助色的方式进行高亮，以此引导用户的注意力。这部分内容将在 7. Decoration 装饰 中进行更详细的阐述。</p>
                    </div>
                )}
            >
                <ColorGroup type="cyan" />
                <ColorGroup type="light-purple" />
                <ColorGroup type="magenta" />
                <ColorGroup type="gold" />
            </Grid>
        </Page>
    );
};
