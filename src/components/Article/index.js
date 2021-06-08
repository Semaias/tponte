import { Container, Row, Col } from 'react-bootstrap';
import Category from '../../fragments/Category';

import Article from '../../assets/img/article.png';

import './styles.scss';

const ArticleComponent = () => (
  <Container className="Article">
    <Row>
      <Col lg={12}>
        <h1 className="Article__title">
          Oportunidade para startups desenvolverem tecnologia para o agro
        </h1>
        <div className="Article__data">
          <Category text="Sustentabilidade" backgroundColor="#77B926" />
          <span>18/04/2021 - Autor: Raquel Noronha</span>
        </div>
      </Col>
      <Col lg={12}>
        <div className="Article__content">
          <img src={Article} alt="Imagem do artigo" loading="lazy" className="Article__content--image" />
          <div className="Article__content--text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, optio hic?
              Quibusdam eum corporis doloremque
              adipisci, numquam id quia aperiam nemo,
              placeat molestias animi impedit?
              Facere aperiam ut nesciunt laborum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, optio hic?
              Quibusdam eum corporis doloremque
              adipisci, numquam id quia aperiam nemo,
              placeat molestias animi impedit?
              Facere aperiam ut nesciunt laborum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, optio hic?
              Quibusdam eum corporis doloremque
              adipisci, numquam id quia aperiam nemo,
              placeat molestias animi impedit?
              Facere aperiam ut nesciunt laborum?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, optio hic?
              Quibusdam eum corporis doloremque
              adipisci, numquam id quia aperiam nemo,
              placeat molestias animi impedit?
              Facere aperiam ut nesciunt laborum?
            </p>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ArticleComponent;
