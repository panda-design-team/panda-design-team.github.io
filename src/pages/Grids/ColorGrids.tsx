/* eslint-disable max-lines */
import {Tag, flex1} from '@panda-design/components';
import {Typography, theme, Space, Segmented} from 'antd';
import {ReactNode} from 'react';
import {css} from '@emotion/css';
import styled from '@emotion/styled';
import {Text} from '@panda-design/components';
import {colors} from '@/theme/colors';
import {Grid} from '@/components/Grid';
import {Code} from '@/components/Typography';
import {isLight} from '@/utils';
import {setPrimaryColorAndReload, usePrimaryColor} from '@/regions';

const descriptionCss = css`
    color: transparent;
`;

const Container = styled.div<{colorIsLight: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 264px;
    height: 48px;
    color: ${props => (props.colorIsLight ? 'black' : 'white')};
    
    :hover .${descriptionCss} {
        color: ${props => (props.colorIsLight ? 'black' : 'white')};
    }
`;

interface Props {
    color: string;
    name: ReactNode;
}

const ColorItem = ({color, name}: Props) => {
    const colorIsLight = isLight(color);

    return (
        <Container colorIsLight={colorIsLight} style={{backgroundColor: color}}>
            {name}
            <div className={descriptionCss}>{color}</div>
        </Container>
    );
};

const StyledTag = styled(Tag)`
    margin-inline-start: 8px;
    
    span {
        margin-inline-start: 4px;
    }
`;

const displayFlex = css`display: flex;`;

const primaryColorOptions = [
    {label: '黑色', value: 'black'},
    {label: '蓝色', value: '#035fff'},
    {label: '蓝色（新）', value: '#0080ff'},
    {label: 'antd', value: 'antd'},
];

export const ColorGrids = () => {
    const primaryColor = usePrimaryColor();
    const {token} = theme.useToken();
    return (
        <>
            <Typography.Title>Color 色彩</Typography.Title>
            <p>色彩构成了用户对产品的第一印象。首先，介绍一下 Panda Design 的色彩构成。</p>
            <div className={displayFlex}>
                <div className={flex1}>
                    <Typography.Title level={3}>黑白灰</Typography.Title>
                    <p>「黑与白」的对比，是所有色彩中最为强烈的对比。强而有力的黑白对比是 Panda Design 最突出的观感。</p>
                    <p>「黑与白」相互调和，「黑」可以流动为「白」，「白」也可以流动为「黑」。有无相生，「黑与白」的流动，构成了 Panda Design 的交互模式。</p>
                </div>
                <div className={flex1}>
                    <Typography.Title level={3}>主题色</Typography.Title>
                    <p>特别的，当主题色为黑色时，Panda Design 特别定制了一套算法来适应组件，当选择其他颜色时，则会默认采用 antd 的算法</p>
                    <Space>
                        <div>切换主题</div>
                        <Segmented
                            options={primaryColorOptions}
                            value={primaryColor}
                            onChange={setPrimaryColorAndReload}
                        />
                    </Space>
                </div>
            </div>
            <div className={displayFlex}>
                <div className={flex1}>
                    <div>
                        <ColorItem name="white" color={colors.white} />
                        <ColorItem name="gray-2" color={colors['gray-2']} />
                        <ColorItem name="gray-3" color={colors['gray-3']} />
                        <ColorItem name="gray-4" color={colors['gray-4']} />
                        <ColorItem name="gray-5" color={colors['gray-5']} />
                        <ColorItem name="gray-6" color={colors['gray-6']} />
                        <ColorItem name="gray-7" color={colors['gray-7']} />
                        <ColorItem name="gray-8" color={colors['gray-8']} />
                        <ColorItem name="gray-9" color={colors['gray-9']} />
                        <ColorItem name="black" color={colors.black} />
                    </div>
                </div>
                <div className={flex1}>
                    <div>
                        <ColorItem name="colorPrimaryBg" color={token.colorPrimaryBg} />
                        <ColorItem name="colorPrimaryBgHover" color={token.colorPrimaryBgHover} />
                        <ColorItem name="colorPrimaryBorder" color={token.colorPrimaryBorder} />
                        <ColorItem name="colorPrimaryBorderHover" color={token.colorPrimaryBorderHover} />
                        <ColorItem name="colorPrimaryHover" color={token.colorPrimaryHover} />
                        <ColorItem name="colorPrimary" color={token.colorPrimary} />
                        <ColorItem name="colorPrimaryActive" color={token.colorPrimaryActive} />
                        <ColorItem name="colorPrimaryTextHover" color={token.colorPrimaryTextHover} />
                        <ColorItem name="colorPrimaryText" color={token.colorPrimaryText} />
                        <ColorItem name="colorPrimaryTextActive" color={token.colorPrimaryTextActive} />
                    </div>
                </div>
            </div>
            <Typography.Title level={3}>功能色</Typography.Title>
            <p>在整体为黑白的页面主题上，我们再对部分要素通过功能色和辅助色的方式进行高亮，以此引导用户的注意力。其中，功能色承载了用户对于结果的感知，其中：</p>
            <p>
                1. Info 用以表达
                <Text type="info">提醒</Text>
                、
                <Text type="info">运行中</Text>
                等信息，这些信息提示系统处于正常状态；
            </p>
            <p>
                2. Error 用以表达
                <Text type="error">错误</Text>
                、
                <Text type="error">失败</Text>
                、
                <Text type="error">阻塞</Text>
                等信息，这些信息相对严重，并会阻碍用户下一步的行为；
            </p>
            <p>
                3. Success 用以表达
                <Text type="success">正确</Text>
                、
                <Text type="success">成功</Text>
                等信息，肯定了用户的行为；
            </p>
            <p>
                4. Warning 用以表达
                <Text type="warning">警告</Text>
                信息，需要用户关注，但不阻碍流程。
            </p>
            <Grid repeat={4}>
                <div>
                    <ColorItem name="colorInfoBg" color={token.colorInfoBg} />
                    <ColorItem name="colorInfoBgHover" color={token.colorInfoBgHover} />
                    <ColorItem name="colorInfoBorder" color={token.colorInfoBorder} />
                    <ColorItem name="colorInfoBorderHover" color={token.colorInfoBorderHover} />
                    <ColorItem name="colorInfoHover" color={token.colorInfoHover} />
                    <ColorItem name="colorInfo" color={token.colorInfo} />
                    <ColorItem name="colorInfoActive" color={token.colorInfoActive} />
                    <ColorItem name="colorInfoTextHover" color={token.colorInfoTextHover} />
                    <ColorItem name="colorInfoText" color={token.colorInfoText} />
                    <ColorItem name="colorInfoTextActive" color={token.colorInfoTextActive} />
                </div>
                <div>
                    <ColorItem name="colorErrorBg" color={token.colorErrorBg} />
                    <ColorItem name="colorErrorBgHover" color={token.colorErrorBgHover} />
                    <ColorItem name="colorErrorBorder" color={token.colorErrorBorder} />
                    <ColorItem name="colorErrorBorderHover" color={token.colorErrorBorderHover} />
                    <ColorItem name="colorErrorHover" color={token.colorErrorHover} />
                    <ColorItem name="colorError" color={token.colorError} />
                    <ColorItem name="colorErrorActive" color={token.colorErrorActive} />
                    <ColorItem name="colorErrorTextHover" color={token.colorErrorTextHover} />
                    <ColorItem name="colorErrorText" color={token.colorErrorText} />
                    <ColorItem name="colorErrorTextActive" color={token.colorErrorTextActive} />
                </div>
                <div>
                    <ColorItem name="colorSuccessBg" color={token.colorSuccessBg} />
                    <ColorItem name="colorSuccessBgHover" color={token.colorSuccessBgHover} />
                    <ColorItem name="colorSuccessBorder" color={token.colorSuccessBorder} />
                    <ColorItem name="colorSuccessBorderHover" color={token.colorSuccessBorderHover} />
                    <ColorItem name="colorSuccessHover" color={token.colorSuccessHover} />
                    <ColorItem name="colorSuccess" color={token.colorSuccess} />
                    <ColorItem name="colorSuccessActive" color={token.colorSuccessActive} />
                    <ColorItem name="colorSuccessTextHover" color={token.colorSuccessTextHover} />
                    <ColorItem name="colorSuccessText" color={token.colorSuccessText} />
                    <ColorItem name="colorSuccessTextActive" color={token.colorSuccessTextActive} />
                </div>
                <div>
                    <ColorItem name="colorWarningBg" color={token.colorWarningBg} />
                    <ColorItem name="colorWarningBgHover" color={token.colorWarningBgHover} />
                    <ColorItem name="colorWarningBorder" color={token.colorWarningBorder} />
                    <ColorItem name="colorWarningBorderHover" color={token.colorWarningBorderHover} />
                    <ColorItem name="colorWarningHover" color={token.colorWarningHover} />
                    <ColorItem name="colorWarning" color={token.colorWarning} />
                    <ColorItem name="colorWarningActive" color={token.colorWarningActive} />
                    <ColorItem name="colorWarningTextHover" color={token.colorWarningTextHover} />
                    <ColorItem name="colorWarningText" color={token.colorWarningText} />
                    <ColorItem name="colorWarningTextActive" color={token.colorWarningTextActive} />
                </div>
            </Grid>
            <Typography.Title level={3}>辅助色</Typography.Title>
            <p>
                辅助色并不包含确切的含义，而是用于分类一些实体。举例来说，同为动物，我们可以给
                <StyledTag type="flat" color="cyan" icon="🐱">猫</StyledTag>
                和
                <StyledTag type="flat" color="light-purple" icon="🐶">狗</StyledTag>
                分配两种辅助色，仅用于更好的区分两者，在用户使用一段时间后，就可以从辅助色来判断信息。
                {'这部分内容将在 '}
                <Code>7. Decoration 装饰</Code>
                {' 中进行更详细的阐述。'}
            </p>
        </>
    );
};
