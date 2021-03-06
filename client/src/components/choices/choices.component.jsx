import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Rock from './rock.png';
import Paper from './paper.png';
import Scissors from './scissors.png';
import Spock from './spock.png';
import Lizard from './lizard.png'
import './choices.component.css';
import {
  playerChoiceRock,
  playerChoicePaper,
  playerChoiceScissors,
  playerChoiceSpock,
  playerChoiceLizard,
  apiChoice
} from '../../redux/choices/choice.action';

const Choices = ({
  playerChoiceRock,
  playerChoicePaper,
  playerChoiceScissors,
  playerChoiceSpock,
  playerChoiceLizard,
  apiChoice
}) => {
  return (
    <Container fluid className="d-inline-flex">
      <Button onClick={playerChoiceRock} className="m-1" variant="secondary">
        <img className="choices_image" alt="rock" src={Rock} />
        <p>Rock</p>
      </Button>
      <Button onClick={playerChoicePaper} className="m-1" variant="secondary">
        <img className="choices_image" alt="paper" src={Paper} />
        <p>Paper</p>
      </Button>
      <Button onClick={playerChoiceScissors} className="m-1" variant="secondary">
        <img className="choices_image" alt="scissors" src={Scissors} />
        <p>Scissors</p>
      </Button>
      <Button onClick={playerChoiceSpock} className="m-1" variant="secondary">
        <img className="choices_image" alt="spock" src={Spock} />
        <p>Spock</p>
      </Button>
      <Button onClick={playerChoiceLizard} className="m-1" variant="secondary">
        <img className="choices_image" alt="lizard" src={Lizard} />
        <p>Lizard</p>
      </Button>
      <Button onClick={apiChoice} variant="info" className="m-1">
        Random Choice
        </Button>
    </Container>
  );
};

export default connect(
  null,
  {
    playerChoiceRock,
    playerChoicePaper,
    playerChoiceScissors,
    playerChoiceSpock,
    playerChoiceLizard,
    apiChoice
  }
)(Choices);
