import React, { useState, useCallback } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { PortfolioContainer, PortfolioItem } from './styled'

import PortfolioModal from '../PortfolioModal'

const PortfolioDesigner = () => {
    const [ showModal, setShowModal ] = useState(false);
    const [ modalData, setModalData ] = useState({});

    const response = useStaticQuery(graphql`
        query {
            allMarkdownRemark(
                filter: {
                    frontmatter: {
                        category: {
                            eq: "Designer"
                        }
                    },
                }
            ) {
                nodes {
                    frontmatter {
                        category
                        description
                        linkProjeto
                        thumbnail
                        title
                    }
                }
            }
        }
    `);

    const handleShowPortfolioModal = useCallback((data) => {
        setModalData(data);
        setShowModal(true);
    }, [])

    return (
        <>
            <PortfolioContainer>
                {response.allMarkdownRemark.nodes.map((work, index) => (
                    <PortfolioItem 
                        key={index}
                        onClick={ 
                            () => handleShowPortfolioModal({
                                thumbnail: work.frontmatter.thumbnail,
                                title: work.frontmatter.title,
                                description: work.frontmatter.description,
                                linkProjeto: work.frontmatter.linkProjeto
                            })
                        }
                    >
                        <img src={ work.frontmatter.thumbnail } alt={ work.frontmatter.title } />
                        <h1>{ work.frontmatter.title }</h1>
                    </PortfolioItem>
                ))}
            </PortfolioContainer>
            <PortfolioModal 
                showModal={showModal}
                thumbnail={modalData.thumbnail}
                title={modalData.title}
                description={modalData.description}
                linkProjeto={modalData.linkProjeto}
                setModalData={setModalData}
                setShowModal={setShowModal}
            />
        </>
    )
}

export default PortfolioDesigner