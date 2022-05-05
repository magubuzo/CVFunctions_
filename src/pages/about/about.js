import React from 'react'
import { TextBg, Text, LinkTxt } from './about_comonents.js'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';


export const AboutScreen = () => {
  return (

      <TextBg>
    <div>
        <Text>Hello World! This is pvamu computr vision's webpge to host filters or anything else with compulter vision.

          <br></br>
          <br></br>
          <br></br>
          IF YOU ARE INTRESED IN HELPING (contrabutiong to this project) email   <a href='yowang@pvamu.edu'><LinkTxt>yowang@pvamu.edu</LinkTxt></a> <br></br>
          There are several computer vision filters currently on on this page <br></br> <br></br>
          1) A simple PV filter. (using Tensorflow JS React JS) <br></br> <br></br>
          2) A face mesh filter. (using Tensorflow JS and React JS) <br></br> <br></br>
          3) A Cartoonizer filter. (using Tensorflow JS and html/css, by Xinuri Wang and Jinze Yu at the University of Tokyo, modified by Pratap Vardhan)
        </Text>


    </div>
      </TextBg>
 
  )
}
