import React, { useCallback } from 'react'
import { Close } from '@styled-icons/material/Close'

import {
    PortfolioContainer,
    PortfolioContent
} from './styled'

const PortfolioModal = (props) => {

    const handleCloseModal = useCallback(() => {
        props.setShowModal(false);
        props.setModalData({});
    }, [props])

    return (
        <PortfolioContainer style={{ display: props.showModal ? 'flex' : 'none' }}>
            <button 
                onClick={
                    () => handleCloseModal()
                } 
                className="closeModal"
                aria-label="Fechar modal"
            ><Close /></button>
            <PortfolioContent>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <img src={props.thumbnail} alt={props.title} />
                <a href={props.linkProjeto} rel="noreferrer" target="_blank">Ver projeto</a>
            </PortfolioContent>
        </PortfolioContainer>
    )
}

export default PortfolioModal