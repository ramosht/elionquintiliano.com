import styled from 'styled-components'

export const Layout = styled.div`
    padding-left: 5rem;
    height: 100vh;
    @media screen and (min-width: 768px) {
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
    margin: auto;
    max-width: 70rem;
`;