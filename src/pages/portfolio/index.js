import React, { useState } from 'react'
import * as PS from '../../components/Post/styled'
import { Header } from './styled'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import PortfolioFilmmaker from './portfolios/PortfolioFilmmaker'
import PortfolioDesigner from './portfolios/PortfolioDesigner'

const Portfolio = () => {
    const [ sectionVisible, setSectionVisible ] = useState('filmmaker')
    return (
        <Layout>
            <SEO 
                title="Porfólio" 
                description="Desenvolvedor JS, fotógrafo, músico e cristão. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
            />

            <main style={{color: '#fff'}}>
                <PS.PostHeader>
                    <h1>portfólio</h1>
                </PS.PostHeader>
                <Header>
                    <button onClick={() => setSectionVisible('filmmaker')}>filmmaker</button>
                    <button onClick={() => setSectionVisible('designer')}>designer</button>
                </Header>
                <PS.MainContent>
                    <div>
                        {
                            sectionVisible === 'filmmaker' ?
                            <PortfolioFilmmaker /> :
                            <PortfolioDesigner />
                        }
                    </div>
                </PS.MainContent>
            </main>
            
        </Layout>
    )
}

export default Portfolio