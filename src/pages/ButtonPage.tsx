import {Page} from '@/components/Page';
import {createLink} from '@/components/Link';
import {useRoleType} from '@/regions';
import {ButtonGrids} from './Grids/ButtonGrids';
import {ButtonDebugGrids} from './Grids/ButtonDebugGrids';

const DocLink = createLink('https://github.com/panda-design-team/panda-design-team.github.io/blob/main/patches/README.md');

export const ButtonPage = () => {
    const roleType = useRoleType();
    return (
        <Page title="3. Button 按钮">
            <div>
                <p>一个可交互页面，与传统媒体的最大区别，是它在展现信息之外，亦能够获得用户意愿。互联网所有业务的存在，不莫过于让用户在一定的信息下开始行为。</p>
                <p>按钮则是最常用的、也是最直截了当的、提供给用户表达其意愿的交互形态。当用户鼠标划过，展示出手势，它提供给用户强大的暗示，即一旦按下按钮，则必然有事发生。</p>
                <br />
                <p>
                    注：由于 antd 波浪动效的实现使用了 ::after 伪类，在使用新动效时会有冲突，这导致点击按钮后动画效果会有一些偏差。在 Panda Design 正式发布之时，我们承诺会解决此问题，但此时，你需要
                    <DocLink>参考此文档</DocLink>
                    处理动效的冲突。
                </p>
            </div>
            <ButtonGrids />
            {roleType === '组件库开发' && <ButtonDebugGrids />}
        </Page>
    );
};
