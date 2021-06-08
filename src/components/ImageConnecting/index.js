import './styles.scss';

const ImageConnecting = ({ text, image }) => (
  <div className="imageConnecting" style={{ background: `url(${image})` }}>
    <div className="bgImageConnecting">
      <span className="imageConnecting__text">
        {text}
      </span>
    </div>
  </div>
);

export default ImageConnecting;
