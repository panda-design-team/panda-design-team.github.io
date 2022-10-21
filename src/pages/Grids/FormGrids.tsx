import {Form, FormProps, Space, Checkbox, Switch, Radio, Input, Select} from 'antd';
import {CSSProperties} from 'react';
import {Grid} from '@/components/Grid';

const formLayoutProps: FormProps = {
    labelAlign: 'left',
    labelCol: {flex: '0 0 200px'},
    wrapperCol: {flex: 1},
    colon: false,
};

const width300: CSSProperties = {
    width: 300,
};

const options = [{label: '选项一', value: 1}, {label: '选项二', value: 2}, {label: '选项三', value: 3}];
const optionsPartialDisabled = [{label: '选项一', value: 1}, {label: '选项二', value: 2, disabled: true}, {label: '选项三', value: 3}];

export const FormGrids = () => {
    return (
        <>
            <Grid title="Form 表单（默认）" repeat={1} fitContent={false}>
                <Form {...formLayoutProps}>
                    <Form.Item label="Switch 开关">
                        <Switch />
                    </Form.Item>
                    <Form.Item label="Checkbox 多选框">
                        <Checkbox>选项</Checkbox>
                        <Checkbox indeterminate checked={false}>选项</Checkbox>
                    </Form.Item>
                    <Form.Item label="Radio 单选框">
                        <Radio>选项</Radio>
                    </Form.Item>
                    <Form.Item label="Radio.Button 单选按钮组">
                        <Radio.Group defaultValue={1} optionType="button" options={options} />
                    </Form.Item>
                    <Form.Item label="Input 输入框">
                        <Input placeholder="请输入" style={width300} />
                    </Form.Item>
                    <Form.Item label="Select 选择器">
                        <Select placeholder="请选择" style={width300} options={options} />
                    </Form.Item>
                </Form>
            </Grid>
            <Grid title="Form 表单（禁用）" repeat={1} fitContent={false}>
                <Form {...formLayoutProps}>
                    <Form.Item label="Switch 开关">
                        <Space>
                            <Switch disabled checked />
                            <Switch disabled checked={false} />
                        </Space>
                    </Form.Item>
                    <Form.Item label="Checkbox 多选框">
                        <Space>
                            <Checkbox disabled checked>选项</Checkbox>
                            <Checkbox disabled checked={false}>选项</Checkbox>
                            <Checkbox disabled indeterminate checked={false}>选项</Checkbox>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Radio 单选框">
                        <Space>
                            <Radio disabled checked>选项</Radio>
                            <Radio disabled checked={false}>选项</Radio>
                        </Space>
                    </Form.Item>
                    <Form.Item label="Radio.Button 单选按钮组">
                        <Space>
                            <Radio.Group disabled optionType="button" options={options} />
                            <Radio.Group optionType="button" options={optionsPartialDisabled} />
                        </Space>
                    </Form.Item>
                    <Form.Item label="Input 输入框">
                        <Space>
                            <Input disabled placeholder="请输入" style={width300} />
                        </Space>
                    </Form.Item>
                    <Form.Item label="Select 选择器">
                        <Space>
                            <Select disabled placeholder="请选择" style={width300} options={options} />
                            <Select placeholder="请选择" style={width300} options={optionsPartialDisabled} />
                        </Space>
                    </Form.Item>
                </Form>
            </Grid>
        </>
    );
};
