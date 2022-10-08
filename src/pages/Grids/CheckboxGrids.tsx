import {Checkbox, Space} from 'antd';
import {Grid, ColumnTitle} from '@/components/Grid';

export const CheckboxGrids = () => {
    return (
        <>
            <Grid title="Checkbox 多选框（组合用法）" repeat={1}>
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
