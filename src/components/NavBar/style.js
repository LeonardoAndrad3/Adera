import styled from "styled-components"

/* Util values */

let menuBox = window.document.getElementById("menuBox")

/* ... */

const Text = styled.a`
    font-size: 22px;
    font-weight: normal;
    color: white;
    height: auto;
    width: auto;
    text-decoration: none;

    @media  (max-width: 900px){
        display: none;
    }
`;

const Menu = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    align-items: center;
    gap: 1em;
    margin-right: 1em;

    @media  (max-width: 900px){
        grid-template-columns: auto;
    }

`;

const Main = styled.div`
    padding-top: 8px;
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

const Icon =  styled.img`
    padding-left: 1em;
    background: transparent;
    width: 80px;
    height: auto;
`;

const MenuResponsivo = styled.div`

    display: none;  
    width: 20px;
    height: 20px;

    @media (max-width: 899px) {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto;
        justify-content: center;
        align-items: center;

    }
`;

const Line = styled.div`
    width: 20px;
    height: 3px;
    background-color: white;
    border-radius: 5px;
`;



export {Icon, Main, Menu, Text, MenuResponsivo, Line}


