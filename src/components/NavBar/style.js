import styled from "styled-components"

export const Text = styled.a`
    margin: 0px;
    font-size: 26px;
    font-weight: normal;
    color: white;
    height: auto;
    width: auto;
    text-decoration: none;
`;

export const Menu = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    gap: 2em;
    margin-right: 2em;
`;

export const Main = styled.div`
    padding-top: 3px;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    background-color: transparent;
    position: absolute;
    top: 0px;
    width: 99.7%;
`;


export const Icon =  styled.img`
    padding-left: 1em;
    background: transparent;
    width: 100px;
    height: auto;
`
