import React from 'react';
import './dialogue.component.css';
import Hal9000 from './hal9000.jpg';

const DialogueBox = () => {
  return (
    <div id="dialogue_box">
      <img id="dialogue_image" src={Hal9000} alt="dialogueImage"/>
      <p>Hello, player... Let's play a game.</p>
    </div>
  )
}

export default DialogueBox;
