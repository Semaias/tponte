import { Container, Row, Col } from 'react-bootstrap';

import Chair from '../Chair';

import './styles.scss';

const KnowPlans = () => (
  <Container>
    <Row className="KnowPlans__line">
      <Col lg={12} className="KnowPlans">
        <h3 className="KnowPlans__h3">Conheça nossos planos</h3>
      </Col>
      <Col lg={4}>
        <Chair color="#77B926" title="Cadeira" price="40,00" type="hora" />
      </Col>
      <Col lg={4}>
        <Chair color="#1EA1B7" title="Cadeira" price="180,00" type="diária" />
      </Col>
      <Col lg={4}>
        <Chair color="#EF7C32" title="Cadeira" price="1040,00" type="mês" />
      </Col>
      <Col lg={4}>
        <Chair color="#8D19F7" title="Sala com 4 cadeiras" price="2990,00" type="hora" />
      </Col>
      <Col lg={4}>
        <Chair color="#A0045E" title="Sala com 8 cadeiras" price="5490,00" type="hora" />
      </Col>
      <Col lg={4}>
        <Chair color="#2E34DB" title="Sala com 12 cadeiras" price="40,00" type="hora" />
      </Col>
    </Row>
  </Container>
);

export default KnowPlans;
