// 移动至 panda
import {LinkProps as PandaLinkProps} from 'react-router-template-link';
import {ReactNode} from 'react';
import {Tooltip} from 'antd';
import {Link as PandaLink} from './createLink';

interface LinkProps extends PandaLinkProps {
    disabledReason?: ReactNode;
}

function Link(props: LinkProps) {
    if (props.disabled) {
        return (
            <Tooltip title={props.disabledReason}>
                <PandaLink {...props} />
            </Tooltip>
        );
    }
    return <PandaLink {...props} />;
}

export default Link;
