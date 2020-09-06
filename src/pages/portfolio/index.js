import React, { useState } from 'react'
import { PostHeader, MainContent } from '../../components/Post/styled'
import styled from 'styled-components'

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
                <PostHeader>
                    <h1>portfólio</h1>
                </PostHeader>
                <div>
                    <Button
                        isSelected={ sectionVisible === 'filmmaker' ? true : false }
                        onClick={() => setSectionVisible('filmmaker')}
                    >filmmaker</Button>
                    
                    <Button
                        isSelected={ sectionVisible === 'designer' ? true : false }
                        onClick={() => setSectionVisible('designer')}
                    >designer</Button>
                </div>
                <MainContent>
                    { 
                        sectionVisible === 'filmmaker' ?
                            <PortfolioFilmmaker /> :
                            <PortfolioDesigner />
                    }
                </MainContent>
            </main>
            
        </Layout>
    )
}

const Button = styled.button`
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

export default Portfolio