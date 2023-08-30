import './styles.css';
import first from './1.jpg';
import second from './3.png';
import third from './4.svg';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={first} alt="droga" />
      <img src={second} alt="gory" />
      <img src={third} alt="gory" />
    </div>
  );
};
