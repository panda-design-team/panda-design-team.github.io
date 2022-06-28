import {Radio} from 'antd';
import {Page} from '@/components';

export const RadioPage = () => {
    return (
        <Page title="Radio 单选框" status="开发中">
            <Radio>Radio</Radio>
            <Radio.Group>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
        </Page>
    );
};
