import React from "react";
import { Container, Jumbotron, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import bgimage from "../Assets/Pizza.jpg";

export default function Home() {
  return (
    <>
      <Jumbotron
        fluid
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
        className='pt-5'
      >
        <Container className='pt-5'>
          <Row className='pt-5'>
            <Col>
              <h1 className='text-black text-center font-weight-bold'>
                Your favorite food delivered while coding
              </h1>
            </Col>
          </Row>
          <Row>
            <Col
              className='pt-5 pb-5'
              sm={{ size: "auto", offset: 5 }}
              md={{ size: "auto", offset: 5 }}
            >
              <Link to='/pizza'>
                <Button color='primary'>Order Pizza</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}
