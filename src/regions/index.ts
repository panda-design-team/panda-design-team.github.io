import {createRegion} from 'region-core';

const themeTypeRegion = createRegion<'panda' | 'antd'>('panda');

export const useThemeType = themeTypeRegion.useValue;

export const setThemeType = themeTypeRegion.set;
