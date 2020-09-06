import React, { useState } from 'react'
import * as PS from '../../components/Post/styled'
import { Header, Button } from './styled'

import SEO from '../../components/seo'
import Layout from '../../components/Layout'

import PortfolioFilmmaker from '../../components/PortfolioFilmmaker'
import PortfolioDesigner from '../../components/PortfolioDesigner'

const Portfolio = () => {
    const [ sectionVisible, setSectionVisible ] = useState('filmmaker');

    return (
        <Layout>
            <SEO 
                title="Porfólio" 
                description="Filmmaker, designer e músico. Saiba mais um pouco sobre mim, minhas experiências, habilidades e informações de contato. 🧙🏻‍♂️"
            />

            <main style={{color: '#fff'}}>
                <PS.PostHeader>
                    <h1>portfólio</h1>
                </PS.PostHeader>
                <Header>
                    <Button
                        isSelected={ sectionVisible === 'filmmaker' ? true : false }
                        onClick={() => setSectionVisible('filmmaker')}
                    >filmmaker</Button>
                    
                    <Button
                        isSelected={ sectionVisible === 'designer' ? true : false }
                        onClick={() => setSectionVisible('designer')}
                    >designer</Button>
                </Header>
                <PS.MainContent>
                    { 
                        sectionVisible === 'filmmaker' ?
                            <PortfolioFilmmaker /> :
                            <PortfolioDesigner />
                    }
                </PS.MainContent>
            </main>
            
        </Layout>
    )
}

export default Portfolio