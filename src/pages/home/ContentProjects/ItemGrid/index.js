import React from 'react';
import { Content, Img } from './style';
import IconProject from "~/imgs/iconProject.jpg";

export default function ItemGrid(){
    return(
        <Content>
            <Img src={IconProject}/>
        </Content>
    );
}