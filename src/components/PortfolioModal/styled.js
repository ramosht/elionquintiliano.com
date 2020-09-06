import styled from 'styled-components'

export const PortfolioContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    .closeModal {
        position: absolute;
        top: 1rem;
        right: 1rem;

        background: transparent;
        color: #fff;
        font-size: 3rem;
        width: 4rem;
        height: 4rem;
        border: none;

        &:hover {
            cursor: pointer;
        }

        &:focus,
        &:active {
            outline: none;
        }
    }
`;

export const PortfolioContent = styled.div`
    width: 95%;
    max-width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h4 {
        font-size: 3rem;
    }

    p {
        margin: 1rem 0 0 0;
        font-size: 1.25rem;
    }

    img {
        max-width: 100%;
        margin: 1rem 0 0 0;
    }

    a {
        margin: 1rem 0 0 0;
        font-size: 1.25rem;
        text-decoration: none;
        padding: .5rem 0;
        border-bottom: 2px dashed #fff;
    }
`;