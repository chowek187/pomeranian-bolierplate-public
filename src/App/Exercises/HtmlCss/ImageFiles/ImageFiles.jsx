import './styles.css';

import logoPomeranian from './pomeranian-icon.png';
import zdjecie from './zdjecie.png';
import { RoundImage } from '../../../Components/RoundImage/RoundImage';

export const ImageFiles = () => {
  return (
    <div className="images">
      <img src={logoPomeranian} alt="Pomeranian" />
      <img src={zdjecie} alt="Zdjecie" />
      <RoundImage src={zdjecie} size={`100px`} />
      <RoundImage src={logoPomeranian} size={`500px`} />
    </div>
  );
};
