import './styles.css';
import first from '../ImageFiles/1.jpg';

export const FloatsAndPositioning = () => {
  return (
    <div>
      <img src={first} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda quia
        inventore cum alias. Dolorum, aut labore ipsam dicta odio magni nisi
        enim laboriosam reiciendis consequatur vitae blanditiis veritatis saepe
        perferendis!
      </p>
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </div>
  );
};
