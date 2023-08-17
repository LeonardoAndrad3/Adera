import React from 'react';
import { useState } from 'react';
// import {View} from 'react-native';
import {ButtonS, Text} from './style';

export default function Button(props){

    return(
        <ButtonS onClick={props.onClick} id={props.id}>
            <Text>Click my {props.count}</Text>
        </ButtonS>
    );

}