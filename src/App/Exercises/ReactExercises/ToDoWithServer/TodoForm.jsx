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
    <div className="form">
      <form onSubmit={createTodo}>
        <h2>Tytuł</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTile(e.target.value)}
        />
        <h2>Autor</h2>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <h2>Treść</h2>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} />

        {getError && <p className="errorMessage">nie udało się usunąć</p>}
        <button className="cofnij">COFNIJ</button>
        <button type="submit" className="dodaj">
          DODAJ
        </button>
      </form>
    </div>
  );
};
