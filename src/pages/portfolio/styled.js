import styled from 'styled-components'

export const Header = styled.div``;

export const Button = styled.button`
    background: transparent;
    color: #fff;
    border: none;
    font-size: 1.5rem;
    transition: opacity .2s;

    & + button {
        margin-left: 1rem;
    }

    &:focus,
    &:active {
        outline: none;
        border: none;
    }

    &:hover {
        cursor: pointer;
    }

    opacity: ${ props => props.isSelected === true ? 1 : .5 };
`;

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