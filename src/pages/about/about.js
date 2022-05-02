import React from 'react'
import { TextBg, Text, VideoSpace, PlayerExample } from './about_comonents.js'
import HowTo from "../../Videos/SnapTutorial.mkv"
import { Player } from 'video-react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export const AboutScreen = () => {
  const videoSrc = HowTo
  const psoter = "https://images.unsplash.com/photo-1531161339673-a943dd10e29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25hcGNoYXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  return (

    <div>
      <TextBg>
        <Text>Hello World! This is a summery on how different fnctions were made on this webpage
        So lets learn about how the filters are made anddd how you can make your own
        Before We get started it is best you understand the basics of react js as I will try
        To explain the step by step however there will be things that I may bursh over
        simply because this is a tutorial on the AR Filters not react JS. I also may not use the most conventional
        practices since react is not a language I use often.
        </Text>


      </TextBg>
    </div>
 
  )
}
