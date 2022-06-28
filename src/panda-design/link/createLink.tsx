import createFactory from 'react-router-template-link';
import {IconExternal} from '@/icons';
import './index.global.less';

export const {createLink, Link} = createFactory({
    basename: '',
    externalIcon: <IconExternal className="panda-icon-external" />,
});
