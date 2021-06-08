import './styles.scss';

const Category = ({ text, backgroundColor }) => (
  <h4 className="cardSustainability__h4" style={{ background: backgroundColor }}>
    {text}
  </h4>
);

export default Category;
