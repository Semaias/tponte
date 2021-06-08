import { Container, Row, Col } from 'react-bootstrap';

import './styles.scss';

const FormBuy = () => (
  <form className="FormBuy">
    <Container>
      <Row>
        <Col sm={12} lg={12}>
          <h3 className="FormBuy__title">
            Fale sobre sua startup
          </h3>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={6}>
          <div className="FormBuy__containerInput">
            <label className="FormBuy__containerInput--label">Informe seu nome</label>
            <input type="text" className="FormBuy__containerInput--input" />
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className="FormBuy__containerInput">
            <label htmlFor="startup" className="FormBuy__containerInput--label">Informe da sua startup</label>
            <input type="text" className="FormBuy__containerInput--input" />
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className="FormBuy__containerInput">
            <label htmlFor="startup" className="FormBuy__containerInput--label">Informe seu e-mail</label>
            <input type="text" id="startup" className="FormBuy__containerInput--input" />
          </div>
        </Col>
        <Col sm={12} lg={6}>
          <div className="FormBuy__containerInput">
            <label htmlFor="startup" className="FormBuy__containerInput--label">Informe seu telefone</label>
            <input type="text" className="FormBuy__containerInput--input" />
          </div>
        </Col>
        <Col sm={12} lg={12}>
          <div className="FormBuy__containerInput">
            <label htmlFor="startup" className="FormBuy__containerInput--label">Fale um pouco sobre sua startup</label>
            <textarea type="text" className="FormBuy__containerInput--input" rows="5" />
          </div>
        </Col>
      </Row>
    </Container>
  </form>
);

export default FormBuy;
