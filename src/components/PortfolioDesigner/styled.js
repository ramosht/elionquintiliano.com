import styled from 'styled-components'

export const PortfolioContainer = styled.section`
    margin-top: 1rem;
    display: grid;
    grid-gap: 2rem 0;
    grid-template-columns: 100%;
    
    @media screen and (min-width: 576px) {
        grid-gap: 2rem 2%;
        grid-template-columns: repeat(2, 49%);
    }
    
    @media screen and (min-width: 1200px) {
        grid-gap: 2rem 5%;
        grid-template-columns: repeat(3, 30%);
    }
`;

export const PortfolioItem = styled.div`
    img {
        margin: 0;
        height: 14rem;
        
        @media screen and (min-width: 576px) {
            height: 10rem;
        }
        
        width: 100%;
        object-fit: cover;
        object-position: center;
        filter: grayscale(1);
        transition: filter .2s;

        @media screen and (max-width: 576px) {
            filter: none;
        }
    }

    h1 {
        font-size: 1rem;
        margin: 1rem 0 0 0;
    }

    &:hover {
        cursor: pointer;

        img {
            filter: none
        }
    }
`;