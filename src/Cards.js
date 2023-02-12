import React, { useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem, NavLink} from 'react-bootstrap';
import { Link } from 'react';
import Container from 'react-bootstrap/Container';

import './Cards.css';

const CardsContainer = () => (
    <Container className="h-100 d-flex align-items-center justify-content-center" id="cardsContainer">
        <ListGroup className="list-group list-group-horizontal">
            <ListGroupItem>
                <Card>
                    <Card.Title>Projeto Livro</Card.Title>
                    <Card.Body>Projeto de sistema em Java para cadastro e consulta de Livros utilizando banco de dados SQL.</Card.Body>
                    <Button href="https://github.com/guilhermedeon/ProjetoLivro">GitHub</Button>
                </Card>
            </ListGroupItem>
            <ListGroupItem>
                <Card>
                    <Card.Title>Website</Card.Title>
                    <Card.Body>Código fonte desta página no Github</Card.Body>
                    <Button href="https://github.com/guilhermedeon/guilhermedeon.github.io">GitHub</Button>
                </Card>
            </ListGroupItem>
            <ListGroupItem>
                <Card>
                    <Card.Title>Website - React-bootstrap</Card.Title>
                    <Card.Body>Código fonte para esta página utilizando React, no Github</Card.Body>
                    <Button href="https://github.com/guilhermedeon/react-guilherme">GitHub</Button>
                </Card>
            </ListGroupItem>
        </ListGroup>
    </Container>
  ); 


  export default CardsContainer