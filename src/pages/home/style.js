import styled from 'styled-components';
import TecBackground from "~/imgs/tecBackground.jpeg"

export const Back = styled.body`   
    height: 100vh;
    width: auto;
    background-image: url(${TecBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    filter: blur(8px);
`;

export const H1 = styled.h1`
    font-size: 60px;
    color: rgb(145,106,255);
`

export const H3 = styled.h1`
    font-size: 30px;
    color: white;
`
export const Span = styled.span`
    color: #9389D3;
`

export const TitleContent = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    height: auto;
    width: 80%;
    transform: translate(-50%, -50%);
    text-align: center;
`
