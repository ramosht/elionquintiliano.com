import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/Layout'

import {Wrapper} from './styled'

const Home = () => {
    return (
        <Layout style={layoutStyle}>
            <SEO 
                title="Início" 
                description="Filmmaker, designer e músico. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
            />

            <Wrapper>
                <h1 className="titulo">
                    <span className="titulo-block">elion</span>
                    <span className="titulo-block">quintiliano</span>
                    <span className="titulo-block">.com</span>
                </h1>
                <span className="atuacao">filmmaker & designer</span>
            </Wrapper>
            
        </Layout>
    )
}

const layoutStyle = {
    position: 'absolute', 
    top: '50%', 
    transform: 'translateY(-50%)',
    padding: '1rem 0',
    left: '2rem'
}

export default Home