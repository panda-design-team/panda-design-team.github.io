import {Page} from '@/components/Page';
import {useRoleType} from '@/regions';
import {ButtonGrids} from './Grids/ButtonGrids';
import {ButtonDebugGrids} from './Grids/ButtonDebugGrids';

export const ButtonPage = () => {
    const roleType = useRoleType();
    return (
        <Page title="3. Button 按钮">
            <p>一个可交互页面，与传统媒体的最大区别，是它在展现信息之外，亦能够获得用户意愿。互联网所有业务的存在，不莫过于让用户在一定的信息下开始行为。</p>
            <p>按钮则是最常用的、也是最直截了当的、提供给用户表达其意愿的交互形态。当用户鼠标划过，展示出手势，它提供给用户强大的暗示，即一旦按下按钮，则必然有事发生。</p>
            <ButtonGrids />
            {roleType === '组件库开发' && <ButtonDebugGrids />}
        </Page>
    );
};
