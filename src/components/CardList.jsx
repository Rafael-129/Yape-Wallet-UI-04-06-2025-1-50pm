import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CardList() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">¿Qué más tiene Yape?</h1>
      <Row className="justify-content-center mb-3">
        <Col sm={4} className="d-flex justify-content-center mb-4">
          <Card border="primary" style={{ width: '18rem' }} className="cursor-pointer">
            <Card.Body>
              <Card.Title>Sacar mi crédito</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="d-flex justify-content-center mb-4">
          <Card border="primary" style={{ width: '18rem' }} className="cursor-pointer">
            <Card.Body>
              <Card.Title>Yape Promos</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="d-flex justify-content-center mb-4">
          <Card border="primary" style={{ width: '18rem' }} className="cursor-pointer">
            <Card.Body>
              <Card.Title>Yape tus Servicios</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={4} className="d-flex justify-content-center mb-4">
          <Card border="primary" style={{ width: '18rem' }} className="cursor-pointer">
            <Card.Body>
              <Card.Title>Yape Recargas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="d-flex justify-content-center mb-4">
          <Card border="primary" style={{ width: '18rem' }} className="cursor-pointer">
            <Card.Body>
              <Card.Title>Yape Beneficios</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4} className="d-flex justify-content-center mb-4">
          <Card border="primary" style={{ width: '18rem' }} className="cursor-pointer">
            <Card.Body>
              <Card.Title>Yape para Negocios</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardList;