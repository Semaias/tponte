import { Container, Row, Col } from 'react-bootstrap';

import ImageConnecting from '../ImageConnecting';

import SalaStartups from '../../assets/img/image_04.png';

import './styles.scss';

const ConnectingPeople = () => (
  <Container>
    <Row className="containerConnectingPeople">
      <Col lg={5} sm={12}>
        <h3 className="containerConnectingPeople__h3">
          Conectando empresas
          <br className="d-none d-lg-block" />
          {' '}
          e pessoas
        </h3>
      </Col>
      <Col lg={7} sm={12}>
        <p className="containerConnectingPeople__p">
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Aenean at lectus magna.
          Integer gravida est diam,
          et cursus magna iaculis at.
          Etiam ornare molestie odio,
          non sagittis lorem convallis a. Vivamus lacus libero,
          commodo ullamcorper nunc et,
          commodo varius diam. Donec rutrum,
          sem vel vulputate efficitur,
          mauris est dapibus erat,
          quis aliquet tellus massa vitae nisl.
        </p>
      </Col>
    </Row>
    <Row className="imagesMobile d-lg-none d-flex">
      <Col className="imagesMobile__image">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
      <Col className="imagesMobile__image">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
      <Col className="imagesMobile__image">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
    </Row>
    <Row className="d-none d-lg-flex">
      <Col lg={6} className="imagesDesktop__image--first">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
      <Col lg={3} className="imagesDesktop__image--second">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
      <Col lg={3} className="imagesDesktop__image">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
    </Row>
    <Row className="d-none d-lg-flex imagesDesktop">
      <Col lg={3} className="imagesDesktop__image--first">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
      <Col lg={3} className="imagesDesktop__image--second">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
      <Col lg={6} className="imagesDesktop__image">
        <ImageConnecting text="Salas para startups" image={SalaStartups} />
      </Col>
    </Row>
  </Container>
);

export default ConnectingPeople;
