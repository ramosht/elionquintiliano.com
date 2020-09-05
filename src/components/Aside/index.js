import React from 'react'
import * as S from './styled.js'
import MenuLinks from '../MenuLinks'

// Components
const Aside = (props) => {
    return (
        <S.AsideWrapper className={ props.asideState ? 'shown' : '' }>
            <S.MenuWrapper>
                <MenuLinks />
            </S.MenuWrapper>
        </S.AsideWrapper>   
    )
}

export default Aside