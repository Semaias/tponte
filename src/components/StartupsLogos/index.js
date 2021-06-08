import { Container, Row, Col } from 'react-bootstrap';

import UpChile from '../../assets/img/upchile.png';
import Start from '../../assets/img/start.png';
import trashin from '../../assets/img/trashin.png';
import alana from '../../assets/img/alana.png';

import './styles.scss';

const StartupsLogos = () => (
  <Container>
    <Row className="contentLogos">
      <Col sm={6} lg={3} className="d-flex justify-content-center">
        <img className="img-responsive" style={{ width: '255px' }} src={UpChile} alt="Logo da START-UPCHILE" loading="lazy" />
      </Col>
      <Col sm={6} lg={3} className="d-flex justify-content-center">
        <img className="img-responsive" style={{ width: '190px' }} src={alana} alt="Logo da alana" loading="lazy" />
      </Col>
      <Col sm={6} lg={3} className="d-flex justify-content-center">
        <img className="img-responsive" style={{ width: '237px' }} src={Start} alt="Logo da StartSoitic" loading="lazy" />
      </Col>
      <Col sm={6} lg={3} className="d-flex justify-content-center">
        <img className="img-responsive" style={{ width: '201px' }} src={trashin} alt="Logo da trashin" loading="lazy" />
      </Col>
    </Row>
  </Container>
);

export default StartupsLogos;
