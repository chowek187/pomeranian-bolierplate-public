import './style.css';

import { fetchData } from './api/todoListApi';
import { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';
import { Loading } from './Loading';
import { ErrorView } from './ErrorView';
import { TodoForm } from './TodoForm';

// const data = [
//   {
//     id: 1,
//     title: 'Zamówić catering',
//     createdAt: '2024-04-20T18:03:00.000Z',
//     author: 'Wojtek',
//     isDone: true,
//     note: 'Dla mnie wege, dla Pauliny ryba + wege. Zrobić zamówienie, zapłacić.',
//     doneDate: '2023-10-10T15:31:33.075Z',
//   },
//   {
//     id: 2,
//     title: 'Kupić spray na kleszcze',
//     createdAt: '2023-10-10T15:31:33.074Z',
//     author: 'Wojtek',
//     isDone: true,
//     note: 'Pamiętać, zeby sprawdić skład i termin wazności preparatu. Zadzwonić do weta, zeby się upewnić, czy mają na stanie.',
//     doneDate: '2023-10-10T15:31:33.075Z',
//   },
//   {
//     id: 3,
//     title: 'Szczepienie kitku',
//     createdAt: '2023-10-10T15:31:33.074Z',
//     author: 'Wojtek',
//     isDone: false,
//     note: ' Sprawdzić w ksiązeczce zdrowia, kiedy Nala była ostatni raz szczepiona i umówić się z naszym weterynarzem.',
//     doneDate: '2023-10-10T15:31:33.075Z',
//   },
// ];

export const ToDoWithServer = () => {
  const [getToDoList, setToDoList] = useState([]);
  const [getIsLoadingList, setIsLoadingList] = useState(true); //bo boolean dlatego getIS
  const [getError, setError] = useState(null); //null bo na poczatku nie ma errora
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [getKickComponent, setKickComponent] = useState(null);

  const fetchTodoData = async () => {
    setIsLoadingList(true);
    try {
      const responseData = await fetchData('api/todo');
      setToDoList(responseData);
      setIsLoadingList(false);
    } catch (error) {
      setError(error);
      setIsLoadingList(false);
    }
  };

  useEffect(() => {
    fetchTodoData();
  }, [getKickComponent]);

  if (getError) {
    return <ErrorView />;
  }
  if (getIsLoadingList) {
    return <Loading />;
  }

  if (isFormVisible) {
    return (
      <TodoForm
        backfunction={setIsFormVisible}
        refreshFunction={setKickComponent}
      />
    );
  }

  return (
    <div className="general">
      <h1>TODO</h1>
      {/* {getError && getError} */}
      <p1>Tutaj znajdziesz lisę swoich zadań:</p1>
      <div className="bigbox">
        {getToDoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              refreshFunction={setKickComponent}
            />
          );
        })}
      </div>
      <button className="refresh" onClick={() => setIsFormVisible(true)}>
        DODAJ
      </button>
    </div>
  );
};
