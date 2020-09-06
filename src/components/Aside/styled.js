import styled from 'styled-components'
import { HamburgerSpin } from 'react-animated-burgers'

export const AsideWrapper = styled.aside`
    height: 100vh;
    height: -webkit-fill-available; 
    width: 100vw;
    position: fixed;
    top: 0;
    right: -110%;
    transition: right .5s ease-in-out, background-color .2s;
    font-family: 'Raleway', sans-serif;
    background: #000;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
    z-index: 4;

    @media screen and (min-width: 768px) {
        width: 15rem;
        right: 0;
    }

    &.shown {
        right: 0;
    }
`;

export const MenuWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 576px) {
        justify-content: flex-start;
    }
`;

export const Hamburger = styled(HamburgerSpin)`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
    border-radius: 50%;
    height: 4.5rem;
    width: 4.5rem;
    border: 2px solid #3d2c40;
    z-index: 5;

    &:active,
    &:focus {
        outline: none;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;