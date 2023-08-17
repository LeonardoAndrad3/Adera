import React from 'react';
// import {View} from 'react-native';
import {Text, Icon, Main} from './style'
import LinkedinIcon from "~/imgs/LinkedinIcon.svg"

export default function Footer(){
    return(
      <Main>
        <Text>
            © 2023 GitHub, Inc. Terms Privacy (Updated 08/2022) Sitemap
        </Text>
        <Icon src={LinkedinIcon}/>
      </Main>
    );
}