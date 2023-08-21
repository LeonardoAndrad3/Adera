import styled from 'styled-components'

const GroupGrid = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: auto auto auto auto;
    gap: 50px;
    margin-bottom: 3em;
    @media (max-width: 900px) {
        grid-template-columns: auto auto;
    }
`

const MainGroupGrid = styled.div`
    display: flex;
    min-height: 400px;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 30px;
    color: #474076;
    border-radius: 10px;
    transform: skewX(23deg);
    font-weight: 400;
`

const ContentTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9D9D9;
    margin-top: 3em;
    margin-right: 2em;
    margin-bottom: 3em;
    transform: skewX(-23deg);
    border-radius: 5px;
    width: 200px;
    height: 50px;
`

const TitleProjetct = styled.div`
    display: flex;
    background-color: transparent;
    justify-content: right;
`




export{GroupGrid, Title, ContentTitle, TitleProjetct, MainGroupGrid}