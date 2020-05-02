import React, { useState } from 'react'
import * as S from './styled.js'
import MenuLinks from '../MenuLinks'

// Components
import Profile from "../Profile"
import ThemeToggle from '../ThemeToggle';

const Aside = () => {
    const [ hamburgerState, setHamburgerState ] = useState(false);
    const [ asideState, setAsideState ] = useState(false);
    
    function toggleButton() {
        setHamburgerState(!hamburgerState);
        setAsideState(!asideState);
    }
    
    return (
        <S.AsideWrapper className={ asideState ? 'shown' : '' }>
            <S.MenuWrapper>
                <MenuLinks />
            </S.MenuWrapper>

            <S.ProfileWrapper>
                <Profile />
            </S.ProfileWrapper>

            <S.ThemeToggleWrapper>
                <ThemeToggle />
            </S.ThemeToggleWrapper>

            <S.Hamburger isActive={hamburgerState} onClick={() => toggleButton()} buttonColor="#01d4b3" barColor="white" buttonWidth={30}  />
        </S.AsideWrapper>   
    )
}

export default Aside