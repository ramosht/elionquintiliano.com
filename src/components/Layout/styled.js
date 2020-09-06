import styled from 'styled-components'

export const Layout = styled.div`
    min-height: calc(100vh - 76px - 64px);
    display: flex;

    @media screen and (min-width: 768px) {
        min-height: 100vh;
        padding-left: 5rem;
        padding-right: 15rem;
    }
`;

export const Main = styled.main`
    padding: 2rem 4rem;
    box-sizing: border-box;
    width: 100%;

    @media screen and (max-width: 767px) {
        padding: 1rem;
    }
    max-width: 70rem;
`;