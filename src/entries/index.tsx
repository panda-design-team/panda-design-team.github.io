import {createRoot} from 'react-dom/client';
// import 'antd/dist/reset.css'; // 不需要
import '@panda-design/components/style';
import {resetStyle} from '@/components/theme';
import Provider from '@/components/Provider';
import {PrefacePage} from '@/pages/PrefacePage';
import {ColorPage} from '@/pages/ColorPage';
import {LayoutPage} from '@/pages/LayoutPage';
import {ButtonPage} from '@/pages/ButtonPage';
import {LinkPage} from '@/pages/LinkPage';
import {BodyPage} from '@/pages/BodyPage';
import {FormPage} from '@/pages/FormPage';
import {DecorationPage} from '@/pages/DecorationPage';
import {AnimationPage} from '@/pages/AnimationPage';
import './extra.global.less';

resetStyle();

const App = () => (
    <Provider>
        <PrefacePage />
        <ColorPage />
        <LayoutPage />
        <ButtonPage />
        <LinkPage />
        <BodyPage />
        <FormPage />
        <DecorationPage />
        <AnimationPage />
    </Provider>
);

const rootElement = document.createElement('div');

document.body.appendChild(rootElement);

const root = createRoot(rootElement);

root.render(<App />);
