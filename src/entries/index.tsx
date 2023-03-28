import {createRoot} from 'react-dom/client';
import 'antd/dist/reset.css';
import Provider from '@/components/Provider';
import {PrefacePage} from '@/pages/PrefacePage';
import {FlavorPage} from '@/pages/FlavorPage';
import {LayoutPage} from '@/pages/LayoutPage';
import {ButtonPage} from '@/pages/ButtonPage';
import {LinkPage} from '@/pages/LinkPage';
import {BodyPage} from '@/pages/BodyPage';
import {FormPage} from '@/pages/FormPage';
import {DecorationPage} from '@/pages/DecorationPage';
import {AnimationPage} from '@/pages/AnimationPage';
import '@/styles';

const App = () => (
    <Provider>
        <PrefacePage />
        <FlavorPage />
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
