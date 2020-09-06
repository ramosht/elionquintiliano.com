import React from 'react'
import SEO from '../../components/seo'
import Layout from '../../components/Layout'
import styled from 'styled-components'

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
                <span className="atuacao">filmmaker &#38; designer</span>
            </Wrapper>
            
        </Layout>
    )
}

const layoutStyle = {
    display: 'flex',
    alignItems: 'center'
}

const Wrapper = styled.div`
    color: #fff;

    .titulo {
        font-size: 8vw;
        line-height: 90%;
        margin-bottom: 2rem;

        &-block {
            display: block;
        }

        @media screen and (max-width: 576px) {
            font-size: 12vw;
        }
    }

    .atuacao {
        font-size: 1.5rem;
        position: relative;
        margin-left: 2rem;
        margin-top: 1rem;

        @media screen and (max-width: 576px) {
            font-size: 1rem;
        }

        &:after,
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 1.25rem;
            height: .25rem;
            background: #ffffff;
        }

        &:before {
            left: -2rem;
        }

        &:after {
            right: -2rem;
        }
    }
`;

export default Home