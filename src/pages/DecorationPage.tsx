import {Page} from '@/components/Page';
import {TagGrids} from '@/pages/Grids/TagGrids';
import {AlertGrids} from '@/pages/Grids/AlertGrids';
import {MessageGrids} from '@/pages/Grids/MessageGrids';

export const DecorationPage = () => {
    return (
        <Page title="7. Decoration 装饰">
            <div>
                <p>比如，我们使用功能色标记「成功」、「失败」、「运行中」等信息，用户在不需要阅读文字的前提下，就可以获知重要信息。</p>
                <p>再比如，我们对标签增加背景色，以期形成一个对象固有属性的观感。</p>
            </div>
            <TagGrids />
            <AlertGrids />
            <MessageGrids />
        </Page>
    );
};
