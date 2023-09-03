import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
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
      <Row className='p-2'>
        <Col className='' lg={12}>
          <p className='small-heading text-first mt-5'>Hii Developers, <span className='text-second'>my name is</span></p>
          <h3 className='big-heading text-first'>Badrudin.</h3>
        </Col>
        <Col className='' lg={12}>
          <h3 className='big-heading text-first'>I build things for the web.</h3>
        </Col>
        <Col className='mt-4' lg={12}>
          <p className='small-heading text-first'>"I am a web developer with expertise in full-stack development. As a full-stack developer, I specialize in creating design systems and user interfaces, known as 'frontend' development, to enhance the client-side experience. Additionally, I handle backend development, ensuring server-side functionality runs seamlessly."</p>
        </Col>
      </Row>

      <Row className=''>
        <Col className='' lg={6}>
          <Button size="lg" href="https://www.instagram.com/bd.ruu/" variant="secondary"><i class="fa-brands fa-instagram"></i> Instagram</Button>{' '}
          <Button size="lg" href="https://www.linkedin.com/in/badrudin-42a598246/" variant="secondary"><i class="fa-brands fa-linkedin"></i> LinkedIn</Button>{' '}
          <Button size="lg" href='https://github.com/druzxh' target="_blank" variant="secondary"><i className="fa-brands fa-github"></i> Github</Button>{' '}
          <Button size="lg" href="/Badrudin_Resume.pdf" target="_blank" variant="secondary"><i className="fa-regular fa-file"></i> Resume</Button>{' '}
        </Col>
      </Row>

      <Row >
        <Col className="col-12 text-center mt-4">
          <h1 className="display-4 text-warning fw-bold">COMING SOON !</h1>
          <p className="lead text-white small-heading">Get ready for something amazing!</p>
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
