import {ReactNode, useCallback} from 'react';
import styled from '@emotion/styled';
import {createMappedRegion} from 'region-core';
import {colors} from '@/theme/colors';

const PageTitleContainer = styled.div<{disableShadow?: boolean}>`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    font-size: 48px;
    height: 120px;
    background-color: ${colors['gray-3']};
    cursor: pointer;
    z-index: 2;
    ${props => !props.disableShadow && `box-shadow: 0px -40px 40px ${colors.white};`}
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const PageTitleFont = styled.div`
    font-size: 60px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 100px 100px 100px;

    h1.ant-5-typography {
        margin-top: 80px;
    }

    h3.ant-5-typography {
        margin-top: 60px;
    }
`;

const pageVisibleRegion = createMappedRegion<string, boolean>(true, {withLocalStorageKey: 'PandaDesign/page'});

const usePageVisible = pageVisibleRegion.useValue;

const togglePageVisible = (title: string) => pageVisibleRegion.set(title, v => !v);

interface PageTitleProps {
    children: string;
    disableShadow?: boolean;
}

const PageTitle = ({children: title, disableShadow}: PageTitleProps) => {
    const toggle = useCallback(
        () => {
            togglePageVisible(title);
        },
        [title],
    );
    return (
        <PageTitleContainer disableShadow={disableShadow} onClick={toggle}>
            <PageTitleFont>{title}</PageTitleFont>
        </PageTitleContainer>
    );
};

interface PageProps {
    title: string;
    isFirst?: boolean;
    children?: ReactNode;
}

export function Page({title, children, isFirst}: PageProps) {
    const visible = usePageVisible(title);
    return (
        <>
            <PageTitle disableShadow={isFirst}>{title}</PageTitle>
            {visible && <PageContainer>{children}</PageContainer>}
        </>
    );
}
