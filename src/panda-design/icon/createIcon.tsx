import {ComponentType, SVGAttributes} from 'react';
import cx from 'classnames';
import './index.global.less';

const createIcon = (C: ComponentType<SVGAttributes<SVGElement>>) => {
    return function Icon({className, ...props}: SVGAttributes<SVGSVGElement>) {
        return <C className={cx('panda-icon', className)} {...props} />;
    };
};

export default createIcon;
