import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../estilos/Tarea.css';

function Tarea({ id, label, deleteTarea }) {

  return (
    <>
    <div className='task-container'>
      <div className='task-text'>
        { label }
      </div>
      <div className='icon-container'>
        <div className='icon' onClick={() => deleteTarea(id)}>
          <AiOutlineCloseCircle className='icon'/>
        </div>
      </div>  
    </div>
  </>
  )
}

export default Tarea