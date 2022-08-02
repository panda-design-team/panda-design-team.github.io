import TinyColor from '@ctrl/tinycolor';

export const isLight = (color?: string) => {
    // @ts-ignore
    return new TinyColor(color).isLight();
};
