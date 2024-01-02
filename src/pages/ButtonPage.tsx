import {Page} from '@/components/Page';
import {ButtonGrids} from './Grids/ButtonGrids';
import {ButtonExtraGrids} from './Grids/ButtonExtraGrids';

export const ButtonPage = () => {
    return (
        <Page title="3. Button 按钮">
            <p>一个可交互页面，与传统媒体的最大区别，是它在展现信息之外，亦能够获取用户意愿。可交互性需要通过动态来表达。</p>
            <p>按钮则是最常用的、也是最直截了当的、提供给用户表达其意愿的交互形态。当用户鼠标划过时将展示手势指针，暗示用户按下按钮以触发交互。</p>
            <ButtonGrids />
            <ButtonExtraGrids />
        </Page>
    );
};
