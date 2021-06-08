import { Container, Row, Col } from 'react-bootstrap';

import Category from '../../fragments/Category';

import './styles.scss';

const OurBlogComponent = () => (
  <div className="OurBlog">
    <Container>
      <Row>
        <Col sm={12} lg={12}>
          <h1 className="OurBlog__title">Nosso Blog</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={12}>
          <div className="OurBlog__post">
            <Category text="Sustentabilidade" backgroundColor="#77B926" />
            <h2 className="OurBlog__post--title">Oportunidade para startups desenvolverem tecnologia para o agro</h2>
            <p className="OurBlog__post--description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nam in bibendum felis. Pellentesque nec
              nisl sed odio gravida fermentum...
            </p>
          </div>
        </Col>
        <Col sm={12} lg={12}>
          <div className="OurBlog__post">
            <Category text="Sustentabilidade" backgroundColor="#77B926" />
            <h2 className="OurBlog__post--title">Oportunidade para startups desenvolverem tecnologia para o agro</h2>
            <p className="OurBlog__post--description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nam in bibendum felis. Pellentesque nec
              nisl sed odio gravida fermentum...
            </p>
          </div>
        </Col>
        <Col sm={12} lg={12}>
          <div className="OurBlog__post">
            <Category text="Sustentabilidade" backgroundColor="#77B926" />
            <h2 className="OurBlog__post--title">Oportunidade para startups desenvolverem tecnologia para o agro</h2>
            <p className="OurBlog__post--description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nam in bibendum felis. Pellentesque nec
              nisl sed odio gravida fermentum...
            </p>
          </div>
        </Col>
        <Col sm={12} lg={12}>
          <div className="OurBlog__post">
            <Category text="Sustentabilidade" backgroundColor="#77B926" />
            <h2 className="OurBlog__post--title">Oportunidade para startups desenvolverem tecnologia para o agro</h2>
            <p className="OurBlog__post--description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nam in bibendum felis. Pellentesque nec
              nisl sed odio gravida fermentum...
            </p>
          </div>
        </Col>
        <Col sm={12} lg={12}>
          <div className="OurBlog__post">
            <Category text="Sustentabilidade" backgroundColor="#77B926" />
            <h2 className="OurBlog__post--title">Oportunidade para startups desenvolverem tecnologia para o agro</h2>
            <p className="OurBlog__post--description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nam in bibendum felis. Pellentesque nec
              nisl sed odio gravida fermentum...
            </p>
          </div>
        </Col>
        <Col sm={12} lg={12}>
          <div className="OurBlog__post">
            <Category text="Sustentabilidade" backgroundColor="#77B926" />
            <h2 className="OurBlog__post--title">Oportunidade para startups desenvolverem tecnologia para o agro</h2>
            <p className="OurBlog__post--description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nam in bibendum felis. Pellentesque nec
              nisl sed odio gravida fermentum...
            </p>
          </div>
        </Col>
        <Col sm={12} lg={12}>
          <div className="OurBlog__post">
            <Category text="Sustentabilidade" backgroundColor="#77B926" />
            <h2 className="OurBlog__post--title">Oportunidade para startups desenvolverem tecnologia para o agro</h2>
            <p className="OurBlog__post--description">
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
              Nam in bibendum felis. Pellentesque nec
              nisl sed odio gravida fermentum...
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default OurBlogComponent;
