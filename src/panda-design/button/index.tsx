/**
 * 临时方案，二期动效出了以后要重做：
 * 1. 可能从 antd 或者从 rc 引组件，而不是 osui
 * 2. styled-component 不适合用于组件库，需要固定的 className
 * 3. type 不一样，移除 link，增加 flat
 * 4. 希望 antd@5 可以方便一些
 */
import {forwardRef, ReactNode} from 'react';
import {Button as AntdButton, ButtonProps as AntdButtonProps, Tooltip} from 'antd';
import {IconLogo} from '@/icons';
import './index.global.less';

export interface ButtonProps extends Omit<AntdButtonProps, 'type'> {
    type?: 'primary' | 'default' | 'flat' | 'text' | 'link' | 'icon'; // link&strong&icon is deprecated
    disabledReason?: ReactNode;
    tooltip?: ReactNode;
}

const ForwardButton = forwardRef<unknown, ButtonProps>(({tooltip, disabledReason, ...props}, ref) => {
    const nextType = props?.type === 'link' || props?.type === 'icon' ? 'text' : props?.type;
    const nextIcon = props?.icon === undefined ? (nextType === 'text' ? <IconLogo /> : undefined) : props?.icon;
    // text 类型 size 默认为 small
    const nextSize = props?.size === undefined ? (nextType === 'text' ? 'small' : undefined) : props?.size;
    const nextProps = {...props, type: nextType, icon: nextIcon, size: nextSize, ref};
    // @ts-expect-error
    const element = <AntdButton prefixCls="panda-button" {...nextProps} />;
    if (nextProps.disabled && disabledReason) {
        return (
            <Tooltip title={disabledReason}>
                {element}
            </Tooltip>
        );
    }
    if (tooltip) {
        return (
            <Tooltip title={tooltip}>
                {element}
            </Tooltip>
        );
    }
    return element;
});

export default ForwardButton;
