import styled from 'styled-components';
import Tag from '@/panda-design/tag';

const Color = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 264px;
    height: 48px;
`;

interface ColorGroupProps {
    type: string;
}

export function ColorGroup({type}: ColorGroupProps) {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                <Color
                    key={i}
                    style={{backgroundColor: `var(--color-${type}-${i})`}}
                >
                    {`${type[0].toUpperCase()}${type.slice(1)}${i}`}
                </Color>
            ))}
        </div>
    );
}

export const EllipsisTag = styled(Tag)`
    width: 100px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
