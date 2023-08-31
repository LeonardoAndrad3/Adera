import styled from 'styled-components';

let spanColor;

const Main = styled.main`
    height: auto;
    width: 99vw;
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 20em;
    position: relative;
    padding-top: 2em;

    @media (max-width: 1400px) {
        background: transparent;
        margin-bottom: 0px;
        margin-top: 3em;
    }

`

const ContentText = styled.div`
    position: relative;
    margin: auto;
    height: auto;
    width: 80%;       
    background: rgb(255,255,255, 10%);
    border-radius: 8px;
    min-height: 400px;

    @media (max-width: 1400px) {
        background: transparent;
    }
`

const Text = styled.p`
    font-size: 2vw;
    padding: ${(props) =>
        props.padding
    }em;
    padding-left: 1em;
    text-align: justify;
    color: rgb(255,255,255, 40%);
    margin: 2em;
    margin-top: 5px;
    margin-left: 2em;

    @media (max-width: 900px) {
        font-size: 20px;
    }
`

const Span = styled.span`
    color: var(${(props) => selectColorSpan(props)}); 
`   


export{Text,ContentText, Main, Span}


function selectColorSpan(props){
    switch(props.color){
        case "primary":
            spanColor = "--color-text-primary";
            break;
        case "segund":
            spanColor = "--color-text-segund";
            break;
        case "three":
            spanColor = "--color-text-three";
            break;
        case "four":
            spanColor = "--color-text-four";
            break;
        default: 
            spanColor = "white";
    }

    return spanColor;
}