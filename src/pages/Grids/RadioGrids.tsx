import {Radio, Space} from 'antd';
import {ColumnTitle, Grid} from '@/components/Grid';

export const RadioGrids = () => {
    return (
        <>
            <Grid title="Radio 单选框（组合用法）" repeat={1}>
                <ColumnTitle>横向</ColumnTitle>
                <Radio.Group options={[{label: '选项', value: 1}, {label: '选项', value: 2}, {label: '选项', value: 3}]} />
                <ColumnTitle>纵向</ColumnTitle>
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
