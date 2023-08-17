import React from "react";
// import {View} from 'react-native';
import { Back, TitleContent, H1, H3, Span} from "./style";

export default function Home() {
  return (
    <>
      <Back/>
      <TitleContent>
        <H1> Adéra </H1>
        <H3>
            Empowering the <Span>Future</Span>: Unleashing Innovation through Cutting-Edge 
            <Span> Technology Solutions</Span>
        </H3>
      </TitleContent>
    </>
  );
}
