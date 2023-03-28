import {Table, TableColumnsType, Typography} from 'antd';
import styled from '@emotion/styled';
import {ReactNode} from 'react';
import {colors} from '@panda-design/components';
import {css} from '@emotion/css';

const transparentSteelBlue = '#e1e3e847';

const FontFamilyContainer = styled.div`
    margin: 4px 0 16px 0;
    padding: 18px 22px;
    width: 100%;
    background-color: ${transparentSteelBlue};
`;

const FontFamilyGrids = () => {
    return (
        <>
            <Typography.Title level={3}>字体家族</Typography.Title>
            <p>字体家族中优先使用系统默认的界面字体，并提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下字体的可读性。</p>
            <Typography.Text type="secondary">默认字体</Typography.Text>
            <FontFamilyContainer>
                {'"PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Microsoft YaHei", "Arial", "SimSun", "sans-serif"'}
            </FontFamilyContainer>
            <Typography.Text type="secondary">代码字体</Typography.Text>
            <FontFamilyContainer>
                {'"Consolas" , "Menlo" , "Courier" , "monospace"'}
            </FontFamilyContainer>
            <Typography.Text type="secondary">数字字体</Typography.Text>
            <FontFamilyContainer>
                {'"DIN Alternate", "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Microsoft YaHei", "Arial", "SimSun", "sans-serif"'}
            </FontFamilyContainer>
        </>
    );
};

interface TypographyFlavor {
    key: string;
    case: ReactNode;
    fontSize: ReactNode;
    fontWeight: string;
    lineHeight: string;
    color: string;
}

const tableCss = css`
    .ant5-typography {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }
`;

const columns: TableColumnsType<TypographyFlavor> = [
    {
        title: '用例',
        dataIndex: 'case',
    },
    {
        title: '字号',
        dataIndex: 'fontSize',
    },
    {
        title: '字重',
        dataIndex: 'fontWeight',
    },
    {
        title: '行高',
        dataIndex: 'lineHeight',
    },
    {
        title: '颜色',
        dataIndex: 'color',
    },
];

const dataSource: TypographyFlavor[] = [
    {
        key: 'h1',
        case: <Typography.Title>H1 一级标题</Typography.Title>,
        fontSize: <Typography.Title>28px</Typography.Title>,
        fontWeight: '中黑',
        lineHeight: '42px',
        color: 'rgba(0, 0, 0, .88) (待定)',
    },
    {
        key: 'h2',
        case: <Typography.Title level={2}>H2 二级标题</Typography.Title>,
        fontSize: <Typography.Title level={2}>24px</Typography.Title>,
        fontWeight: '中黑',
        lineHeight: '36px',
        color: 'rgba(0, 0, 0, .88) (待定)',
    },
    {
        key: 'h3',
        case: <Typography.Title level={3}>H3 三级标题</Typography.Title>,
        fontSize: <Typography.Title level={3}>20px</Typography.Title>,
        fontWeight: '中黑',
        lineHeight: '30px',
        color: 'rgba(0, 0, 0, .88) (待定)',
    },
    {
        key: 'h4',
        case: <Typography.Title level={4}>H4 四级标题</Typography.Title>,
        fontSize: <Typography.Title level={4}>16px</Typography.Title>,
        fontWeight: '中黑',
        lineHeight: '24px',
        color: 'rgba(0, 0, 0, .88) (待定)',
    },
    {
        key: 'h5',
        case: <Typography.Title level={5}>H5 五级标题</Typography.Title>,
        fontSize: <Typography.Title level={5}>14px</Typography.Title>,
        fontWeight: '中黑',
        lineHeight: '22px',
        color: 'rgba(0, 0, 0, .88) (待定)',
    },
    {
        key: 'text-1',
        case: <span>内文一 正文</span>,
        fontSize: <span>14px</span>,
        fontWeight: '常规',
        lineHeight: '22px',
        color: 'rgba(0, 0, 0, .85) (待定)',
    },
    {
        key: 'text-2',
        case: <span className={css`color: ${colors['gray-8']}`}>内文二 辅助文字</span>,
        fontSize: <span className={css`color: ${colors['gray-8']}`}>14px</span>,
        fontWeight: '常规',
        lineHeight: '22px',
        color: 'gray-8',
    },
    {
        key: 'text-3',
        case: <span className={css`color: ${colors['gray-7']}`}>内文三 次要文字</span>,
        fontSize: <span className={css`color: ${colors['gray-7']}`}>14px</span>,
        fontWeight: '常规',
        lineHeight: '22px',
        color: 'gray-7',
    },
    {
        key: 'text-4',
        case: <span className={css`font-size: 12px`}>内文四 内容最小字号</span>,
        fontSize: <span className={css`font-size: 12px`}>12px</span>,
        fontWeight: '常规',
        lineHeight: '18px',
        color: 'rgba(0, 0, 0, .85) (待定)',
    },
];

const TypographyGrids = () => {
    return (
        <>
            <Typography.Title level={3}>Typography 排版</Typography.Title>
            <Table
                className={tableCss}
                columns={columns}
                dataSource={dataSource}
                pagination={false}
            />
        </>
    );
};

export const FontGrids = () => {
    return (
        <>
            <Typography.Title>Font 字体</Typography.Title>
            <p>用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。</p>
            <FontFamilyGrids />
            <TypographyGrids />
        </>
    );
};
