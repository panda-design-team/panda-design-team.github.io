import styled from '@emotion/styled';
import {Page, Grid} from '@/components';
import GaussianBackground from '@/components/GaussianBackground/GaussianBackground';

const colors = [
    {
        'color': '#0147fe',
        'orbs': 8,
        'radius': 8,
        'maxVelocity': 0.2,
    },
    {
        'color': '#298eff',
        'orbs': 6,
        'radius': 6,
        'maxVelocity': 0.2,
    },
    {
        'color': '#5de3ff',
    },
];

// 封装为更好用的组件
const GaussianBackgroundContainer = styled.div`
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    // 用户侧
    width: 300px;
    height: 200px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .gaussian-background {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: -1;
    }
`;

export const GaussianBackgroundPage = () => {
    return (
        <Page title="Gaussian Background 呼吸背景" status="开发中">
            <Grid title="基础样式" repeat={1}>
                <GaussianBackgroundContainer>
                    <GaussianBackground colors={colors} blurRadius={20} width="100%" height="100%" />
                    静待发布
                </GaussianBackgroundContainer>
            </Grid>
        </Page>
    );
};
