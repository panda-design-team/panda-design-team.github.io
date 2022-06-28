import {ReactNode, useCallback} from 'react';
import styled from '@emotion/styled';
import {createMappedRegion} from 'region-core';

const PageTitle = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 46px;
    font-size: 48px;
    height: 118px;
    background-color: var(--color-gray-3);
    cursor: pointer;
    z-index: 1;
`;

const PageTitleExtra = styled.div`
    color: var(--color-gray-7);
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 96px 96px 96px;
    gap: 80px;
`;

const pageVisibleRegion = createMappedRegion<string, boolean>(true, {withLocalStorageKey: 'PandaDesign/page'});

interface PageProps {
    title: string;
    status?: string;
    children?: ReactNode;
}

export function Page({title, children, status}: PageProps) {
    const visible = pageVisibleRegion.useValue(title);
    const toggle = useCallback(
        () => {
            pageVisibleRegion.set(title, v => !v);
        },
        [title]
    );
    return (
        <>
            <PageTitle onClick={toggle}>{title}{status && <PageTitleExtra>{status}</PageTitleExtra>}</PageTitle>
            {visible && <PageContainer>{children}</PageContainer>}
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
    padding-top: 10px;

    > * {
        width: fit-content;
    }
`;

interface GridProps {
    title?: string;
    description?: string;
    children: ReactNode;
    repeat?: number;
}

export function Grid({title, description, children, repeat = 3}: GridProps) {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
            <GridContainer repeat={repeat}>{children}</GridContainer>
        </div>
    );
}

export const GroupTitle = styled.div`
    color: var(--color-gray-8);
`;
