import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Cards from "./Cards";

import "./App.css";

const Title = () => {
  return (
    <Container className="titleContainer">Guilherme Deon de Faria</Container>
  );
};

const App = () => (
  <Container>
    <Title></Title>
    <Cards />
  </Container>
);

export default App;
