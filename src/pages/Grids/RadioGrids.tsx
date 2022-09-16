import {Radio, Space} from 'antd';
import {ColumnTitle, Grid} from '@/components';

export const RadioGrids = () => {
    return (
        <>
            <Grid title="Radio 单选框"><div /></Grid>
            <Grid title="基础样式">
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用已选</ColumnTitle>
                <ColumnTitle>禁用未选</ColumnTitle>
                <Radio>选项</Radio>
                <Radio checked disabled>选项</Radio>
                <Radio checked={false} disabled>选项</Radio>
            </Grid>
            <Grid title="组合用法" repeat={1}>
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
            <Grid title="加强单选" repeat={3}>
                <ColumnTitle>默认 / 悬浮 / 点击</ColumnTitle>
                <ColumnTitle>禁用已选</ColumnTitle>
                <ColumnTitle>禁用未选</ColumnTitle>
                <Radio.Group
                    defaultValue={1}
                    optionType="button"
                    options={[{label: '选项一', value: 1}, {label: '选项二', value: 2}, {label: '选项三', value: 3}]}
                />
                <Radio.Group
                    defaultValue={1}
                    optionType="button"
                    options={[{label: '选项一', value: 1, disabled: true}, {label: '选项二', value: 2}, {label: '选项三', value: 3}]}
                />
                <Radio.Group
                    defaultValue={1}
                    optionType="button"
                    options={[{label: '选项一', value: 1}, {label: '选项二', value: 2, disabled: true}, {label: '选项三', value: 3}]}
                />
            </Grid>
        </>
    );
};
