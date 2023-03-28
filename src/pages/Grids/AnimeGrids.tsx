import anime from 'animejs';
import {useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import {Typography} from 'antd';
import {css} from '@emotion/css';

const Item = styled.div`
    background-color: #000;
    opacity: 0.1;
`;

export const AnimeGrids = () => {
    const ref = useRef<boolean>();
    useEffect(
        () => {
            if (!ref.current) {
                anime({
                    targets: '.element-demo-1',
                    opacity: [0.1, 0.2, 0.1],
                    delay: anime.stagger(100, {grid: [5, 5], axis: 'y'}),
                    easing: 'linear',
                    loop: true,
                });
                ref.current = true;
            }
        },
        []
    );
    return (
        <>
            <Typography.Title>Anime</Typography.Title>
            <div className={css`display: grid; grid-template-columns: repeat(5, auto); width: 100px; height: 100px;`}>
                {Array.from({length: 25}).map((_, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Item key={index} className="element-demo-1" />
                ))}
            </div>
        </>
    );
};
