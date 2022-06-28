// TODO 等 antd@5 支持并发模式
import {render} from 'react-dom';
import {Demo} from '@/demo';

const root = document.createElement('div');
document.body.appendChild(root);

render(<Demo />, root);
