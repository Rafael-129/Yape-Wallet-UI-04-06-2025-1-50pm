import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaTiktok, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaBriefcase, FaBookOpen, FaCog } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ background: '#82239b', color: '#fff', padding: '2rem 0' }}>
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={3} className="mb-3 mb-md-0 text-center text-md-start">
            <img
              src="https://seeklogo.com/images/Y/yape-logo-6A4B9D6C5D-seeklogo.com.png"
              alt="Yape"
              width={60}
              style={{ background: '#fff', borderRadius: '50%', marginBottom: 8 }}
            />
            <div>Síguenos en:</div>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start mt-2">
              <a href="#" style={{ color: '#fff' }}><FaInstagram size={24} /></a>
              <a href="#" style={{ color: '#fff' }}><FaTiktok size={24} /></a>
              <a href="#" style={{ color: '#fff' }}><FaFacebookF size={24} /></a>
              <a href="#" style={{ color: '#fff' }}><FaLinkedinIn size={24} /></a>
              <a href="#" style={{ color: '#fff' }}><FaYoutube size={24} /></a>
            </div>
            <div className="mt-3" style={{ fontSize: 14 }}>Yape © 2025. Todos los derechos reservados</div>
          </Col>
          <Col md={3} className="mb-3 mb-md-0">
            <div style={{ fontSize: 14 }}>
              <div>Términos y Condiciones</div>
              <div>Política de privacidad y Datos personales</div>
              <div>Política de Cookies</div>
              <div>Consentimiento para el uso de cookies</div>
            </div>
          </Col>
          <Col md={3} className="mb-3 mb-md-0 text-center">
            <img
              src="https://www.indecopi.gob.pe/documents/20182/0/libro_reclamaciones.png"
              alt="Libro de Reclamaciones"
              width={90}
              style={{ background: '#fff', borderRadius: 8 }}
            />
            <div style={{ fontSize: 13, marginTop: 8 }}>Libro de Reclamaciones</div>
          </Col>
          <Col md={3} className="text-center text-md-end">
            <Button variant="light" className="mb-2 w-100 d-flex align-items-center justify-content-center" style={{ background: '#a259c6', border: 'none', color: '#fff' }}>
              <FaWhatsapp className="me-2" /> Escríbenos por WhatsApp
            </Button>
            <Button variant="light" className="w-100 d-flex align-items-center justify-content-center" style={{ background: '#a259c6', border: 'none', color: '#fff' }}>
              <FaBriefcase className="me-2" /> Trabaja con nosotros
            </Button>
          </Col>
        </Row>
        <hr style={{ borderColor: '#a259c6' }} />
        <Row className="align-items-center">
          <Col md={8} style={{ fontSize: 13 }}>
            BANCO DE CRÉDITO DEL PERÚ - RUC: 20100047218
          </Col>
          <Col md={4} className="text-center text-md-end">
            <FaCog className="me-2" /> Configurar cookies
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;