import {Page} from '@/components/Page';
import {TabsGrids} from '@/pages/Grids/TabsGrids';
import {TableGrids} from '@/pages/Grids/TableGrids';
import {PaginationGrids} from '@/pages/Grids/PaginationGrids';

export const BodyPage = () => {
    return (
        <Page title="5. Body 主体">
            <div>
                <p>在上文，我们说明了页面整体的布局，这里列举一系列用以填充页面的组件</p>
            </div>
            <TabsGrids />
            <TableGrids />
            <PaginationGrids />
        </Page>
    );
};
