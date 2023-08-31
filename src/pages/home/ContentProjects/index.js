import React from 'react';
import {GroupGrid, MainGroupGrid, Main} from './style'
import ItemGrid from './ItemGrid';
import CustomTitle from 'components/CustomTitle';
import "./index.css";

export default function ContentProjects(){
    return( 
        <Main>

        <CustomTitle text={"Projeto"} className={"titleProjects"}></CustomTitle>

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
        </Main>
    );
}