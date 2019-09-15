import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Header from '../../components/header/header.component';
import ScoreBoard from '../../components/scoreboard/scoreboard.component';
import Choices from '../../components/choices/choices.component';
import Rules from '../../components/rules/rules.component';
import DialogueBox from '../../components/dialogue/dialogue.component';
import './game.component.css';

class GamePage extends Component {
  render() {
    return (
      <>
        <Container>
          <Row className="row_margin">
            <Header
              title="Rock, Paper, Scissors, Spock, Lizard"
            />
          </Row>
          <Row className="row_margin">
            <Col>
              <DialogueBox />
            </Col>
            <Col >
              <ScoreBoard lg="auto" />
              <Rules />
            </Col>
          </Row>
          <Choices />
        </Container>
      </>
    )
  }
}

export default GamePage;
