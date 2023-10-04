import './styles.css';
import { useState } from 'react';

export const JsStorages = () => {
  const [name, setName] = useState('');
  const [nickNames, setNickNames] = useState(
    localStorage.getItem('nick')?.split(',') || []
  );

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function addNickName() {
    setNickNames([...nickNames, name]);
    localStorage.setItem('nick', [...nickNames, name]);
  }
  return (
    <div>
      <div className="calosc">
        <div className="add-nick">
          <span className="nick">NICK</span>
          <input
            className="enter-nick"
            type="text"
            onChange={handleNameChange}
          ></input>
        </div>
        <button onClick={addNickName} className="dodaj">
          Dodaj
        </button>
      </div>
      <div className="all-nick">
        <div>
          <ul>
            <li>
              {nickNames.map((item) => (
                <li>{item}</li>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// import { useState } from 'react';

// export const JsStorages = () => {
//   const [test, setTest] = useState(localStorage.getItem('test'));

//   function setLs() {
//     localStorage.setItem('test', 1);
//     setTest(1);
//   }

//   function resetLs() {
//     localStorage.removeItem('test');
//     setTest(null);
//   }

//   return (
//     <div>
//       <button onClick={setLs}>Ustaw LS</button>
//       <button onClick={resetLs}>Resetuj LS</button>
//       <p>{test}</p>
//     </div>
//   );
// };
