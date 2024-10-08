import {Button, message} from '@panda-design/components';
import {Typography} from 'antd';
import {Grid} from '@/components/Grid';
import {Link} from '@/components/Link';

export const MessageGrids = () => {
    return (
        <>
            <Typography.Title>Message 全局提示</Typography.Title>
            <Grid repeat={6}>
                <Button onClick={() => message.info('你好')}>提示</Button>
                <Button onClick={() => message.success('操作成功')}>成功</Button>
                <Button onClick={() => message.error(<>操作失败，点击<Link to="https://www.example.com">查看解决方案</Link></>)}>失败</Button>
                <Button onClick={() => message.warning('警告')}>警告</Button>
                <Button onClick={() => message.warning({content: '警告', showCloseIcon: false})}>不含关闭按钮</Button>
                <Button onClick={() => message.info('长倒计时', 600)}>长倒计时</Button>
            </Grid>
        </>
    );
};
