// TODO 等 antd@5 支持并发模式
import {render} from 'react-dom';

const root = document.createElement('div');
document.body.appendChild(root);

render(<div>loading</div>, root);
