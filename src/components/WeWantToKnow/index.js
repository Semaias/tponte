import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import Logo from '../../assets/img/logo.png';

import './styles.scss';

const WeWantToKnow = () => (
  <>
    <Container>
      <Row>
        <Col lg={12}>
          <img src={Logo} loading="lazy" className="logoMosaico" alt="Logo do Tbridge.co" />
        </Col>
      </Row>
    </Container>
    <div className="WeWantToKnow">
      <Container>
        <Row>
          <Col lg={9}>
            <div className="WeWantToKnow__content">
              <h3 className="WeWantToKnow__content--title">
                Queremos conhecer sua STARTUP
              </h3>
              <p className="WeWantToKnow__content--description">
                Somos um ecossistemas de inovação facilita o network desenvolvimento.
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="WeWantToKnow__button">
              <Link to="/s" className="WeWantToKnow__button--link">
                Saiba mais
                <BsArrowRight size={32} color="#FFFFFF" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>
);

export default WeWantToKnow;
