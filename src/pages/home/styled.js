import styled from 'styled-components'

export const Wrapper = styled.div`
    color: #fff;

    .titulo {
        font-size: 8vw;
        line-height: 90%;
        margin-bottom: 2rem;

        &-block {
            display: block;
        }
    }

    .atuacao {
        font-size: 1.5rem;
        position: relative;
        margin-left: 2rem;
        margin-top: 1rem;

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