import React from 'react';
import {Main, Style,Text,Icon,ContentButton} from './style';
import AderaIcon from "~/imgs/AderaIcon.svg"
import Button from '../Button';


export default function ContactAd(){
 
    return(
        <Main>
            <Icon src={AderaIcon}/>
            <Text>
                <Style.Span color={"four"}>Entre em contato</Style.Span>, seu problema já tem uma solução!
            </Text>
            <ContentButton>
                <Button></Button>
            </ContentButton>
        </Main>
    );
}