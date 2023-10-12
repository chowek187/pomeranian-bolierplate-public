import './style.css';
import { useState } from 'react';
import { sendData } from './api/todoListApi';
import { Pen } from './Pen';
import { Bin } from './Bin';
import { CheckboxDone } from './CheckboxDone';
import { BinRed } from './BinRed';
import { Checkbox } from './Checkbox';

export const TodoItem = ({ todo, refreshFunction }) => {
  const [getError, setError] = useState(null);

  async function handleDelete(paramId) {
    await sendData(`api/todo/${paramId}`, [], 'DELETE')
      .then((response) => refreshFunction(response))
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <div className="smallbox">
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
          {todo.isDone ? <CheckboxDone /> : <Checkbox />}

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
