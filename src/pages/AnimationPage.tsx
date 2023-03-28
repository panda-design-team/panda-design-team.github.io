import {Page} from '@/components/Page';
import {AnimeGrids} from '@/pages/Grids/AnimeGrids';
import {GaussianBackgroundGrids} from '@/pages/Grids/GaussianBackgroundGrids';
import {useRoleType} from '@/regions';

export const AnimationPage = () => {
    const roleType = useRoleType();
    return (
        <Page title="8. Animation 动画效果">
            {roleType === '组件库开发' && <AnimeGrids />}
            <GaussianBackgroundGrids />
        </Page>
    );
};
