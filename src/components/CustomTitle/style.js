import styled, { css } from 'styled-components'

const Title = styled.h1`
    font-size: 50px;
    color: #474076;
    transform: skewX(23deg);
    font-weight: 400;

    @media (max-width: 900px) {
        font-size: 30px;
    }
`

const ContentTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9D9D9;
    transform: skewX(-23deg);
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: auto;
    height: 70px;
    @media (max-width: 900px) {
        height: 50px;
    }
`

const TitleProjetct = styled.div`
    ${(props) => {
        return css`position: ${props.position  ? 'absolute' : 'relative'
        };
        transform: 
        rotate(${props.rotate}deg)
        translate(-10%, -100%);
        display: flex;
        background-color: transparent;
        justify-content: right;`;
    }};
`



export {Title, ContentTitle, TitleProjetct}