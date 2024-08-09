import {Menu, MenuProps, Typography} from 'antd';
import styled from '@emotion/styled';
import {ReactNode} from 'react';
import {colors} from '@/theme/colors';
import {ColumnTitle, Grid} from '@/components/Grid';

const itemsBasic: MenuProps['items'] = [
    {
        key: '1',
        label: '菜单内容',
    },
    {
        key: '2',
        label: '菜单内容',
    },
    {
        key: '3',
        label: '菜单内容',
    },
    {
        key: '4',
        label: '菜单内容',
        disabled: true,
    },
    {
        key: '5',
        label: '菜单内容',
    },
];

const itemsGroup: MenuProps['items'] = [
    {
        type: 'group',
        label: '分类一',
        children: [
            {
                key: '1',
                label: '菜单内容',
            },
            {
                key: '2',
                label: '菜单内容',
            },
        ],
    },
    {
        type: 'group',
        label: '分类二',
        children: [
            {
                key: '3',
                label: '菜单内容',
            },
            {
                key: '4',
                label: '菜单内容',
            },
        ],
    },
];

const Title = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    color: ${colors.black};
    margin: 16px 8px 24px 8px;
    padding-left: 12px;
`;

const Container = styled.div`
    border-right: 1px solid ${colors['gray-4']};
`;

interface Props {
    title?: ReactNode;
    children?: ReactNode;
}

const MenuContainer = ({title, children}: Props) => {
    return (
        <Container>
            <Title>{title}</Title>
            {children}
        </Container>
    );
};

export const MenuGrids = () => {
    return (
        <>
            <Typography.Title>Menu 导航菜单</Typography.Title>
            <Grid repeat={2}>
                <ColumnTitle>基础使用</ColumnTitle>
                <ColumnTitle>分类导航</ColumnTitle>
                <MenuContainer title="导航标题">
                    <Menu
                        inlineIndent={12}
                        style={{width: 256}}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={itemsBasic}
                    />
                </MenuContainer>
                <MenuContainer title="导航标题">
                    <Menu
                        inlineIndent={12}
                        style={{width: 256}}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={itemsGroup}
                    />
                </MenuContainer>
            </Grid>
        </>
    );
};
