import React from 'react';
import {Main, ContentText, Text, Span} from './style'
import CustomTitle from 'components/CustomTitle';
import ContactAd from '~/components/ContactAd';
import "./index.css";

export default function About(){
    return(
        <>
        <Main>
            <ContentText>
                <CustomTitle text="Quem somos" 
                position={"true"}
                rotate={-90}
                className={"titleAbout"}
                ></CustomTitle>
                <Text>
                &emsp; <Span color={"primary"}>A ADÉRA</Span> é uma empresa de <Span color={"three"}>desenvolvimento web e mobile</Span> fundada em 2023, com uma equipe apaixonada por criar sites e aplicativos inovadores que se <Span color={"segund"}>destacam no mercado digital</Span>. Nós nos esforçamos para fornecer soluções personalizadas e de alta qualidade que atendam às necessidades exclusivas de nossos clientes.
                </Text>

              
            </ContentText>

            <ContactAd className={"adAbout"}></ContactAd>
        </Main>
        </>
    );
}