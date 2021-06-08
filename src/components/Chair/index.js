import ButtonDefault from '../../fragments/ButtonDefault';
import './styles.scss';

const Chair = ({
  color, title, price, type,
}) => (
  <div className="cart">
    <div className="cart__header" style={{ backgroundColor: color }}>
      <h4 className="cart__header--h4">{title}</h4>
    </div>
    <div className="cart__description">
      <span>O plano inclui:</span>
      <ul className="cart__description--planList" style={{ borderColor: color }}>
        <li>
          <span style={{ background: color }} />
          Integer nisi metus
        </li>
        <li>
          <span style={{ background: color }} />
          Phasellus fermentum
        </li>
        <li>
          <span style={{ background: color }} />
          Morbi egestas
        </li>
        <li>
          <span style={{ background: color }} />
          Nulla eu orci odio
        </li>
        <li>
          <span style={{ background: color }} />
          Etiam ut ullamcorper
        </li>
        <li>
          <span style={{ background: color }} />
          Vestibulum
        </li>
      </ul>
    </div>
    <div className="cart__price">
      <strong>
        Preço por
        {' '}
        {type}
        :
      </strong>
      <h5 style={{ color }}>
        R$
        {' '}
        {price}
      </h5>
      <ButtonDefault text="Quero esse plano" color={color} />
    </div>
  </div>
);

export default Chair;
