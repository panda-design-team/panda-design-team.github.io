import {TinyColor} from '@ctrl/tinycolor';

export const isLight = (color?: string) => {
    return new TinyColor(color).isLight();
};
