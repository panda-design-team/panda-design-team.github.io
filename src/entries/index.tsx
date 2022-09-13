// TODO 等 antd@5 支持并发模式
import {render} from 'react-dom';
import 'antd/dist/reset.css';
import {resetStyle} from '@/components/theme';
import Provider from '@/components/Provider';
import {PrefacePage} from '@/pages/PrefacePage';
import {ColorPage} from '@/pages/ColorPage';
import {TypographyPage} from '@/pages/TypographyPage';
import {ButtonPage} from '@/pages/ButtonPage';
import {LinkPage} from '@/pages/LinkPage';
import {FormPage} from '@/pages/FormPage';
import {TabsPage} from '@/pages/TabsPage';
import {LayoutPage} from '@/pages/LayoutPage';
import {GridPage} from '@/pages/GridPage';
import {TagPage} from '@/pages/TagPage';
import {SwitchPage} from '@/pages/SwitchPage';
import {CheckboxPage} from '@/pages/CheckboxPage';
import {RadioPage} from '@/pages/RadioPage';
import {TablePage} from '@/pages/TablePage';
import {AlertPage} from '@/pages/AlertPage';
import {MessagePage} from '@/pages/MessagePage';
import {PaginationPage} from '@/pages/PaginationPage';
import {GaussianBackgroundPage} from '@/pages/GaussianBackgroundPage';

resetStyle();

const app = (
    <Provider>
        <PrefacePage />
        <ColorPage />
        <TypographyPage />
        <ButtonPage />
        <LinkPage />
        <FormPage />
        <TabsPage />
        <LayoutPage />
        <GridPage />
        <TagPage />
        <SwitchPage />
        <CheckboxPage />
        <RadioPage />
        <TablePage />
        <AlertPage />
        <MessagePage />
        <PaginationPage />
        <GaussianBackgroundPage />
    </Provider>
);

const root = document.createElement('div');

// TODO 加这个是为了提高优先级，但是这个有点不太能接受，看看 antd@5 有没有更好的方案
root.setAttribute('id', 'panda-holder');

document.body.appendChild(root);
render(app, root);
