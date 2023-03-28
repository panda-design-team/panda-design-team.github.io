import {Select, Typography} from 'antd';
import styled from '@emotion/styled';
import {Button} from '@panda-design/components';
import {PlusOutlined} from '@ant-design/icons';
import {css} from '@emotion/css';

const Container = styled.div`
    padding: 20px;
`;

const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const steelBlue = {
    light: '#e9edf5',
    solid: '#6c7789',
};

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${steelBlue.solid};
    background-color: ${steelBlue.light};
    height: 300px;
    margin-top: 20px;
    font-size: 16px;
`;

const titleCss = css`
    margin-top: 0 !important;
    margin-bottom: 20px !important;
`;

export const VisualFlowDemo = () => {
    return (
        <Container>
            <Typography.Title className={titleCss}>集群管理</Typography.Title>
            <ActionsContainer>
                <Button type="primary" icon={<PlusOutlined />}>导入集群</Button>
                <Select placeholder="请选择地域" />
            </ActionsContainer>
            <Content>内容区域</Content>
        </Container>
    );
};
