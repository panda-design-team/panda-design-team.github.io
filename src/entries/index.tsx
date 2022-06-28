// TODO 等 antd@5 支持并发模式
import {render} from 'react-dom';
import {PrefacePage} from '@/pages/PrefacePage';
import {ColorPage} from '@/pages/ColorPage';
import {TypographyPage} from '@/pages/TypographyPage';
import {ButtonPage} from '@/pages/ButtonPage';
import {LinkPage} from '@/pages/LinkPage';
import {FormPage} from '@/pages/FormPage';
import {TabsPage} from '@/pages/TabsPage';
import {TagPage} from '@/pages/TagPage';
import {RadioPage} from '@/pages/RadioPage';

const app = (
    <>
        <PrefacePage />
        <ColorPage />
        <TypographyPage />
        <ButtonPage />
        <LinkPage />
        <FormPage />
        <TabsPage />
        <TagPage />
        <RadioPage />
    </>
);

const root = document.createElement('div');
document.body.appendChild(root);
render(app, root);
