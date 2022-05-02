import styled from 'styled-components'
import React, { Component } from 'react'

export const TextBg = styled.text`
    background-color: #000;
    align-items: center;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;
    height: max-content;
    width: inherit;
    display: flex;
    z-index: 999;
`;

export const Text = styled.text`
    color: white;
    font-size: 20;
    font-weight: 500;
`;

export const TextMain = styled.text`
    color: purple;
    font-size: 35;
    font-weight: 700;
    
`

export const VideoSpace = styled.div`
    height: 400px;
    width: 400px; 
    margin-top: 25px;
    margin-bottom: 25px;
    margin-left: 50px;
    margin-right: 50px;
`

export default class PlayerExample extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
        inputVideoUrl: 'http://www.w3schools.com/html/mov_bbb.mp4'
      };
  
      this.handleValueChange = this.handleValueChange.bind(this);
      this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (this.state.playerSource !== prevState.playerSource) {
        this.player.load();
      }
    }
  
    handleValueChange(e) {
      const { value } = e.target;
      this.setState({
        inputVideoUrl: value
      });
    }
  
    updatePlayerInfo() {
      const { inputVideoUrl } = this.state;
      this.setState({
        playerSource: inputVideoUrl
      });
    }
}
export const Spacer = styled.div`
    height: 50;
    width: 50;
`

