import './styles.scss';

const ButtonDefault = ({ text, color }) => (
  <button type="button" className="buttonDefault" style={{ borderColor: color, color }}>
    {text}
  </button>
);

export default ButtonDefault;
