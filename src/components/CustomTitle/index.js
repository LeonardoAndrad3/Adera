import React from 'react';
import { Title, TitleProjetct, ContentTitle } from './style';

export default function CustomTitle(props){
    return(
        <TitleProjetct 
        position={props.position} 
        rotate={props.rotate}>

            <ContentTitle>
                <Title>
                    {props.text}
                </Title>
            </ContentTitle>
        </TitleProjetct>
    );
}