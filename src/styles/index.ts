import {appendStyle} from '@panda-design/components';
import {resetStyle} from '@/styles/resetStyle';
import {appendStyleExtra} from '@/styles/appendStyleExtra';

resetStyle();
appendStyle({antPrefixCls: 'ant-5', higherPriority: true, resetLink: true, injectAll: true});
appendStyleExtra({antPrefixCls: 'ant-5'});
