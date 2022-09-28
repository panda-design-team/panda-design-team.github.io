import anime from 'animejs';
import {useEffect} from 'react';
import styled from '@emotion/styled';
import {Page} from '@/components/Page';
import {ProgressLineDown} from '@/components/Animate';
import {GaussianBackgroundGrids} from '@/pages/Grids/GaussianBackgroundGrids';
import Arrow from '@/svg/arrow.svg?react';
import {Grid} from '@/components/Grid';

const ArrowContainer = styled.div`
    opacity: 0.1;
`;

const AnimeTest = () => {
    useEffect(
        () => {
            anime({
                targets: '.el',
                opacity: [0.1, 0.2, 0.1],
                delay: anime.stagger(100, {grid: [5, 5], axis: 'y'}),
                easing: 'linear',
                loop: true,
            });
        },
        []
    );
    return (
        <Grid title="Anime" repeat={5}>
            {Array.from({length: 25}).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ArrowContainer key={index} className="el"><Arrow /></ArrowContainer>
            ))}
        </Grid>
    );
};

export const AnimationPage = () => {
    return (
        <Page title="8. Animation 动画效果">
            <ProgressLineDown />
            <AnimeTest />
            <GaussianBackgroundGrids />
        </Page>
    );
};
