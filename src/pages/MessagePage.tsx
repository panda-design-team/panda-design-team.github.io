import {message} from 'antd';
import {Button} from '@/panda-design';
import {Page, Grid} from '@/components';

export const MessagePage = () => {
    /* eslint-disable react/jsx-no-bind */
    return (
        <Page title="Message 全局提示" status="开发中">
            <Grid title="简单样式" repeat={4}>
                <Button onChange={() => message.info('你好')}>提示</Button>
                <Button onChange={() => message.success('操作成功')}>成功</Button>
                <Button onChange={() => message.error('操作失败')}>失败</Button>
                <Button onChange={() => message.warning('警告')}>警告</Button>
            </Grid>
        </Page>
    );
    /* eslint-enable react/jsx-no-bind */
};
