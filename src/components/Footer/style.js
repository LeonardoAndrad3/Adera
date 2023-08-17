import styled from "styled-components"

export const Text = styled.p`
    color: white;
    font-size: 18px;
` 

export const Icon =  styled.img`
    padding-left: 1em;
    background: transparent;
    width: 50px;
    height: auto;
`

export const Main = styled.div`
    position: relative;
    padding-top: 8px;
    padding-left: 2em;
    padding-right: 2em;
    border-radius: 10px 10px 0px 0px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    justify-content: space-between;
    align-items: center;
    background: rgb(40,43,90);
    background: linear-gradient(300deg, rgb(40,43,90,1) 0%, rgb(29,33,82,1) 50%, rgb(6,10,64,1) 100%);
    height: 100px;
`;