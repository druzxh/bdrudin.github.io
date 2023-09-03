import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container>
      <Row>
        <Col>
          <Card >
            <h1 className='text-center'>About</h1>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default About;