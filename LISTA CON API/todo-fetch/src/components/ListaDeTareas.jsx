import React, { useState, useEffect } from 'react'
import EntradaTarea from './EntradaTarea';
import Tarea from './Tarea';
import '../estilos/ListaDeTareas.css';

const URL = 'https://playground.4geeks.com/apis/fake/todos/user/mariagarcia'
const GET_HTTP_METHOD = 'GET';
const PUT_HTTP_METHOD = 'PUT';

let nextId = 1;

function ListaDeTareas() {

  const [listaTareas, setListaTareas] = useState([]);

  const getLista = async () => {
    const response = await fetch(URL, { method: GET_HTTP_METHOD });
    const todoListState = await response.json();
    setListaTareas(todoListState);
  };

  const addTarea = async (label) => {
    const state = [...listaTareas, { label, done: false }];
  
    await fetch(URL, {
      method: PUT_HTTP_METHOD,
      body: JSON.stringify(state),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    await getLista();
  };

  useEffect(() => {
    getLista();
  }, []);

  const deleteTarea = async (id) => {
    const actualizarTareas = listaTareas.filter((tarea) => tarea.id !== id);
    await fetch(`${URL}`, {
      method: 'PUT',
      body: JSON.stringify(actualizarTareas),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setListaTareas(actualizarTareas);
  };


  // const deleteTask = id => {
  //   setListaTareas(listaTareas.filter(tarea => tarea.id !== id));
  // };
    
  return (
    <>
      <EntradaTarea addTarea={addTarea}/>

      <div className='list-task'>
        {
          listaTareas.length > 0 ?
          listaTareas.map((Task) =>
            <Tarea key={Task.id} {...Task} deleteTarea={deleteTarea} />
          ):
          <h3>No hay tareas, añadir tareas</h3>
        }
      </div>

    </>
  )
}

export default ListaDeTareas