import {createRegion} from 'region-core';

const themeTypeRegion = createRegion<'panda' | 'antd'>('panda', {withLocalStorageKey: 'PandaDesign/themeType'});

export const useThemeType = themeTypeRegion.useValue;

export const setThemeType = themeTypeRegion.set;

export type Role = '产品经理' | '设计师' | '前端开发' | '组件库开发';

const roleTypeRegion = createRegion<Role>('产品经理', {withLocalStorageKey: 'PandaDesign/roleType'});

export const useRoleType = roleTypeRegion.useValue;

export const setRoleType = roleTypeRegion.set;