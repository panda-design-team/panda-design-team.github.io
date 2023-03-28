import styled from '@emotion/styled';
import {GaussianBackground, GaussianBackgroundLayer} from '@panda-design/extra';
import {Typography} from 'antd';
import {Grid} from '@/components/Grid';

const layersLightColorful: GaussianBackgroundLayer[] = [
    {orbs: 4, radius: 20, maxVelocity: 0.2, color: '#fff'},
    {orbs: 8, radius: 10, maxVelocity: 0.5, color: '#0ff'},
    {orbs: 8, radius: 10, maxVelocity: 0.5, color: '#f0f'},
    {orbs: 8, radius: 10, maxVelocity: 0.5, color: '#ff0'},
    // {color: '#000'},
];

const layersDarkColorful: GaussianBackgroundLayer[] = [
    {color: '#2f54eb', orbs: 4, radius: 16, maxVelocity: 0.2},
    {color: '#1890ff', orbs: 4, radius: 8, maxVelocity: 0.2},
    {color: '#fadb14'},
];

const layersBlue: GaussianBackgroundLayer[] = [
    {orbs: 4, radius: 20, maxVelocity: 0.2, color: '#245ca7', columns: 2},
    {orbs: 5, radius: 15, maxVelocity: 0.2, color: '#2176c7'},
    {orbs: 7, radius: 12, maxVelocity: 0.2, color: '#149dee'},
    {color: '#b6d7fd'},
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

const StyledGaussianBackground = styled(GaussianBackground)<{ghost?: boolean}>`
    width: 300px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    ${props => props.ghost && 'color: white'};
`;

export const GaussianBackgroundGrids = () => {
    return (
        <>
            <Typography.Title>Gaussian Background 呼吸背景 (Unstable)</Typography.Title>
            <Grid repeat={3}>
                <StyledGaussianBackground>
                    描述文字
                </StyledGaussianBackground>
                <StyledGaussianBackground layers={layersLightColorful}>
                    描述文字
                </StyledGaussianBackground>
                <StyledGaussianBackground ghost layers={layersDarkColorful}>
                    描述文字
                </StyledGaussianBackground>
                <StyledGaussianBackground ghost layers={layersBlue}>
                    描述文字
                </StyledGaussianBackground>
                <StyledGaussianBackground ghost layers={layersRed}>
                    描述文字
                </StyledGaussianBackground>
                <StyledGaussianBackground ghost layers={layersPurple}>
                    描述文字
                </StyledGaussianBackground>
            </Grid>
        </>
    );
};
