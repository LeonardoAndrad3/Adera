import styled from 'styled-components'

export const Div = styled.div`
    width: 90%;
    height: 150px;
    margin: auto;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`   

export const Icon= styled.img`
    width: 80px;
    height: 80px;
    border-radius: 5px;

    @media (max-width: 1400px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 600px) {
        width: 5vw;
        height: auto;
    }
`

export const Line = styled.div`
    width: 10px;
    height: 100px;
    background-color: rgba(200,1,250, 10%);
    border-radius: 10px;
    
    @media (max-width: 600px){
        height: 10vw;
        width: 1vw;
    }
`




//export{}