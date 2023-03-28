import styled from '@emotion/styled';
import {colors, ColorType} from '@panda-design/components';

export const Code = styled.code`
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.06);
    font-size: 12px;
    padding: 3px 6px;
`;

export const Text = styled.span<{type: ColorType}>`
    color: ${props => colors[`${props.type}-6`]};
`;
