import {appendStyle} from '@panda-design/components';
import {resetStyle} from '@/styles/resetStyle';
import {appendStyleExtra} from '@/styles/appendStyleExtra';

resetStyle();
appendStyle({antPrefixCls: 'ant5'});
appendStyleExtra({antPrefixCls: 'ant5'});
