import styled from 'styled-components'

export const Main = styled.main`
    margin-top: 5em;
`


const GroupGrid = styled.div`
    display: grid;
    width: 80%;
    grid-template-columns: auto auto auto auto;
    gap: 50px;
    margin-bottom: 4em;
    @media (max-width: 900px) {
        grid-template-columns: auto auto;
    }
`

const MainGroupGrid = styled.div`
    display: flex;
    min-height: 400px;
    justify-content: center;
`

export{GroupGrid,MainGroupGrid}