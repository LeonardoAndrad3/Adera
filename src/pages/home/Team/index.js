import React from 'react';
import {Main, ProfileContent, Text1, ContentText} from './style'
import "./index.css"
import CustomTitle from 'components/CustomTitle';
import NamePhoto from './NamePhoto';
import Portfolio from "./Portfolio";
import { Title } from './NamePhoto/style';


export default function Team(){
    return(
        <Main>
            <ProfileContent>
                <CustomTitle 
                    text={"Team"} 
                    position={"true"}
                >
                </CustomTitle>

                <NamePhoto>
                </NamePhoto>

                <ContentText>
                <div>
                <Title color={`var(--color-text-primary)`}> Resumo </Title>
                </div>

                <div>
                <Text1> &emsp;Estudante apaixonado em programação, curioso e um fãn de video-game, decidi seguir na área de TI. Minha formação deu início com técnico em Desenvolvimento de Sistemas, na instituição Etec, onde inflamou uma grande paixão e confirmou meu gosto por tecnologia. Sempre tive grande autonomia, sendo persistente até que o problema seja solucionado, consertando meu primeiro aparelho com apenas 8 anos de idade. Atualmente com certificado az-900 e cursando Ciência da Computação na Cruzeiro do sul, venho buscando oportunidades para desenvolver minhas competências e fazer a diferença no âmbito que estou atuando.</Text1>
                    <Portfolio></Portfolio>
                </div>

                </ContentText>
            </ProfileContent>
        </Main>
    );
}