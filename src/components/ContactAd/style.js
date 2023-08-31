import styled from 'styled-components'
import * as Style from '~/pages/home/About/style';

export const Main = styled.main`
    background: #2B2D2F;
    width: 50%;
    height: 300px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 80%;
    align-items: center;
    position: absolute;
    border-radius: 8px;

    @media (max-width:1400px) {
        display: none;
    }
`

export const Text = styled(Style.Text)`
    padding-top: 2em;
    padding-left: 2em;
    padding-right: 2em;
`

export const Icon =  styled.img`
    position: absolute;
    padding-left: 1em;
    transform: translate(-0%, -100%);
    background: transparent;
    width: 300px;
    height: auto;
`;


export const ContentButton = styled.div`
    height: 100%;
    display: flex;
    align-items: start; 
    justify-content: end;
    transform: translate(-5%, -80%);
`

export {Style};