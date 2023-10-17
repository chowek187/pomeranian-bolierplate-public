//import React, { useRef } from 'react';
//import './style.css';

//import { useRef } from 'react';

//export function ReactUseRefEx() {
// const inputRef = useRef();
//   const handleClick = (color) => {
//     inputRef.current.style.color = color;
//   };

//   return (
//     <div>
//       <p ref={inputRef}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi
//         ipsa consequuntur quisquam sint harum sunt doloribus incidunt
//         repudiandae illo quo beatae temporibus, qui, voluptas vero officia
//         eligendi perferendis ullam!{' '}
//       </p>
//       <button onClick={() => handleClick('red')}>zmień text na czerwono</button>
//       <button onClick={() => handleClick('blue')}>
//         zmień text na niebiesko
//       </button>
//     </div>
//   );
// }

//input ktory bedzie przyjmowal text i button ktory bedzie zerowal wartosc

///////////////

// export function ReactUseRefEx() {
//   const textRef = useRef();

//   function onColorChange(color) {
//     textRef.current.style.color = color;
//   }

//   return (
//     <div>
//       <button onClick={() => onColorChange('red')}>Czerwony</button>
//       <button onClick={() => onColorChange('green')}>Zielony</button>
//       <p ref={textRef}>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae
//         explicabo hic delectus praesentium eaque possimus commodi, qui a, sequi
//         amet vero illo veritatis? A, deleniti? Quas in sed dolore.{' '}
//       </p>
//     </div>
//   );
// }

////////////////////////

// import React, { useRef, useState } from 'react';

// export function ReactUseRefEx() {
//   const textRef = useRef();
//   const [inputText, setInputText] = useState('');

//   function onTextChange(event) {
//     setInputText(event.target.value);
//   }

//   function resetText() {
//     setInputText('');
//     textRef.current.textContent = '';
//   }

//   return (
//     <div>
//       <button onClick={resetText}>Zresetuj Tekst</button>
//       <input
//         type="text"
//         placeholder="Wprowadź tekst"
//         value={inputText}
//         onChange={onTextChange}
//       />
//     </div>
//   );
// }

//////////////////

// import React, { useRef, useState } from 'react';

// export function ReactUseRefEx() {
//   const textRef = useRef();
//   const inputRef = useRef();

//   function onColorChange(color) {
//     textRef.current.style.color = color;
//   }

//   function onReset() {
//     inputRef.current.value = '';
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={() => onColorChange('red')}>Czerwony</button>
//         <button onClick={() => onColorChange('green')}>Zielony</button>
//         <p ref={textRef}>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae
//           explicabo hic delectus praesentium eaque possimus commodi, qui a,
//           sequi amet vero illo veritatis? A, deleniti? Quas in sed dolore.{' '}
//         </p>
//       </div>
//       <div>
//         <input ref={inputRef} type="text" />
//         <button onClick={onReset}>Reset</button>
//       </div>
//     </div>
//   );
// }

//przycisk blokujacy klikniecie

// import React, { useRef, useState } from 'react';

// export function ReactUseRefEx() {
//   const textRef = useRef();
//   const inputRef = useRef();
//   const [isResetButtonDisabled, setIsResetButtonDisabled] = useState(false);

//   function onColorChange(color) {
//     textRef.current.style.color = color;
//   }

//   function onReset() {
//     inputRef.current.value = '';
//   }

//   return (
//     <div>
//       <div>
//         <button onClick={() => onColorChange('red')}>Czerwony</button>
//         <button onClick={() => onColorChange('green')}>Zielony</button>
//         <p ref={textRef}>
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae
//           explicabo hic delectus praesentium eaque possimus commodi, qui a,
//           sequi amet vero illo veritatis? A, deleniti? Quas in sed dolore.{' '}
//         </p>
//       </div>
//       <div>
//         <input ref={inputRef} type="text" />
//         <button onClick={onReset} disabled={isResetButtonDisabled}>
//           Reset
//         </button>
//         <button
//           onClick={() => setIsResetButtonDisabled(!isResetButtonDisabled)}
//         >
//           {isResetButtonDisabled ? 'Odblokuj Reset' : 'Zablokuj Reset'}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ReactUseRefEx;

import React, { useRef } from 'react';

export function ReactUseRefEx() {
  const textRef = useRef();
  const inputRef = useRef();
  const buttonRef = useRef();

  function onColorChange(color) {
    textRef.current.style.color = color;
  }

  function onReset() {
    inputRef.current.value = '';
  }

  function disableMe() {
    buttonRef.current.disabled = true;
  }

  return (
    <div>
      <div>
        <button onClick={() => onColorChange('red')}>Czerwony</button>
        <button onClick={() => onColorChange('green')}>Zielony</button>
        <p ref={textRef}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi beatae
          explicabo hic delectus praesentium eaque possimus commodi, qui a,
          sequi amet vero illo veritatis? A, deleniti? Quas in sed dolore.{' '}
        </p>
      </div>
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={onReset}>Reset</button>
      </div>
      <div>
        <button ref={buttonRef} onClick={disableMe}>
          One Way Ticket
        </button>
      </div>
    </div>
  );
}
