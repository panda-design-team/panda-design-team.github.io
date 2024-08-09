import {createRegion} from 'region-core';

const primaryColorRegion = createRegion<string>('#000', {withLocalStorageKey: 'PandaDesign/primaryColor'});

export const usePrimaryColor = primaryColorRegion.useValue;

export const getPrimaryColor = primaryColorRegion.getValue;

export const setPrimaryColorAndReload = (color: string) => {
    primaryColorRegion.set(color);
    window.location.reload();
};

export type Role = '产品经理' | '设计师' | '前端开发' | '组件库开发';

const roleTypeRegion = createRegion<Role>('产品经理', {withLocalStorageKey: 'PandaDesign/roleType'});

export const useRoleType = roleTypeRegion.useValue;

export const setRoleType = roleTypeRegion.set;
