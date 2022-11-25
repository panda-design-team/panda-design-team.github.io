import {injectGlobal} from '@emotion/css';

interface Options {
    antPrefixCls?: string;
}

export const appendStyleExtra = ({antPrefixCls = 'ant'}: Options = {}) => injectGlobal`
    .${antPrefixCls}-form-item-row {
        flex-wrap: nowrap;
    }
    
    .${antPrefixCls}-menu-inline .${antPrefixCls}-menu-item,
    .${antPrefixCls}-menu-vertical .${antPrefixCls}-menu-item,
    .${antPrefixCls}-menu-inline .${antPrefixCls}-menu-submenu-title,
    .${antPrefixCls}-menu-vertical .${antPrefixCls}-menu-submenu-title {
        margin-inline: 8px;
        width: calc(100% - 16px);
    }
    
    .${antPrefixCls}-menu .${antPrefixCls}-menu-item-group-title {
        padding-top: 16px;
        padding-bottom: 4px;
        font-size: 12px;
        line-height: 18px;
    }
`;
