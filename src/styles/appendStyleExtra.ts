import {injectGlobal} from '@emotion/css';

interface Options {
    antPrefixCls?: string;
}

export const appendStyleExtra = ({antPrefixCls = 'ant'}: Options = {}) => injectGlobal`
    .${antPrefixCls}-form-item-row {
        flex-wrap: nowrap;
    }
`;
