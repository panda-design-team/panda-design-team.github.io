import anime from 'animejs';
import {useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import {Typography} from 'antd';
import {css} from '@emotion/css';
import {colors} from '@panda-design/components';

const Item = styled.div`
    background-color: ${colors['success-6']};
`;

const generateGridItems = (className: string) => {
    return (
        <div className={css`display: grid; grid-template-columns: repeat(5, auto); width: 100px; height: 100px;`}>
            {Array.from({length: 25}).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Item key={index} className={className} />
            ))}
        </div>
    );
};

export const AnimeGrids = () => {
    const settledRef = useRef<boolean>();
    useEffect(
        () => {
            if (!settledRef.current) {
                anime({
                    targets: '.element-demo-1',
                    scale: [
                        {value: 0.1, easing: 'easeOutSine', duration: 500},
                        {value: 1, easing: 'easeInOutQuad', duration: 1200},
                    ],
                    delay: anime.stagger(200, {grid: [5, 5], axis: 'y'}),
                    easing: 'linear',
                    loop: true,
                });
                anime({
                    targets: '.element-demo-2',
                    scale: [
                        {value: 0.1, easing: 'easeOutSine', duration: 500},
                        {value: 1, easing: 'easeInOutQuad', duration: 1200},
                    ],
                    delay: anime.stagger(200, {grid: [5, 5], from: 'first'}),
                    easing: 'linear',
                    loop: true,
                });
                anime({
                    targets: '.element-demo-3',
                    scale: [
                        {value: 0.1, easing: 'easeOutSine', duration: 500},
                        {value: 1, easing: 'easeInOutQuad', duration: 1200},
                    ],
                    delay: anime.stagger(200, {grid: [5, 5], from: 'center'}),
                    easing: 'linear',
                    loop: true,
                });
                settledRef.current = true;
            }
        },
        []
    );
    return (
        <>
            <Typography.Title>AnimeJS (Unstable)</Typography.Title>
            <div className={css`display: flex; gap: 20px;`}>
                {generateGridItems('element-demo-1"')}
                {generateGridItems('element-demo-2"')}
                {generateGridItems('element-demo-3"')}
            </div>
        </>
    );
};
