import styled from '@emotion/styled';
import {CheckCard} from '@ant-design/pro-card';
import {Grid} from '@/components/Grid';

const StyledCardGroup = styled(CheckCard.Group)`
    --item-active-bg: var(--color-gray-1);

    &.ant-pro-checkcard-group {
        display: flex;
        gap: 8px;
    }

    .ant-pro-checkcard {
        width: initial;
        margin: initial;
    }

    .ant-pro-checkcard-content {
        padding: 0 20px;
        height: 30px;
        line-height: 30px;
    }
    
    .ant-pro-checkcard-checked {
        background-color: var(--color-gray-1);
    }
`;

const CheckCardGrids = () => {
    return (
        <Grid title="CheckCard 多选卡片" repeat={4}>
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
    );
};

export default CheckCardGrids;
