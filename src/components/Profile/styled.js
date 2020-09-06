import styled from "styled-components"

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0;

    .header {
        h1 {
            font-size: 1.35rem;
            margin-top: .5rem;
            color: #fff;
            font-weight: 600;
        }

        span {
            font-size: 0.9rem;
            font-style: italic;
            margin-top: .25rem;
            display: block;
        }
    }


    p {
        font-size: 0.95rem;
        line-height: 1.25;
        margin: 1.5rem 0;
        color: #fff;
        letter-spacing: 1px;
        text-align: center;
        position: relative;
        
        &:before,
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 4rem;
            height: 1px;
            background: #fff;
            opacity: .35;
        }
        
        &:before {
            top: -.75rem;
            width: 8rem;
        }
        
        &:after {
            bottom: -.75rem;
            width: 4rem;
        }
    }
`;