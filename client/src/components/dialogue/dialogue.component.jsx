import React from 'react';
import { connect } from 'react-redux';
import './dialogue.component.css';
import Hal9000 from './hal9000.jpg';

const DialogueBox = ({
  tieGame
}) => {
  return (
    <div id="dialogue_box">
      <img id="dialogue_image" src={Hal9000} alt="dialogueImage"/>
      <p>Hello, player... Let's play a game.</p>
      { tieGame ? <p>Tie game, player. Go again.</p> : <p></p> }
    </div>
  )
}

const mapStateToProps = ({
  choice: {
    tieGame
  }
}) => ({
  tieGame
})

export default connect(
  mapStateToProps,
  null
)(DialogueBox);