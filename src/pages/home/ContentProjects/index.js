import React from 'react';
import {TitleProjetct, ContentTitle, Title, GroupGrid, MainGroupGrid} from './style'
import ItemGrid from './ItemGrid';

export default function ContentProjects(){
    return( 
        <>
        <TitleProjetct>
            <ContentTitle>
                <Title>Projetos</Title>
            </ContentTitle>
        </TitleProjetct>
  

        <MainGroupGrid>
            <GroupGrid>
                <ItemGrid/>
                <ItemGrid/>
                <ItemGrid/>
                <ItemGrid/>
                <ItemGrid/>
                <ItemGrid/>
                <ItemGrid/>
                <ItemGrid/>
            </GroupGrid>
        </MainGroupGrid>
        </>
    );
}