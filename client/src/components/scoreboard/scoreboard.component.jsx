import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './scoreboard.component.css';

const ScoreBoard = ({
  playerScore,
  computerScore
}) => {
  return (
    <Container fluid>
      <Card id="scoreBoard">
        <Card.Body>
          <Card.Header>Score Board</Card.Header>
          <br />
          <Card.Text>
            Player:
            {playerScore}
            <br />
            Computer:
            {computerScore}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

const mapStateToProps = ({
  choice: {
    playerScore,
    computerScore
  }
}) => ({
  playerScore,
  computerScore
})

export default connect(mapStateToProps, null)(ScoreBoard);
