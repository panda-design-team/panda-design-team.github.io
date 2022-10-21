import styled from '@emotion/styled';
import {Layer} from 'gaussian-background-generator';
import {Grid} from '@/components/Grid';
import GaussianBackground from '@/components/GaussianBackground';

const layersBlue: Layer[] = [
    {
        color: '#0147fe',
        orbs: 8,
        radius: 8,
        maxVelocity: 0.2,
    },
    {
        color: '#298eff',
        orbs: 6,
        radius: 6,
        maxVelocity: 0.2,
    },
    {
        color: '#5de3ff',
    },
];

const layersPurple = [
    {orbs: 4, radius: 20, maxVelocity: 0.2, color: '#3e1969', columns: 2},
    {orbs: 5, radius: 15, maxVelocity: 0.2, color: '#6f2b9b'},
    {orbs: 8, radius: 10, maxVelocity: 0.2, color: '#9f3da0'},
    {color: '#c292e8'},
];

const layersRed = [
    {orbs: 4, radius: 20, maxVelocity: 0.2, color: '#710512', columns: 2},
    {orbs: 5, radius: 15, maxVelocity: 0.2, color: '#b32d45'},
    {orbs: 8, radius: 10, maxVelocity: 0.2, color: '#ce534b'},
    {color: '#f4b685'},
];

const StyledGaussianBackground = styled(GaussianBackground)`
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 4px;
`;

export const GaussianBackgroundGrids = () => {
    return (
        <Grid title="Gaussian Background 呼吸背景" repeat={2}>
            <StyledGaussianBackground>
                描述文字
            </StyledGaussianBackground>
            <StyledGaussianBackground layers={layersBlue}>
                描述文字
            </StyledGaussianBackground>
            <StyledGaussianBackground layers={layersRed}>
                描述文字
            </StyledGaussianBackground>
            <StyledGaussianBackground layers={layersPurple}>
                描述文字
            </StyledGaussianBackground>
        </Grid>
    );
};
