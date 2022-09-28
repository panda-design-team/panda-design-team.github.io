import styled from '@emotion/styled';

export const ProgressLineDown = styled.div`

    //background: repeating-linear-gradient(
    //    -45deg,
    //    var(--color-brand-3) 0,
    //    var(--color-brand-3) 3px,
    //    var(--color-brand-6) 0,
    //    var(--color-brand-6) 9px
    //);

    background: repeating-linear-gradient(
        -45deg,
        var(--color-brand-3) 0,
        var(--color-brand-3) 3px,
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
