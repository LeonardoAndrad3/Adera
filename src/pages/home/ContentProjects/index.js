import React from 'react';
import {GroupGrid, MainGroupGrid} from './style'
import ItemGrid from './ItemGrid';
import CustomTitle from 'components/CustomTitle';

export default function ContentProjects(){
    return( 
        <>

        <CustomTitle text={"Projeto"}></CustomTitle>

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