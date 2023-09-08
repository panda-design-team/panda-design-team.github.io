import {Page} from '@/components/Page';
import {TagGrids} from '@/pages/Grids/TagGrids';
import {AlertGrids} from '@/pages/Grids/AlertGrids';
import {MessageGrids} from '@/pages/Grids/MessageGrids';
import {MessageDebugGrids} from '@/pages/Grids/MessageDebugGrids';
import {useRoleType} from '@/regions';

export const DecorationPage = () => {
    const roleType = useRoleType();
    return (
        <Page title="7. Decoration 装饰">
            <p>比如，我们使用功能色标记「成功」、「失败」、「运行中」等信息，用户在不需要阅读文字的前提下，就可以获知重要信息。</p>
            <p>再比如，我们对标签增加背景色，以期形成一个对象固有属性的观感。</p>
            <TagGrids />
            <AlertGrids />
            <MessageGrids />
            {roleType === '组件库开发' && <MessageDebugGrids />}
        </Page>
    );
};
