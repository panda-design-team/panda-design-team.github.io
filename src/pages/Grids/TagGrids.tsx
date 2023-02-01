import styled from '@emotion/styled';
import {Tag, IconLogo, createTag} from '@panda-design/components';
import {Switch} from 'antd';
import {useState} from 'react';
import {ColumnTitle, Grid} from '@/components/Grid';

const EllipsisTag = styled(Tag)`
    width: 100px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const CustomTag = createTag<'stackoverflow' | 'twitter'>({
    stackoverflow: {
        light: '#fee3cd',
        solid: '#da680b',
    },
    twitter: {
        light: '#1d9bf01a',
        solid: '#1d9bf0',
    },
});

const P = styled.p`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const TagGrids = () => {
    const [disabled, handleDisabledChange] = useState(false);
    return (
        <>
            <Grid title="Tag 标签" beforeGrid={<p>标签是页面上最常使用的点缀方式，用户可以通过色彩区域快速聚焦到所需的信息。</p>} />
            <Grid title="基础标签" repeat={2}>
                <Tag type="flat">标签</Tag>
                <EllipsisTag type="flat">标签文字很多放不下</EllipsisTag>
            </Grid>
            <Grid
                title="标签样式表"
                beforeGrid={(
                    <P>切换禁用态 <Switch checked={disabled} onChange={v => handleDisabledChange(v)} /></P>
                )}
                repeat={11}
            >
                <ColumnTitle />
                <ColumnTitle>primary</ColumnTitle>
                <ColumnTitle>flat</ColumnTitle>
                <ColumnTitle>bordered</ColumnTitle>
                <ColumnTitle>border-default</ColumnTitle>
                <ColumnTitle>text-default</ColumnTitle>
                <ColumnTitle>round</ColumnTitle>
                <ColumnTitle>round</ColumnTitle>
                <ColumnTitle>round</ColumnTitle>
                <ColumnTitle>round</ColumnTitle>
                <ColumnTitle>round</ColumnTitle>
                <ColumnTitle>default</ColumnTitle>
                <Tag disabled={disabled} type="primary">标签</Tag>
                <Tag disabled={disabled} type="flat">标签</Tag>
                <Tag disabled={disabled} type="bordered">标签</Tag>
                <Tag disabled={disabled} type="border-default">标签</Tag>
                <Tag disabled={disabled} type="text-default">标签</Tag>
                <Tag disabled={disabled} round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>steelblue</ColumnTitle>
                <Tag disabled={disabled} color="steelblue" type="primary">标签</Tag>
                <Tag disabled={disabled} color="steelblue" type="flat">标签</Tag>
                <Tag disabled={disabled} color="steelblue" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="steelblue" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="steelblue" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="steelblue" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="steelblue" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="steelblue" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="steelblue" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="steelblue" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>info</ColumnTitle>
                <Tag disabled={disabled} color="info" type="primary">标签</Tag>
                <Tag disabled={disabled} color="info" type="flat">标签</Tag>
                <Tag disabled={disabled} color="info" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="info" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="info" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="info" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="info" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="info" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="info" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="info" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>error</ColumnTitle>
                <Tag disabled={disabled} color="error" type="primary">标签</Tag>
                <Tag disabled={disabled} color="error" type="flat">标签</Tag>
                <Tag disabled={disabled} color="error" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="error" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="error" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="error" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="error" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="error" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="error" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="error" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>success</ColumnTitle>
                <Tag disabled={disabled} color="success" type="primary">标签</Tag>
                <Tag disabled={disabled} color="success" type="flat">标签</Tag>
                <Tag disabled={disabled} color="success" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="success" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="success" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="success" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="success" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="success" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="success" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="success" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>warning</ColumnTitle>
                <Tag disabled={disabled} color="warning" type="primary">标签</Tag>
                <Tag disabled={disabled} color="warning" type="flat">标签</Tag>
                <Tag disabled={disabled} color="warning" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="warning" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="warning" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="warning" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="warning" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="warning" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="warning" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="warning" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>gray</ColumnTitle>
                <Tag disabled={disabled} color="gray" type="primary">标签</Tag>
                <Tag disabled={disabled} color="gray" type="flat">标签</Tag>
                <Tag disabled={disabled} color="gray" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="gray" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="gray" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="gray" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="gray" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="gray" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="gray" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="gray" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>disabled</ColumnTitle>
                <Tag disabled={disabled} color="disabled" type="primary">标签</Tag>
                <Tag disabled={disabled} color="disabled" type="flat">标签</Tag>
                <Tag disabled={disabled} color="disabled" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="disabled" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="disabled" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="disabled" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="disabled" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="disabled" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="disabled" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="disabled" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>cyan</ColumnTitle>
                <Tag disabled={disabled} color="cyan" type="primary">标签</Tag>
                <Tag disabled={disabled} color="cyan" type="flat">标签</Tag>
                <Tag disabled={disabled} color="cyan" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="cyan" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="cyan" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="cyan" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="cyan" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="cyan" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="cyan" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="cyan" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>light-purple</ColumnTitle>
                <Tag disabled={disabled} color="light-purple" type="primary">标签</Tag>
                <Tag disabled={disabled} color="light-purple" type="flat">标签</Tag>
                <Tag disabled={disabled} color="light-purple" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="light-purple" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="light-purple" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="light-purple" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="light-purple" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="light-purple" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="light-purple" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="light-purple" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>magenta</ColumnTitle>
                <Tag disabled={disabled} color="magenta" type="primary">标签</Tag>
                <Tag disabled={disabled} color="magenta" type="flat">标签</Tag>
                <Tag disabled={disabled} color="magenta" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="magenta" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="magenta" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="magenta" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="magenta" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="magenta" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="magenta" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="magenta" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>gold</ColumnTitle>
                <Tag disabled={disabled} color="gold" type="primary">标签</Tag>
                <Tag disabled={disabled} color="gold" type="flat">标签</Tag>
                <Tag disabled={disabled} color="gold" type="bordered">标签</Tag>
                <Tag disabled={disabled} color="gold" type="border-default">标签</Tag>
                <Tag disabled={disabled} color="gold" type="text-default">标签</Tag>
                <Tag disabled={disabled} color="gold" round icon={<IconLogo />} type="primary">标签</Tag>
                <Tag disabled={disabled} color="gold" round icon={<IconLogo />} type="flat">标签</Tag>
                <Tag disabled={disabled} color="gold" round icon={<IconLogo />} type="bordered">标签</Tag>
                <Tag disabled={disabled} color="gold" round icon={<IconLogo />} type="border-default">标签</Tag>
                <Tag disabled={disabled} color="gold" round icon={<IconLogo />} type="text-default">标签</Tag>
                <ColumnTitle>twitter</ColumnTitle>
                <CustomTag disabled={disabled} color="twitter" type="primary">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" type="flat">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" type="bordered">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" type="border-default">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" type="text-default">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" round icon={<IconLogo />} type="primary">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" round icon={<IconLogo />} type="flat">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" round icon={<IconLogo />} type="bordered">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" round icon={<IconLogo />} type="border-default">标签</CustomTag>
                <CustomTag disabled={disabled} color="twitter" round icon={<IconLogo />} type="text-default">标签</CustomTag>
                <ColumnTitle>stackoverflow</ColumnTitle>
                <CustomTag disabled={disabled} color="stackoverflow" type="primary">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" type="flat">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" type="bordered">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" type="border-default">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" type="text-default">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" round icon={<IconLogo />} type="primary">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" round icon={<IconLogo />} type="flat">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" round icon={<IconLogo />} type="bordered">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" round icon={<IconLogo />} type="border-default">标签</CustomTag>
                <CustomTag disabled={disabled} color="stackoverflow" round icon={<IconLogo />} type="text-default">标签</CustomTag>
            </Grid>
        </>
    );
};
