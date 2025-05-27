import {Page} from '@/components/Page';
import {ColorGrids} from '@/pages/Grids/ColorGrids';
import {Code} from '@/components/Typography';
import {FontGrids} from '@/pages/Grids/FontGrids';

export const FlavorPage = () => {
    return (
        <Page isFirst title="1. Flavor 风格">
            <p>
                {'规范将从 Color 颜色和 Font 字体两方面介绍 '}
                <Code>Panda Design</Code>
                {' 的设计风格。'}
            </p>
            <ColorGrids />
            <FontGrids />
        </Page>
    );
};
