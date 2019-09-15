import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Header = (props) => {
  return (
    <Container fluid>
      <Row id="header_row">
        <Col>
          <h1>{props.title}</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
