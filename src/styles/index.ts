import {appendStyle} from '@panda-design/components';
import {resetStyle} from '@/styles/resetStyle';
import {appendStyleExtra} from '@/styles/appendStyleExtra';

resetStyle();
appendStyle({antPrefixCls: 'ant5', higherPriority: true, resetLink: true, injectAll: true});
appendStyleExtra({antPrefixCls: 'ant5'});
