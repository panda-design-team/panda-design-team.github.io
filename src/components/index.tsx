import {ReactNode, useCallback} from 'react';
import styled from '@emotion/styled';
import {createMappedRegion} from 'region-core';
import {colors} from '@panda-design/components';

const PageTitle = styled.div<{disableShadow?: boolean}>`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    font-size: 48px;
    height: 120px;
    background-color: var(--color-gray-3);
    cursor: pointer;
    z-index: 2;
    ${props => !props.disableShadow && `box-shadow: 0px -40px 40px ${colors['gray-1']};`}
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const PageTitleFont = styled.div`
    //font-family: Din Alternate, sans-serif;
    font-size: 60px;
    //font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 100px 100px 100px;
    gap: 80px;
`;

const pageVisibleRegion = createMappedRegion<string, boolean>(true, {withLocalStorageKey: 'PandaDesign/page'});

interface PageProps {
    title: string;
    titleNode?: ReactNode;
    className?: string;
    isFirst?: boolean;
    children?: ReactNode;
}

export function Page({title, titleNode = title, className, children, isFirst}: PageProps) {
    const visible = pageVisibleRegion.useValue(title);
    const toggle = useCallback(
        () => {
            pageVisibleRegion.set(title, v => !v);
        },
        [title]
    );
    return (
        <>
            <PageTitle disableShadow={isFirst} onClick={toggle}>
                <PageTitleFont>{titleNode}</PageTitleFont>
            </PageTitle>
            {visible && <PageContainer className={className}>{children}</PageContainer>}
        </>
    );
}

const GridContainer = styled.div<{repeat?: number}>`
    display: grid;
    width: fit-content;
    grid-template-columns: repeat(${props => props.repeat ?? 3}, auto);
    column-gap: 30px;
    row-gap: 20px;
    align-items: center;
    margin-top: 40px;

    > * {
        width: fit-content;
    }
`;

interface GridProps {
    title?: string;
    beforeGrid?: ReactNode;
    afterGrid?: ReactNode;
    className?: string;
    children?: ReactNode;
    repeat?: number;
}

export function Grid({title, className, beforeGrid, afterGrid, children, repeat = 3}: GridProps) {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {beforeGrid}
            {children && <GridContainer className={className} repeat={repeat}>{children}</GridContainer>}
            {afterGrid}
        </div>
    );
}

export const ColumnTitle = styled.div`
    color: var(--color-gray-8);
`;

export const RowTitle = styled.div`
    display: flex;
    align-items: center;
    color: var(--color-gray-8);
`;
