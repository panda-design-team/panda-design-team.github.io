import {ReactNode} from 'react';
import styled from '@emotion/styled';

const GridContainer = styled.div<{repeat?: number}>`
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(${props => props.repeat ?? 3}, auto);
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    margin-top: 40px;

    > * {
        width: fit-content;
    }
`;

interface GridProps {
    title?: string;
    beforeGrid?: ReactNode;
    afterGrid?: ReactNode;
    className?: string;
    children?: ReactNode;
    repeat?: number;
}

export function Grid({title, className, beforeGrid, afterGrid, children, repeat = 3}: GridProps) {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {beforeGrid}
            {children && <GridContainer className={className} repeat={repeat}>{children}</GridContainer>}
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
