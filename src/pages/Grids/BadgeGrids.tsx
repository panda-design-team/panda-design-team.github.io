import {Avatar, Badge, Typography} from 'antd';
import {Grid} from '@/components/Grid';

export const BadgeGrids = () => {
    return (
        <>
            <Typography.Title>Badge 徽标数</Typography.Title>
            <Grid repeat={2}>
                <Badge count={5}>
                    <Avatar shape="square" size="large" />
                </Badge>
                <Badge dot>
                    <Avatar shape="square" size="large" />
                </Badge>
            </Grid>
        </>
    );
};
