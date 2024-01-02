import {createRegion} from 'region-core';

type ThemeType = 'black' | 'blue' | 'antd';

const themeTypeRegion = createRegion<ThemeType>('black', {withLocalStorageKey: 'PandaDesign/themeType'});

export const useThemeType = themeTypeRegion.useValue;

export const getThemeType = themeTypeRegion.getValue;

export const setThemeType = themeTypeRegion.set;

if (!['black', 'blue', 'antd'].includes(getThemeType())) {
    setThemeType('black');
}

export type Role = '产品经理' | '设计师' | '前端开发' | '组件库开发';

const roleTypeRegion = createRegion<Role>('产品经理', {withLocalStorageKey: 'PandaDesign/roleType'});

export const useRoleType = roleTypeRegion.useValue;

export const setRoleType = roleTypeRegion.set;
