import {ReactNode} from 'react';
import {isLight} from '@/utils';
import c from './index.less';

interface Props {
    color: string;
    children: ReactNode;
}

export const ColorItem = ({color, children}: Props) => {
    const colorIsLight = isLight(color);
    return (
        <div className={c.container} style={{backgroundColor: color, color: colorIsLight ? 'black' : 'white'}}>
            {children}
            <div className={colorIsLight ? c.descriptionLight : c.descriptionDark}>{color}</div>
        </div>
    );
};
