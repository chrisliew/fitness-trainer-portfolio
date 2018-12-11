import React from "react";
import { Jumbotron, Container, Button, NavLink } from "reactstrap";

const HeroImage = props => {
  return (
    <div>
      <Jumbotron id="hero-image" fluid>
        <Container className="container" fluid>
          <h1>Helping Fitness Trainers Land More Clients</h1>
        </Container>
      </Jumbotron>
    </div>
  );
};

const Home = props => {
  return (
    <div>
      <HeroImage />
    </div>
  );
};

export default Home;
