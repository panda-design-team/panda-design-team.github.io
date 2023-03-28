import {Typography} from 'antd';
import styled from '@emotion/styled';

const transparentSteelBlue = '#e1e3e847';

const FontFamilyContainer = styled.div`
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

const FontUsageGrids = () => {
    return (
        <>
            <Typography.Title level={3}>使用场景</Typography.Title>
            <Typography.Title>h1. 标题</Typography.Title>
            <Typography.Title level={2}>h2. 标题</Typography.Title>
            <Typography.Title level={3}>h3. 标题</Typography.Title>
            <Typography.Title level={4}>h4. 标题</Typography.Title>
            <Typography.Title level={5}>h5. 标题</Typography.Title>
            <Typography.Text>正文</Typography.Text>
            <Typography.Text type="secondary">辅助信息</Typography.Text>
        </>
    );
};

export const TypographyGrids = () => {
    return (
        <>
            <Typography.Title>Typography 排版</Typography.Title>
            <p>用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。</p>
            <FontFamilyGrids />
            <FontUsageGrids />
        </>
    );
};
