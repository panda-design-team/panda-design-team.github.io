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
    title?: never;
}

export const Grid = styled.div<GridContainerProps>`
    display: grid;
    grid-template-columns: repeat(${props => props.repeat ?? 3}, auto);
    column-gap: 30px;
    row-gap: 20px;

    ${props => (props.fitContent === false ? '' : fitContentCss)}
`;

export const ColumnTitle = styled.div`
    color: ${colors['gray-8']};
`;

export const RowTitle = styled.div`
    display: flex;
    align-items: center;
    color: ${colors['gray-8']};
`;
