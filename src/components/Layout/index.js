import React, {useState, useEffect} from "react"
import {useMediaQuery} from 'react-responsive'

import PropTypes from "prop-types"
import Aside from "../Aside"
import LayoutHeaderMobile from "../LayoutHeaderMobile"
import LayoutToolbarMobile from '../LayoutToolbarMobile'

import GlobalStyle from "../../styles/global"
import * as s from "./styled"


const Layout = ({ children, style }) => {
  const [ asideState, setAsideState ] = useState(false);
  const [ page, setPage ] = useState('');
  const isMobile = useMediaQuery({query: '(max-width: 767px)'});

  useEffect(() => {
    let currentPage = window.location.pathname;
    currentPage = currentPage === '/' ? 'home' : currentPage.split('/')[1];
    setPage(currentPage);
  }, []) 

  return (
    <s.Layout style={{ backgroundColor: page === 'about' ? '#fff' : '#000' }}>
      <GlobalStyle />
      
      {isMobile && <LayoutHeaderMobile asideState={asideState} />}

      <Aside asideState={asideState} />
      
      <s.Main style={style}>
        {children}
      </s.Main>

      {isMobile && <LayoutToolbarMobile setAsideState={setAsideState} asideState={asideState} />}

    </s.Layout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
