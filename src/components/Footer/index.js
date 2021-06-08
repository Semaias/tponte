import {
  Container, Row, Col, Carousel,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { BsArrowRight } from 'react-icons/bs';

import StartupsLogos from '../StartupsLogos';
import CardSustainability from '../cardSustainability';
import FooterForm from '../FooterForm';

import './styles.scss';

const Footer = () => (
  <Container fluid>
    <Row className="footerCard">
      <div className="footerCard__content">
        <Container>
          <Row>
            <Col sm={12}>
              <h2 className="footerCard__content--h2">Novidades? Acompanhe nosso blog</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </Row>
    <Row className="footerCardMobile d-sm-flex d-lg-none">
      <Container>
        <Row>
          <Carousel indicators={false} controls={false}>
            <Carousel.Item>
              <Col sm={12}>
                <CardSustainability />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col sm={12}>
                <CardSustainability />
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col sm={12}>
                <CardSustainability />
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </Row>
    <Row className="footerCardDesktop d-none d-lg-flex">
      <Container>
        <Row>
          <Col lg={4}>
            <CardSustainability />
          </Col>
          <Col lg={4}>
            <CardSustainability />
          </Col>
          <Col lg={4}>
            <CardSustainability />
          </Col>
        </Row>
      </Container>
    </Row>
    <Row>
      <Container>
        <Row>
          <Col sm={12} lg={12}>
            <div className="footerCard__containerButton">
              <Link to="/" className="footerCard__containerButton--buttonViewMore">
                Ver mais
                {' '}
                <BsArrowRight size={32} color="#121212" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Row>
    <Row>
      <StartupsLogos />
    </Row>
    <Row className="containerFooterForm">
      <FooterForm />
    </Row>
  </Container>
);

export default Footer;
