import {Page} from '@/components/Page';
// import {AnimeGrids} from '@/pages/Grids/AnimeGrids';
import {GaussianBackgroundGrids} from '@/pages/Grids/GaussianBackgroundGrids';

export const AnimationPage = () => {
    return (
        <Page title="8. Animation 动画效果">
            {/* <AnimeGrids /> */}
            <GaussianBackgroundGrids />
        </Page>
    );
};
