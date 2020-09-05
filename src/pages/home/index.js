import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/Layout'

import {Wrapper} from './styled'

const Home = () => {
    return (
        <Layout style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <SEO 
                title="Início" 
                description="Desenvolvedor JS, fotógrafo, músico e cristão. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
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

export default Home