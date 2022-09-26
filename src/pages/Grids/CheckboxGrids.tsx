import {Checkbox, Space} from 'antd';
import styled from '@emotion/styled';
import {Grid, ColumnTitle} from '@/components/Grid';

const StyledGrid = styled(Grid)`
    .ant-checkbox-wrapper {
        margin-inline-start: 0 !important;
    }
`;

export const CheckboxGrids = () => {
    return (
        <>
            <Grid title="Checkbox 多选框" />
            <StyledGrid title="基础样式">
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用已选</ColumnTitle>
                <ColumnTitle>禁用未选</ColumnTitle>
                <Checkbox>选项</Checkbox>
                <Checkbox checked disabled>选项</Checkbox>
                <Checkbox checked={false} disabled>选项</Checkbox>
                <Checkbox indeterminate>选项</Checkbox>
                <div />
                <Checkbox indeterminate checked={false} disabled>选项</Checkbox>
            </StyledGrid>
            <Grid title="组合用法" repeat={1}>
                <ColumnTitle>横向</ColumnTitle>
                <Checkbox.Group options={[{label: '选项', value: 1}, {label: '选项', value: 2}, {label: '选项', value: 3}]} />
                <ColumnTitle>纵向</ColumnTitle>
                <Checkbox.Group>
                    <Space direction="vertical">
                        <Checkbox value={1}>选项</Checkbox>
                        <Checkbox value={2}>选项</Checkbox>
                        <Checkbox value={3}>选项</Checkbox>
                    </Space>
                </Checkbox.Group>
            </Grid>
        </>
    );
};
