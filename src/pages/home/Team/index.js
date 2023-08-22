import React from 'react';
import {Main, ProfileContent} from './style'
import "./index.css"
import CustomTitle from 'components/CustomTitle';

export default function Team(){
    return(
        <Main>
            <ProfileContent>
                <p>oi</p>
                <CustomTitle 
                text={"Team"} 
                position={"true"}>
                </CustomTitle>
            </ProfileContent>
        </Main>
    );
}