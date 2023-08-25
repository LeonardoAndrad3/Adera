import styled from 'styled-components'
import { Text } from './NamePhoto/style';

export const Main = styled.main`
    width: 99.7%;
    height: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfileContent = styled.div`
    width: 80%;
    height: 80%;
    position: relative;
    border-radius: 10px;
    background: radial-gradient(rgb(10,2,30, 80%),
    rgb(10,2,20, 100%),
    rgb(10,2,40, 90%)) ;

    display: grid;
    grid-template-columns: auto auto;
`

export const Text1 = styled(Text)`
    font-size: 26px;
    text-align: justify;
    padding: 2em;
`;

export const ContentText = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 40px 30px;
    justify-content: center;
    width: 100%;
    height: auto;
`;
