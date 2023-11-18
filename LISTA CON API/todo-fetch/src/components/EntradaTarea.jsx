import React, { useState } from 'react'
import '../estilos/EntradaTarea.css';

function EntradaTarea( { addTarea } ) {
  
  const [entradaTarea, setEntradaTarea] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTarea(entradaTarea);
    setEntradaTarea('');
  };

  return (
    <>
      <form className='head-form' onSubmit={handleSubmit}>
        <input
        className='task-input'
          type='text'
          value={ entradaTarea }
          onChange={e => setEntradaTarea(e.target.value)}
          placeholder='Escribe tu nueva tarea'
          required
        ></input>
      </form>  
    </>
  )
}

export default EntradaTarea