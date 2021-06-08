import { Link } from 'react-router-dom';
import './styles.scss';

const Button = ({ title, link, className }) => (
  <Link to={link} className={`button__nav ${className}`}>{title}</Link>
);

export default Button;
