import {
    GaussianBackground,
    GaussianBackgroundProps,
    GaussianBackgroundCircleConfig,
    colors,
} from '@panda-design/components';
import {Typography} from 'antd';
import {css, cx} from '@emotion/css';
import {Grid} from '@/components/Grid';

const circlesLightColorful: GaussianBackgroundCircleConfig[] = [
    {radius: 6, color: '#0ff'},
    {radius: 6, color: '#0ff'},
    {radius: 6, color: '#0ff'},
    {radius: 6, color: '#0ff'},
    {radius: 3, color: '#f0f'},
    {radius: 3, color: '#f0f'},
    {radius: 3, color: '#f0f'},
    {radius: 3, color: '#f0f'},
    {radius: 2, color: '#ff0'},
    {radius: 2, color: '#ff0'},
    {radius: 2, color: '#ff0'},
    {radius: 2, color: '#ff0'},
];

const circlesDarkColorful: GaussianBackgroundCircleConfig[] = [
    {color: '#1890ff', radius: 6},
    {color: '#1890ff', radius: 6},
    {color: '#1890ff', radius: 6},
    {color: '#1890ff', radius: 6},
    {color: '#fadb14', radius: 3},
    {color: '#fadb14', radius: 3},
    {color: '#fadb14', radius: 3},
    {color: '#fadb14', radius: 3},
];

const circlesBlue: GaussianBackgroundCircleConfig[] = [
    {color: '#2176c7', radius: 5},
    {color: '#149dee', radius: 5},
    {color: '#2176c7', radius: 5},
    {color: '#149dee', radius: 5},
    {color: '#2176c7', radius: 5},
    {color: '#149dee', radius: 5},
    {color: '#2176c7', radius: 5},
    {color: '#149dee', radius: 5},
    {color: '#b6d7fd', radius: 3},
    {color: '#b6d7fd', radius: 3},
    {color: '#b6d7fd', radius: 3},
    {color: '#b6d7fd', radius: 3},
];

const circlesRed: GaussianBackgroundCircleConfig[] = [
    {color: '#b32d45', radius: 5},
    {color: '#ce534b', radius: 5},
    {color: '#b32d45', radius: 5},
    {color: '#ce534b', radius: 5},
    {color: '#b32d45', radius: 5},
    {color: '#ce534b', radius: 5},
    {color: '#b32d45', radius: 5},
    {color: '#ce534b', radius: 5},
    {color: '#f4b685', radius: 3},
    {color: '#f4b685', radius: 3},
    {color: '#f4b685', radius: 3},
    {color: '#f4b685', radius: 3},
];

const layersPurple: GaussianBackgroundCircleConfig[] = [
    {color: '#6f2b9b', radius: 5},
    {color: '#9f3da0', radius: 5},
    {color: '#6f2b9b', radius: 5},
    {color: '#9f3da0', radius: 5},
    {color: '#6f2b9b', radius: 5},
    {color: '#9f3da0', radius: 5},
    {color: '#6f2b9b', radius: 5},
    {color: '#9f3da0', radius: 5},
    {color: '#c292e8', radius: 3},
    {color: '#c292e8', radius: 3},
    {color: '#c292e8', radius: 3},
    {color: '#c292e8', radius: 3},
];

const cssGaussianBackground = css`
    width: 300px !important;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: white;
`;

const StyledGaussianBackground = (props: GaussianBackgroundProps) => {
    return (
        <GaussianBackground
            {...props}
            className={cx(cssGaussianBackground, props.className)}
            width={300}
            height={200}
            blur={15}
        >
            描述文字
        </GaussianBackground>
    );
};

export const GaussianBackgroundGrids = () => {
    return (
        <>
            <Typography.Title>Gaussian Background 呼吸背景 (Unstable)</Typography.Title>
            <Grid repeat={3}>
                <StyledGaussianBackground style={{color: colors.black}} />
                <StyledGaussianBackground
                    backgroundColor="#fff"
                    style={{color: colors.black}}
                    circles={circlesLightColorful}
                />
                <StyledGaussianBackground
                    backgroundColor="#2f54eb"
                    circles={circlesDarkColorful}
                />
                <StyledGaussianBackground
                    backgroundColor="#245ca7"
                    circles={circlesBlue}
                />
                <StyledGaussianBackground
                    backgroundColor="#710512"
                    circles={circlesRed}
                />
                <StyledGaussianBackground
                    backgroundColor="#3e1969"
                    circles={layersPurple}
                />
            </Grid>
        </>
    );
};
