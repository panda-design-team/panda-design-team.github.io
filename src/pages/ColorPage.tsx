import styled from '@emotion/styled';
import {ColorLevel, colors, ColorType} from '@panda-design/components';
import {Page, Grid} from '@/components';
import {isLight} from '@/utils';

const ColorItem = styled.div<{color: string}>`
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 264px;
    height: 48px;
    ${props => `
        background-color: ${props.color};
        color: ${isLight(props.color) ? 'black' : 'white'}
    `}
`;

interface ColorGroupProps {
    type: ColorType;
}

const colorLevels: ColorLevel[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

export function ColorGroup({type}: ColorGroupProps) {
    return (
        <div>
            {colorLevels.map(i => {
                const color = colors[`${type}-${i}`];
                return (
                    <ColorItem
                        key={i}
                        color={color}
                    >
                        {`${type[0].toUpperCase()}${type.slice(1)}${i}`}
                    </ColorItem>
                );
            })}
        </div>
    );
}

export const ColorPage = () => {
    return (
        <Page disableShadow title="Color 色彩">
            <Grid title="主色">
                <ColorGroup type="brand" />
                <ColorGroup type="gray" />
            </Grid>
            <Grid title="功能色">
                <ColorGroup type="error" />
                <ColorGroup type="success" />
                <ColorGroup type="warning" />
            </Grid>
            <Grid title="辅助色" repeat={4}>
                <ColorGroup type="cyan" />
                <ColorGroup type="light-purple" />
                <ColorGroup type="magenta" />
                <ColorGroup type="gold" />
            </Grid>
        </Page>
    );
};
