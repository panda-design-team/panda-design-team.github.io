import {appendStyle} from '@panda-design/components';
import {resetStyle} from '@/styles/resetStyle';
import {appendStyleExtra} from '@/styles/appendStyleExtra';
import {token} from '@/theme/theme';

resetStyle();
appendStyle({antPrefixCls: 'ant-5', resetLink: true, token});
appendStyleExtra({antPrefixCls: 'ant-5'});
