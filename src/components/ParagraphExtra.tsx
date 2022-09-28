import styled from '@emotion/styled';
import {ReactNode, useLayoutEffect, useRef} from 'react';

const StyledParagraph = styled.p`
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
    background-color: var(--color-gray-3);
`;

const Content = styled.div`
    transform: translate(-20px, 20px) scale(0.5);
    transform-origin: top right;
    position: absolute;
    left: 100px; // 留出50px
    right: 0;
    background-color: var(--color-gray-1);
    
`;

interface ParagraphExtraProps {
    children?: ReactNode;
    extra?: ReactNode;
}

export const ParagraphExtra = ({children, extra}: ParagraphExtraProps) => {
    const layoutRef = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(
        () => {
            if (ref.current && layoutRef.current) {
                layoutRef.current?.setAttribute('style', `height: ${ref.current.scrollHeight / 2 + 40}px`);
            }
        },
        []
    );

    return (
        <Container>
            <StyledParagraph>{children}</StyledParagraph>
            <Layout ref={layoutRef}>
                <Content ref={ref}>
                    {extra}
                </Content>
            </Layout>
        </Container>
    );
};
