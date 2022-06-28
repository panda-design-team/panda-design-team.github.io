import styled from '@emotion/styled';
import Tag from '@/panda-design/tag';
import {IconLogo} from '@/icons';
import {Page, GroupTitle, Grid} from '@/components';

const EllipsisTag = styled(Tag)`
    width: 100px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;


export const TagPage = () => {
    return (
        <Page title="Tag 标签">
            <Grid title="基础标签" repeat={2}>
                <Tag type="flat">标签</Tag>
                <EllipsisTag type="flat">标签文字很多放不下</EllipsisTag>
            </Grid>
            <Grid title="标签样式表" repeat={11}>
                <GroupTitle>primary</GroupTitle>
                <GroupTitle>flat</GroupTitle>
                <GroupTitle>bordered</GroupTitle>
                <GroupTitle>border-default</GroupTitle>
                <GroupTitle>text-default</GroupTitle>
                <GroupTitle>round</GroupTitle>
                <GroupTitle>round</GroupTitle>
                <GroupTitle>round</GroupTitle>
                <GroupTitle>round</GroupTitle>
                <GroupTitle>round</GroupTitle>
                <GroupTitle>disabled</GroupTitle>
                <Tag color="brand" type="primary">标签</Tag>
                <Tag color="brand" type="flat">标签</Tag>
                <Tag color="brand" type="bordered">标签</Tag>
                <Tag color="brand" type="border-default">标签</Tag>
                <Tag color="brand" type="text-default">标签</Tag>
                <Tag round color="brand" type="primary">标签</Tag>
                <Tag round color="brand" type="flat">标签</Tag>
                <Tag round color="brand" type="bordered">标签</Tag>
                <Tag round color="brand" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="brand" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="brand" type="primary">标签</Tag>
                <Tag color="error" type="primary">标签</Tag>
                <Tag color="error" type="flat">标签</Tag>
                <Tag color="error" type="bordered">标签</Tag>
                <Tag color="error" type="border-default">标签</Tag>
                <Tag color="error" type="text-default">标签</Tag>
                <Tag round color="error" type="primary">标签</Tag>
                <Tag round color="error" type="flat">标签</Tag>
                <Tag round color="error" type="bordered">标签</Tag>
                <Tag round color="error" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="error" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="error" type="primary">标签</Tag>
                <Tag color="success" type="primary">标签</Tag>
                <Tag color="success" type="flat">标签</Tag>
                <Tag color="success" type="bordered">标签</Tag>
                <Tag color="success" type="border-default">标签</Tag>
                <Tag color="success" type="text-default">标签</Tag>
                <Tag round color="success" type="primary">标签</Tag>
                <Tag round color="success" type="flat">标签</Tag>
                <Tag round color="success" type="bordered">标签</Tag>
                <Tag round color="success" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="success" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="success" type="primary">标签</Tag>
                <Tag color="warning" type="primary">标签</Tag>
                <Tag color="warning" type="flat">标签</Tag>
                <Tag color="warning" type="bordered">标签</Tag>
                <Tag color="warning" type="border-default">标签</Tag>
                <Tag color="warning" type="text-default">标签</Tag>
                <Tag round color="warning" type="primary">标签</Tag>
                <Tag round color="warning" type="flat">标签</Tag>
                <Tag round color="warning" type="bordered">标签</Tag>
                <Tag round color="warning" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="warning" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="warning" type="primary">标签</Tag>
                <Tag color="gray" type="primary">标签</Tag>
                <Tag color="gray" type="flat">标签</Tag>
                <Tag color="gray" type="bordered">标签</Tag>
                <Tag color="gray" type="border-default">标签</Tag>
                <Tag color="gray" type="text-default">标签</Tag>
                <Tag round color="gray" type="primary">标签</Tag>
                <Tag round color="gray" type="flat">标签</Tag>
                <Tag round color="gray" type="bordered">标签</Tag>
                <Tag round color="gray" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="gray" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="gray" type="primary">标签</Tag>
                <Tag color="disabled" type="primary">标签</Tag>
                <Tag color="disabled" type="flat">标签</Tag>
                <Tag color="disabled" type="bordered">标签</Tag>
                <Tag color="disabled" type="border-default">标签</Tag>
                <Tag color="disabled" type="text-default">标签</Tag>
                <Tag round color="disabled" type="primary">标签</Tag>
                <Tag round color="disabled" type="flat">标签</Tag>
                <Tag round color="disabled" type="bordered">标签</Tag>
                <Tag round color="disabled" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="disabled" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="disabled" type="primary">标签</Tag>
                <Tag color="cyan" type="primary">标签</Tag>
                <Tag color="cyan" type="flat">标签</Tag>
                <Tag color="cyan" type="bordered">标签</Tag>
                <Tag color="cyan" type="border-default">标签</Tag>
                <Tag color="cyan" type="text-default">标签</Tag>
                <Tag round color="cyan" type="primary">标签</Tag>
                <Tag round color="cyan" type="flat">标签</Tag>
                <Tag round color="cyan" type="bordered">标签</Tag>
                <Tag round color="cyan" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="cyan" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="cyan" type="primary">标签</Tag>
                <Tag color="light-purple" type="primary">标签</Tag>
                <Tag color="light-purple" type="flat">标签</Tag>
                <Tag color="light-purple" type="bordered">标签</Tag>
                <Tag color="light-purple" type="border-default">标签</Tag>
                <Tag color="light-purple" type="text-default">标签</Tag>
                <Tag round color="light-purple" type="primary">标签</Tag>
                <Tag round color="light-purple" type="flat">标签</Tag>
                <Tag round color="light-purple" type="bordered">标签</Tag>
                <Tag round color="light-purple" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="light-purple" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="light-purple" type="primary">标签</Tag>
                <Tag color="magenta" type="primary">标签</Tag>
                <Tag color="magenta" type="flat">标签</Tag>
                <Tag color="magenta" type="bordered">标签</Tag>
                <Tag color="magenta" type="border-default">标签</Tag>
                <Tag color="magenta" type="text-default">标签</Tag>
                <Tag round color="magenta" type="primary">标签</Tag>
                <Tag round color="magenta" type="flat">标签</Tag>
                <Tag round color="magenta" type="bordered">标签</Tag>
                <Tag round color="magenta" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="magenta" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="magenta" type="primary">标签</Tag>
                <Tag color="gold" type="primary">标签</Tag>
                <Tag color="gold" type="flat">标签</Tag>
                <Tag color="gold" type="bordered">标签</Tag>
                <Tag color="gold" type="border-default">标签</Tag>
                <Tag color="gold" type="text-default">标签</Tag>
                <Tag round color="gold" type="primary">标签</Tag>
                <Tag round color="gold" type="flat">标签</Tag>
                <Tag round color="gold" type="bordered">标签</Tag>
                <Tag round color="gold" type="border-default">标签</Tag>
                <Tag round icon={<IconLogo />} color="gold" type="text-default">标签</Tag>
                <Tag disabled icon={<IconLogo />} color="gold" type="primary">标签</Tag>
            </Grid>
        </Page>
    );
};
