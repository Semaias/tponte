import { Container, Row, Col } from 'react-bootstrap';

import { BsArrowRight } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import './styles.scss';

const Banner = () => (
  <div className="bgBanner">
    <Container className="h-100 d-flex align-items-center">
      <Row>
        <Col sm={12}>
          <div className="banner">
            <h1>
              <span className="banner__h1">
                Somos uma ponte
                <br />
                para
              </span>
              <span className="banner__span">inovação</span>
            </h1>
            <Link to="/facaparte" className="banner__AboutMore">
              Saiba mais
              <BsArrowRight size={32} color="#FFFFFF" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Banner;
