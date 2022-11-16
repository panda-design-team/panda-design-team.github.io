import styled from '@emotion/styled';
import {colors} from '@panda-design/components';

export const ProgressLineDown = styled.div`
    background: repeating-linear-gradient(
        -45deg,
        ${colors['info-3']} 0,
        ${colors['info-3']} 3px,
        transparent 0,
        transparent 9px
    );
    animation: line 30s linear infinite;
    width: 2400px;
    height: 4px;


    @keyframes line {
        from {
            transform: translate(-1200px, 0);
        }

        to {
            transform: translate(0, 0);
        }
    }
`;
