import styled, { css } from 'styled-components'
import Profile from "./leonardo.png";




export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 10em;
    padding-left: 3em;
    padding-right: 3em;
`

export const Text = styled.p`

    font-size: 24px;
    color: white;

`

export const Title = styled.h1`
    font-size: 30px;
    ${(props) =>{return props.color !== undefined 
    ? css 
    `color:${props.color}; 
    position: ${props.position};` 
    : css
    `color: white; 
    position: ${props.position};` 
    }};
    text-align: center;
    bottom: -2em;
    right: 0px;
    filter: drop-shadow(0 0 6px rgba(200,30,250, 100%));
    text-shadow: black 3px 3px 3px;
    transform-style: flat;
`

export const Img = styled.img.attrs({src:Profile})
`
    width: 100%;
    height: 100%;
    background: rgba(1,11,30, 100%);
    border-radius: 50% 60% 40% 100%/ 30% 100% 30% 100%;  
    position: absolute;
    transform: translate(10px, 0px);
    border: solid 3px rgba(200,80,250, 100%);
    filter: drop-shadow(0 0 12px rgba(200,30,250, 100%));
`;

export const DivImg = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    margin-bottom: 4em;
    transform: translate(20px, 50px);
    background: transparent;
`



//export{}