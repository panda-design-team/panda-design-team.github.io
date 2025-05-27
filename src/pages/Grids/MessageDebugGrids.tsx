import {Button} from '@panda-design/components';
import {Typography, message} from 'antd';
import {Grid} from '@/components/Grid';
import {Link} from '@/components/Link';

export const MessageDebugGrids = () => {
    return (
        <>
            <Typography.Title>附：测试 antd 默认样式</Typography.Title>
            <Grid repeat={4}>
                <Button onClick={() => message.info('你好')}>提示</Button>
                <Button onClick={() => message.success('操作成功')}>成功</Button>
                <Button onClick={() => message.error(<>操作失败，点击<Link to="https://www.example.com">查看解决方案</Link></>)}>失败</Button>
                <Button onClick={() => message.warning('警告')}>警告</Button>
            </Grid>
        </>
    );
};
