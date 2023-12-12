import styled from '@emotion/styled';
import {CheckCard} from '@ant-design/pro-card';
import {colors} from '@panda-design/components';
import {Typography} from 'antd';
import {Grid} from '@/components/Grid';

const StyledCardGroup = styled(CheckCard.Group)`
    .ant5-pro-checkcard-checked {
        background-color: ${colors.white};
    }

    .ant5-pro-checkcard-checked:after {
        border: 6px solid #000000;
        border-block-end: 6px solid transparent;
        border-inline-start: 6px solid transparent;
        border-start-end-radius: 4px;
    }
`;

const CheckCardGrids = () => {
    return (
        <>
            <Typography.Title>CheckCard 多选卡片</Typography.Title>
            <Grid repeat={4}>
                <StyledCardGroup multiple>
                    <CheckCard title="周一" value={1} />
                    <CheckCard title="周二" value={2} />
                    <CheckCard title="周三" value={3} />
                    <CheckCard title="周四" value={4} />
                    <CheckCard title="周五" value={5} />
                    <CheckCard title="周六" value={6} />
                    <CheckCard title="周日" value={7} />
                </StyledCardGroup>
            </Grid>
        </>
    );
};

export default CheckCardGrids;
