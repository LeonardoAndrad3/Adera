import React from 'react';
//import {View} from 'react-native';
import {Main, Img, Title, DivImg} from './style'

export default function NamePhoto(){
    return(
        <Main>
           
            <DivImg> <Img/>
            <Title position={"absolute"}>
                Dev. Leonardo Andrade
            </Title>
            </DivImg>
        </Main>
    );
}