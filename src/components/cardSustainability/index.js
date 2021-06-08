import Category from '../../fragments/Category';
import './styles.scss';

const CardSustainability = () => (
  <div className="cardSustainability">
    <Category
      backgroundColor="#A0045E"
      text="Sustentabilidade"
    />
    <h3 className="cardSustainability__h3">Oportunidade para startups desenvolverem tecnologia para o agro</h3>
    <p className="cardSustainability__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nam in bibendum felis. Pellentesque nec nisl sed odio gravida fermentum...
    </p>
  </div>
);

export default CardSustainability;
