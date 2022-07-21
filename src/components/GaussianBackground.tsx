import React, {useEffect, useRef} from 'react';
import gaussianBackgroundGenerator, {
    GaussianBackground as IGaussianBackground,
    Layer,
    Options,
} from 'gaussian-background-generator';
import styled from '@emotion/styled';

export interface Props extends React.HTMLAttributes<HTMLDivElement>{
    layers?: Layer[];
    options?: Options;
    canvasProps?: React.HTMLAttributes<HTMLCanvasElement>;
}

const defaultLayers: Layer[] = [
    {color: '#2f54eb', orbs: 4, radius: 16, maxVelocity: 0.2},
    {color: '#1890ff', orbs: 4, radius: 8, maxVelocity: 0.2},
    {color: '#fadb14'},
];

const defaultOptions: Options = {
    renderWidth: 75,
    renderHeight: 50,
    blurRadius: 15,
    fpsCap: 15,
};

const Container = styled.div`
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    color: white;
`;

const StyledCanvas = styled.canvas`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
`;

const GaussianBackground = ({layers = defaultLayers, options = defaultOptions, canvasProps, children, ...props}: Props) => {
    const ref = useRef<HTMLCanvasElement>(null);
    const generatorRef = useRef<ReturnType<IGaussianBackground> | null>(null);

    useEffect(
        () => {
            if (ref.current && !generatorRef.current) {
                generatorRef.current = gaussianBackgroundGenerator(ref.current, layers, options);
            }
        },
        [layers, options]
    );

    return (
        <Container {...props}>
            <StyledCanvas ref={ref} {...canvasProps} />
            {children}
        </Container>
    );
};

export default GaussianBackground;
