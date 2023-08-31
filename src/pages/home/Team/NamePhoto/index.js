import React from 'react';
//import {View} from 'react-native';
import {Main, Img, Title, DivImg} from './style'
import Profile from "./leonardo.png";



export default function NamePhoto(){
    return(
        <Main>
            <DivImg> <Img src={Profile}/>
            <Title position={"absolute"}>
                Dev. Leonardo Andrade
            </Title>
            </DivImg>
        </Main>
    );
}