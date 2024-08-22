// src/App.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';
import Image from './components/image';
import './App.css'; // Import fichier CSS

const App = () => {
  const firstName = "Mohamed";

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card className="product-card">
        <Card.Body className="text-center">
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="greeting-container">
        {firstName ? (
          <>
            <p>Bonjour, {firstName} !</p>
            <img className="greeting-image" src="/hello.svg" alt="Greeting" />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </Container>
  );
};

export default App;