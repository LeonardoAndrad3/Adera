import styled, { css } from 'styled-components'
import wave from "./wave.png"

export const Main = styled.main`
    display: flex;
    height: auto;
    width: 100%;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding-top: 2em;
 
    @media (max-width: 1200px) {
        background-size: 100vw;
        background-image: url(${wave});
        background-position: 40%;
        background-repeat: no-repeat;
        border-radius: 8px;
    }
    @media (max-width: 300px) {
        background-size: 0px;
    }

 
`

export const Text = styled.p`
    font-size: 24px;
    color: white;
`

export const Title = styled.h1`
    font-size: 2vw;
    ${(props) =>{return props.color !== undefined 
    ? css 
    `color:${props.color}; 
    position: ${props.position};` 
    : css
    `color: white; 
    position: ${props.position};
    @media (max-width: 400px) {
        bottom: 0px;
    }` 
    }};
    text-align: center;
    bottom: 2em;
    left: 2em;
    filter: drop-shadow(0 0 6px rgba(200,30,250, 100%));
    text-shadow: black 3px 3px 3px;

    @media (max-width: 600px) {
        font-size: 14px
    };
`

export const Img = styled.img`
    width: 90%;
    height: 80%;
    background: rgba(1,11,30, 100%);
    border-radius: 50% 60% 40% 100%/ 30% 100% 30% 100%;  
    position: absolute;
    transform: translate(10px, 0px);
    border: solid 3px rgba(200,80,250, 100%);
    filter: drop-shadow(0 0 12px rgba(200,30,250, 100%));
    margin-left: 1em;

    @media (max-width: 1200px) {
        width: 40%;
        height: auto;
        position: relative;
    }

    @media (max-width: 600px) {
        border: solid 1px rgba(200,80,250, 100%);
    }

`;

export const DivImg = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex; 
    justify-content: center;
    align-items: center;

    @media (max-width: 1200px) {
        justify-content: start;
        width: 70%;
        height: auto;

    }
    
    @media (max-width: 600px) {
        width: 70%;
        height: auto;
    }

`



//export{}