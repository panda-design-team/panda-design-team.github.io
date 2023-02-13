import {Checkbox, Radio, Space} from 'antd';
import styled from '@emotion/styled';
import {Grid, ColumnTitle, RowTitle} from '@/components/Grid';

const HorizontalContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const VerticalGrids = () => {
    return (
        <>
            <Grid title="组合用法" repeat={3}>
                <ColumnTitle />
                <ColumnTitle>横向</ColumnTitle>
                <ColumnTitle>纵向</ColumnTitle>
                <RowTitle>Checkbox 多选框</RowTitle>
                <HorizontalContainer>
                    <Checkbox.Group options={[{label: '选项', value: 1}, {label: '选项', value: 2}, {label: '选项', value: 3}]} />
                </HorizontalContainer>
                <Checkbox.Group>
                    <Space direction="vertical">
                        <Checkbox value={1}>选项</Checkbox>
                        <Checkbox value={2}>选项</Checkbox>
                        <Checkbox value={3}>选项</Checkbox>
                    </Space>
                </Checkbox.Group>
                <RowTitle>Radio 单选框</RowTitle>
                <HorizontalContainer>
                    <Radio.Group options={[{label: '选项', value: 1}, {label: '选项', value: 2}, {label: '选项', value: 3}]} />
                </HorizontalContainer>
                <Radio.Group>
                    <Space direction="vertical">
                        <Radio value={1}>选项</Radio>
                        <Radio value={2}>选项</Radio>
                        <Radio value={3}>选项</Radio>
                    </Space>
                </Radio.Group>
            </Grid>
        </>
    );
};
