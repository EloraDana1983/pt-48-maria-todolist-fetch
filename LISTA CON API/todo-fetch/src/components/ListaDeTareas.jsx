import React, { useState, useEffect } from 'react';
import "../App.css"

const BASE_URL = 'https://playground.4geeks.com/apis/fake/todos/user/';

const ListaDeTareas = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('Maria');

  const getAllUsers = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}`);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  const deleteUser = async (usernameToDelete) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${usernameToDelete}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await getAllUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTodos = () => {
    setLoading(true);
    fetch(`${BASE_URL}${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setTodos(data);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch((error) => console.error('Error fetching todos:', error))
      .finally(() => setLoading(false));
  };

  const createUser = async () => {
    setLoading(true);
    const response = await fetch(`${BASE_URL}${username}`, {
      method: 'POST',
      body: JSON.stringify([]),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    getTodos();
    setLoading(false);
  };

  const deleteTodo = async (id) => {
    console.log('Deleting todo with id:', id);
    setLoading(true);
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log('Updated todos:', updatedTodos);
    const response = await fetch(`${BASE_URL}${username}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodos),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setTodos(updatedTodos);
    setLoading(false);
  };

  const addTodo = async () => {
    setLoading(true);
    const updatedTodos = [...todos, { label: todo, done: false }];
    const response = await fetch(`${BASE_URL}${username}`, {
      method: 'PUT',
      body: JSON.stringify(updatedTodos),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setTodo('');
    getTodos();
    setLoading(false);
  };

  const deleteAllTodos = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}${username}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setTodos([]); // Vacía la lista de tareas en el estado local
    } catch (error) {
      console.error('Error deleting all todos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <div className='registro'>
        <h4>Registra tu usuario</h4>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className='usuario' onClick={createUser}>Crear Usuario</button>
        </div>
        <button className='ver usuario' onClick={getAllUsers}>Ver usuarios</button>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user}
              <button className='borrar-una' onClick={() => deleteUser(user)}>🗑️</button>
            </li>
          ))}
        </ul>
      </div> 
      <div className='tareas'>
        <div>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Nueva tarea"
          />
          <button className='añadir' onClick={addTodo}>Añadir tarea</button>
        </div>
        <button className='ver' onClick={getTodos}>Ver tareas</button>
        <button className='borrar-todas' onClick={deleteAllTodos}>Borrar tareas</button>
        {loading ? (
          <div>Loading...</div>
        ) : (
          Array.isArray(todos) && (
            <ul>
              {todos.map((todo, index) => (
                <li key={`${todo.id}-${index}`}>
                  {todo.label}
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
              ))}
            </ul>
          )
        )}
      </div> 
    </>
  );
};

export default ListaDeTareas;
