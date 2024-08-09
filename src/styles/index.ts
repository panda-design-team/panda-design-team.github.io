import {appendStyle} from '@panda-design/components';
import {resetStyle} from '@/styles/resetStyle';
import {appendStyleExtra} from '@/styles/appendStyleExtra';
import {token} from '@/theme/theme';

resetStyle();
appendStyle({antPrefixCls: 'ant-5', higherPriority: true, resetLink: true, injectAll: true, token});
appendStyleExtra({antPrefixCls: 'ant-5'});
