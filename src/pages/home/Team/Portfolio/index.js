import React from 'react';
import {Div, Icon, Line} from './style'
import react from "./iconTec/image 12.png";
import java from "./iconTec/java.png";
import js from "./iconTec/js.png"
import git from "./iconTec/git.png"
import linkedin from "./iconTec/linkedin.png"
import mongoDb from "./iconTec/mongoDb.svg"

export default function Portfolio(){
    return(
        <Div>
            <Icon src={react}></Icon>
            <Icon src={java}></Icon>
            <Icon src={js}></Icon>
            <Icon src={mongoDb}></Icon>

            <Line/>

            <Icon src={git}></Icon>
            <Icon src={linkedin}></Icon>

        </Div>
    );
}