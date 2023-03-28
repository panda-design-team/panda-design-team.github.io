import styled from '@emotion/styled';
import {ReactNode, useLayoutEffect, useRef} from 'react';
import {colors} from '@panda-design/components';

const Left = styled.div`
    flex: 1;
    overflow: hidden;
`;

const Container = styled.div`
    position: relative;
    display: flex;
    gap: 20px;
`;

const Layout = styled.div`
    flex: 1;
    background-color: ${colors['gray-3']};
`;

const Content = styled.div`
    transform: translate(-10px, 10px) scale(0.5);
    transform-origin: top right;
    position: absolute;
    left: 60px;
    right: 0;
    background-color: ${colors.white};
    
`;

interface ParagraphExtraProps {
    children?: ReactNode;
    demo?: ReactNode;
}

export const WithDemo = ({children, demo}: ParagraphExtraProps) => {
    const layoutRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(
        () => {
            if (ref.current && layoutRef.current) {
                layoutRef.current?.setAttribute('style', `height: ${ref.current.scrollHeight / 2 + 20}px`);
            }
        },
        []
    );

    return (
        <Container>
            <Left>
                {children}
            </Left>
            <Layout ref={layoutRef}>
                <Content ref={ref}>
                    {demo}
                </Content>
            </Layout>
        </Container>
    );
};
