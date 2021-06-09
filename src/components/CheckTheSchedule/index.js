import {
  Container, Row, Col, Carousel,
} from 'react-bootstrap';

import Event from '../../assets/img/event.png';

import './styles.scss';

const CheckTheSchedule = () => (
  <Container>
    <Row>
      <Col sm={12} lg={6} className="CheckTheSchedule">
        <div className="CheckTheSchedule__title" id="CheckTheSchedule">
          <h3 className="CheckTheSchedule__title--h3">Confira a agenda de eventos</h3>
        </div>
      </Col>
      <Col sm={12} lg={6} className="CarouselEvent">
        <Carousel controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Event}
              alt="First slide"
            />
            <Carousel.Caption>
              <span>
                10 MAI - 19H00
              </span>
              <h3>4º encontro de gestores da inovação</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Event}
              alt="Second slide"
            />

            <Carousel.Caption>
              <span>
                10 MAI - 19H00
              </span>
              <h3>Second slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Event}
              alt="Third slide"
            />

            <Carousel.Caption>
              <span>
                10 MAI - 19H00
              </span>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default CheckTheSchedule;
