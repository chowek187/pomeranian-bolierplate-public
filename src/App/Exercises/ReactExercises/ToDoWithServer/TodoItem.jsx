// import './style.css';
// import { useState } from 'react';
// import { sendData } from './api/todoListApi';
// import { Pen } from './Pen';
// import { Bin } from './Bin';
// import { CheckboxDone } from './CheckboxDone';
// import { BinRed } from './BinRed';
// import { Checkbox } from './Checkbox';

// export const TodoItem = ({ todo, refreshFunction }) => {
//   const [getError, setError] = useState(null);
//   const [isChecked, setIsChecked] = useState(todo.isDone);

//   async function handleDelete(paramId) {
//     await sendData(`api/todo/${paramId}`, [], 'DELETE')
//       .then((response) => refreshFunction(response))
//       .catch((error) => {
//         setError(error);
//       });
//   }

//   const handleCheckboxClick = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div className="smallbox">
//       <div className="areaSmallBox">
//         <div className="date">{todo.isDone && todo.doneDate}</div>
//         <div className="title">
//           <h2>{todo.title}</h2>
//         </div>
//         <div className="author">
//           <p2>{todo.author}</p2>
//         </div>
//         <div className="createdAt">
//           <p3>{todo.createdAt}</p3>
//         </div>
//         <div className="note">{todo.note}</div>
//       </div>
//       <div className="icons">
//         <div className="restIcons">
//           {isChecked ? (
//             <CheckboxDone onClick={handleCheckboxClick} />
//           ) : (
//             <Checkbox onClick={handleCheckboxClick} />
//           )}
//           <Pen />
//           <div onClick={() => handleDelete(todo.id)}>
//             {getError && <p className="errorMessage">nie udało się usunąć</p>}
//             <Bin />
//             <BinRed />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import './style.css';
// import { useState, useEffect, useCallback } from 'react';
// import { sendData } from './api/todoListApi';
// import { Pen } from './Pen';
// import { Bin } from './Bin';
// import { CheckboxDone } from './CheckboxDone';
// import { BinRed } from './BinRed';
// import { Checkbox } from './Checkbox';

// export const TodoItem = ({ todo, refreshFunction }) => {
//   const [getError, setError] = useState(null);
//   const [isChecked, setIsChecked] = useState(() => {
//     // Sprawdź, czy w localStorage jest zapisana informacja o zaznaczeniu
//     const storedValue = localStorage.getItem(`todo_${todo.id}_checked`);
//     return storedValue === 'true';
//   });

//   // Funkcja do aktualizacji stanu zaznaczenia i zapisu do localStorage
//   const updateCheckedState = useCallback(
//     (newCheckedState) => {
//       setIsChecked(newCheckedState);
//       localStorage.setItem(
//         `todo_${todo.id}_checked`,
//         newCheckedState.toString()
//       );
//     },
//     [todo.id]
//   );

//   async function handleDelete(paramId) {
//     await sendData(`api/todo/${paramId}`, [], 'DELETE')
//       .then((response) => refreshFunction(response))
//       .catch((error) => {
//         setError(error);
//       });
//   }

//   const handleCheckboxClick = () => {
//     const newCheckedState = !isChecked;
//     updateCheckedState(newCheckedState);
//   };

//   useEffect(() => {
//     // W efekcie ubocznym zapewniaj aktualizację stanu zaznaczenia przy zmianie `isChecked`
//     updateCheckedState(isChecked);
//   }, [isChecked, updateCheckedState]);

//   return (
//     <div className="smallbox">
//       <div className="areaSmallBox">
//         <div className="date">{todo.isDone && todo.doneDate}</div>
//         <div className="title">
//           <h2>{todo.title}</h2>
//         </div>
//         <div className="author">
//           <p2>{todo.author}</p2>
//         </div>
//         <div className="createdAt">
//           <p3>{todo.createdAt}</p3>
//         </div>
//         <div className="note">{todo.note}</div>
//       </div>
//       <div className="icons">
//         <div className="restIcons">
//           {isChecked ? (
//             <CheckboxDone onClick={handleCheckboxClick} />
//           ) : (
//             <Checkbox onClick={handleCheckboxClick} />
//           )}
//           <Pen />
//           <div onClick={() => handleDelete(todo.id)}>
//             {getError && <p className="errorMessage">nie udało się usunąć</p>}
//             <Bin />
//             <BinRed />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import './style.css';
import { useState, useEffect, useCallback } from 'react';
import { sendData } from './api/todoListApi';
import { Pen } from './Pen';
import { Bin } from './Bin';
import { CheckboxDone } from './CheckboxDone';
import { BinRed } from './BinRed';
import { Checkbox } from './Checkbox';

export const TodoItem = ({ todo, refreshFunction }) => {
  const [getError, setError] = useState(null);
  const [isChecked, setIsChecked] = useState(() => {
    const storedValue = localStorage.getItem(`todo_${todo.id}_checked`);
    return storedValue === 'true';
  });

  const updateCheckedState = useCallback(
    (newCheckedState) => {
      setIsChecked(newCheckedState);
      localStorage.setItem(
        `todo_${todo.id}_checked`,
        newCheckedState.toString()
      );
    },
    [todo.id]
  );

  async function handleDelete(paramId) {
    await sendData(`api/todo/${paramId}`, [], 'DELETE')
      .then((response) => refreshFunction(response))
      .catch((error) => {
        setError(error);
      });
  }

  const handleCheckboxClick = () => {
    const newCheckedState = !isChecked;
    updateCheckedState(newCheckedState);
  };

  useEffect(() => {
    updateCheckedState(isChecked);
  }, [isChecked, updateCheckedState]);

  // Ustal klasę CSS na podstawie stanu isChecked
  const smallBoxClassName = isChecked ? 'smallboxGrey' : 'smallbox';

  return (
    <div className={smallBoxClassName}>
      <div className="areaSmallBox">
        <div className="date">{todo.isDone && todo.doneDate}</div>
        <div className="title">
          <h2>{todo.title}</h2>
        </div>
        <div className="author">
          <p2>{todo.author}</p2>
        </div>
        <div className="createdAt">
          <p3>{todo.createdAt}</p3>
        </div>
        <div className="note">{todo.note}</div>
      </div>
      <div className="icons">
        <div className="restIcons">
          {isChecked ? (
            <CheckboxDone onClick={handleCheckboxClick} />
          ) : (
            <Checkbox onClick={handleCheckboxClick} />
          )}
          <Pen />
          <div onClick={() => handleDelete(todo.id)}>
            {getError && <p className="errorMessage">nie udało się usunąć</p>}
            <Bin />
            <BinRed />
          </div>
        </div>
      </div>
    </div>
  );
};
