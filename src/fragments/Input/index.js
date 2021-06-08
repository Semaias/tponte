import './styles.scss';

const Input = ({ name, isTextArea = false }) => (
  <div className="inputForm">
    { isTextArea
      ? <textarea type="text" required id="email" rows={4} cols={15} />
      : <input type="text" required id="email" />}
    <label htmlFor="email">{name}</label>
  </div>
);

export default Input;
