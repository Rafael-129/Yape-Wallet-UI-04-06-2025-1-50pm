import Card from 'react-bootstrap/Card';

function CardList() {
  return (
    <>
    <h1>¿Que mas tiene Yape?</h1>
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Sacar mi credito</Card.Title>
        </Card.Body>
      </Card>
      <br />

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body >
          <Card.Title >Yape Promos</Card.Title>
        </Card.Body>
      </Card>
      <br />

      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Yape tus Servicios</Card.Title>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default CardList;