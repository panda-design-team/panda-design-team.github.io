import {Page} from '@/components';
import {TagGrids} from '@/pages/Grids/TagGrids';
import {AlertGrids} from '@/pages/Grids/AlertGrids';
import {MessageGrids} from '@/pages/Grids/MessageGrids';

export const DecorationPage = () => {
    return (
        <Page title="7. Decoration 装饰">
            <TagGrids />
            <AlertGrids />
            <MessageGrids />
        </Page>
    );
};
