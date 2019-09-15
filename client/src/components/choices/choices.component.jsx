import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import { playerChoiceRock } from '../../redux/choices/choice.action';
import './choices.component.css';
import Rock from './rock.png';

const Choices = ({ playerChoiceRock }) => {
  return (
    <Container fluid className="d-inline-flex">
      <Button onClick={playerChoiceRock} className="m-1" variant="secondary">
        <img className="choices_image" alt="rock" src={Rock} />
        <p>Rock</p>
      </Button>
      {/* <Button onClick={choosePaper} className="m-1" variant="secondary">
        <img className="choices_image" alt="paper" src={Paper} />
        <p>Paper</p>
      </Button>
      <Button onClick={chooseScissors} className="m-1" variant="secondary">
        <img className="choices_image" alt="scissors" src={Scissors} />
        <p>Scissors</p>
      </Button>
      <Button onClick={chooseSpock} className="m-1" variant="secondary">
        <img className="choices_image" alt="spock" src={Spock} />
        <p>Spock</p>
      </Button>
      <Button onClick={chooseLizard} className="m-1" variant="secondary">
        <img className="choices_image" alt="lizard" src={Lizard} />
        <p>Lizard</p>
      </Button> */}
    </Container>
  );
};

// const mapDispatchToProps = dispatch => ({
//   chooseRock: () => dispatch(playerChoiceRock()),
//   choosePaper: () => dispatch(playerChoicePaper()),
//   chooseScissors: () => dispatch(playerChoiceScissors()),
//   chooseSpock: () => dispatch(playerChoiceSpock()),
//   chooseLizard: () => dispatch(playerChoiceLizard())
// })

export default connect(
  null,
  { playerChoiceRock }
)(Choices);
