// import React from 'react';
// import {View} from 'react-native';
import { Text, Menu, Main, Icon} from "./style";
import AderaIcon from "~/imgs/AderaIcon.svg"

export default function NavBar() {
  return (
    <Main>
        <Icon src={AderaIcon}/>
        <Menu>
        <Text href="">Home</Text>
        <Text href="">About</Text>
        <Text href="">Team</Text>
        <Text href="">Services</Text>
        <Text href="">Contact</Text>
        </Menu>
    </Main>
  );
}
