import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const fitContentCss = css`
    width: fit-content;

    > * {
        width: fit-content;
    }
`;

interface GridContainerProps {
    repeat?: number;
    fitContent?: boolean;
}

const GridContainer = styled.div<GridContainerProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.repeat ?? 3}, auto);
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    margin-top: 40px;

    ${props => props.fitContent && fitContentCss}
`;

interface GridProps extends GridContainerProps {
    title?: string;
    beforeGrid?: ReactNode;
    afterGrid?: ReactNode;
    className?: string;
    children?: ReactNode;
}

export function Grid({title, className, beforeGrid, afterGrid, children, repeat = 3, fitContent = true}: GridProps) {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {beforeGrid}
            {children && <GridContainer className={className} repeat={repeat} fitContent={fitContent}>{children}</GridContainer>}
            {afterGrid}
        </div>
    );
}

export const ColumnTitle = styled.div`
    color: var(--color-gray-8);
`;

export const RowTitle = styled.div`
    display: flex;
    align-items: center;
    color: var(--color-gray-8);
`;
