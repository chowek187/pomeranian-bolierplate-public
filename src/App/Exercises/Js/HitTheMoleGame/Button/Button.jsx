import './Button.css';
export const Button = ({ id, handleClick, timeButton, label }) => {
  console.log(timeButton == id ? 'clicked-button' : 'notClicked-button');
  return (
    <button
      id={id}
      onClick={handleClick}
      className={timeButton == id ? 'clicked-button' : 'notClicked-button'}
    >
      {label}
    </button>
  );
};
