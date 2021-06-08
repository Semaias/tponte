import { Container, Row, Col } from 'react-bootstrap';

import './styles.scss';

const BePartOfIt = () => (
  <Container>
    <Row>
      <Col sm={12} lg={12}>
        <div>
          <h3 className="title__h3">Faça parte</h3>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        <div className="BePartOfIt__simple__adjust">
          <Row>
            <Col sm={12} lg={6}>
              <div className="container__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in feugiat purus.
                  In hac habitasse platea dictumst.
                  Nunc ut congue nibh. Praesent orci diam, bibendum
                  id ante eu, mattis porttitor dolor.
                  Nam id mauris est. Donec ac dui vulputate odio finibus euismod quis ut urna.
                </p>
              </div>
            </Col>
            <Col sm={12} lg={6}>
              <div className="container__content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in feugiat purus.
                  In hac habitasse platea dictumst.
                  Nunc ut congue nibh. Praesent orci diam, bibendum
                  id ante eu, mattis porttitor dolor.
                  Nam id mauris est. Donec ac dui vulputate odio finibus euismod quis ut urna.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  </Container>
);

export default BePartOfIt;
