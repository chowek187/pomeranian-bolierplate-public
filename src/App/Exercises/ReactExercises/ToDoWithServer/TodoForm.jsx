import { sendData } from './api/todoListApi';
import './form.css';
import { useState } from 'react';

export const TodoForm = ({ backfunction, refreshFunction }) => {
  const [title, setTile] = useState('');
  const [note, setNote] = useState('');
  const [author, setAuthor] = useState('');
  const [getError, setError] = useState(null);

  async function createTodo(event) {
    event.preventDefault();
    const data = {
      title: title,
      note: note,
      author: author,
    };
    await sendData('api/todo/', data, 'POST')
      .then((respone) => {
        backfunction(false);
        refreshFunction(respone);
      })
      .catch((error) => {
        setError(error);
      });
  }

  return (
    <div className="formMain">
      <form className="formMedium" onSubmit={createTodo}>
        <div className="formSmall">
          <h2 className="titleMain">Tytuł</h2>
          <input
            className="titleForm"
            type="text"
            value={title}
            onChange={(e) => setTile(e.target.value)}
          />
          <h2 className="titleMain">Autor</h2>
          <input
            className="titleForm"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <h2 className="titleMain">Treść</h2>
          <textarea
            className="textForm"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="buttonsForm">
          {getError && <p className="errorMessage">nie udało się usunąć</p>}
          <button className="backButton">COFNIJ</button>
          <button type="submit" className="addButton">
            DODAJ
          </button>
        </div>
      </form>
    </div>
  );
};
