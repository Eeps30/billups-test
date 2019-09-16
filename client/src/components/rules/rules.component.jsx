import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Container from 'react-bootstrap/Container';
import RulesDiagram from './rules.of.the.game.png';
import './rules.component.css';

const Rules = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container fluid id="margin_top">
        <Button
          id="rules_button"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Rules of the Game
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text" className="rules_background position-absolute">
            <img id="rules_image" src={RulesDiagram} alt="rules diagram" />
            <ul id="rules_bullets">
              <li>Scissors cuts Paper</li>
              <li>Paper covers Rock</li>
              <li>Rock crushes Lizard</li>
              <li>Lizard poisions Spock</li>
              <li>Spock smashes Scissors</li>
              <li>Scissors decapitates Lizard</li>
              <li>Lizard eats Paper</li>
              <li>Paper disproves Spock</li>
              <li>Spock vaporizes Rock</li>
              <li>Rock crushes Scissors</li>
            </ul>
          </div>
        </Collapse>
      </Container>
    </>
  );
};

export default Rules;
