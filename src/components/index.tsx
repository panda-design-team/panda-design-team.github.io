import {ReactNode, useCallback} from 'react';
import {CheckOutlined} from '@ant-design/icons';
import styled from '@emotion/styled';
import {createMappedRegion} from 'region-core';
import {colors} from '@/panda-design/color';

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
    font-family: Din Alternate, sans-serif;
    font-size: 60px;
    font-weight: bold;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const PageTitleExtra = styled.div`
    color: var(--color-gray-7);
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 80px 100px 100px 100px;
    gap: 80px;
`;

const StyledCheckOutlined = styled(CheckOutlined)`
    font-size: 100px;
    color: var(--color-success-5);
`;

const pageVisibleRegion = createMappedRegion<string, boolean>(true, {withLocalStorageKey: 'PandaDesign/page'});

interface PageProps {
    title: string;
    titleNode?: ReactNode;
    className?: string;
    done?: boolean;
    disableShadow?: boolean;
    status?: string;
    children?: ReactNode;
}

export function Page({title, titleNode = title, className, children, status, done, disableShadow}: PageProps) {
    const visible = pageVisibleRegion.useValue(title);
    const toggle = useCallback(
        () => {
            pageVisibleRegion.set(title, v => !v);
        },
        [title]
    );
    return (
        <>
            <PageTitle disableShadow={disableShadow} onClick={toggle}>
                <PageTitleFont>{titleNode}</PageTitleFont>
                {status && <PageTitleExtra>{status}</PageTitleExtra>}
                {done && <StyledCheckOutlined />}
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
    padding-top: 10px;

    > * {
        width: fit-content;
    }
`;

interface GridProps {
    title?: string;
    className?: string;
    description?: string;
    children: ReactNode;
    repeat?: number;
}

export function Grid({title, className, description, children, repeat = 3}: GridProps) {
    return (
        <div>
            {title && <h1>{title}</h1>}
            {description && <p>{description}</p>}
            <GridContainer className={className} repeat={repeat}>{children}</GridContainer>
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
