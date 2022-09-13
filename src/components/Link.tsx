import createFactory, {LinkProps} from 'react-router-template-link';
import {ReactNode} from 'react';
import {Tooltip} from 'antd';
import {IconExternal} from '@panda-design/components';

export const {createLink, Link} = createFactory({
    basename: '',
    externalIcon: <IconExternal className="panda-icon-external" />,
});

interface LinkPropsWithDisabledReason extends LinkProps {
    disabledReason?: ReactNode;
}

export function LinkWithDisabledReason({disabledReason, ...props}: LinkPropsWithDisabledReason) {
    if (props.disabled && disabledReason) {
        return (
            <Tooltip title={disabledReason}>
                <Link {...props} />
            </Tooltip>
        );
    }
    return <Link {...props} />;
}
