import {ReactNode} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {colors} from '@panda-design/components';

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
    color: ${colors['gray-8']};
`;

export const RowTitle = styled.div`
    display: flex;
    align-items: center;
    color: ${colors['gray-8']};
`;
