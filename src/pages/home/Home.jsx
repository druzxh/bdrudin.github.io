import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  const [typedText, setTypedText] = useState(['Creative', 'Responsive', 'Interactive', 'Engaging', 'Professional', 'Updated']);
  useEffect(() => {
    const options = {
      strings: typedText,
      typeSpeed: 40,
      loop: true,
    };

    const typed = new Typed('.card-typing', options);
    return () => {
      typed.destroy();
    };
  }, [typedText]);

  return (
    <Container>
      <Row >
        <Col className="col-12 text-center my-2">
          <h1 className="display-4 text-warning">COMING SOON</h1>
          <p className="lead text-white">Get ready for something amazing!</p>
          <div className='align-items-center card-text'>
            <h5 className='text-warning'>"Introducing New Design"</h5> <span className="text-white fw-bold card-text card-typing" />
          </div>
        </Col>
      </Row>
      <Row >
        <Col className="col-12 col-md-6 mx-auto">
          <Card className="card bg-dark">
            <img src="/comingsoon.jpg" className="card-img" alt="COMING SOON" />
            <div className="card-img-overlay d-flex align-items-center">
              <div className="w-100">
              </div>
            </div>
          </Card>
          <p className="card-text text-dark text-center fw-bold text-white">Stay tuned for more information.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
