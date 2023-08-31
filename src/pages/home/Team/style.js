import styled from 'styled-components'
import { Text } from './NamePhoto/style';


export const Main = styled.main`
    width: 99.7%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 4em;
    margin-top: 30em;

    @media (max-width: 1400px) {
        margin-top: 0px;
    }

`

export const ProfileContent = styled.div`
    width: 80%;
    height: auto;
    position: relative;
    border-radius: 10px;
    background: radial-gradient(rgb(10,2,30, 80%),
    rgb(10,2,20, 100%),
    rgb(10,2,40, 90%)) ;
    display: grid;
    grid-template-columns: 25% 70%;
    gap: 2em;
    @media (max-width: 1200px){
        grid-template-columns: auto;
        gap: 2em;
    }
`

export const Text1 = styled(Text)`
    font-size: 1.5vw;
    text-align: justify;
    padding-right: 3em; 
    padding-left: 1em;

    @media (max-width: 900px) {
        font-size: 2vw;
    }

    @media (max-width: 600px) {
        font-size: 16px;
    }
`;

export const ContentText = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
    width: 100%;
    padding-left: 1em;
    padding-right: 1em;
`;
