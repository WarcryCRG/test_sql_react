import { useState } from "react";
import { TaskForm } from "./TaskForm";


export const TaskCrudBox = () => {

  const [ task, setTask ] = useState({
    name: '',
    description: ''
  });

  const onAddTask = () => {
    console.log(task)
  }

  const onDeleteTask = () => {

  }

  const onUpdateTask = () => {

  }

  return (
    <section className='task__crud_box'>
        <h1> Introduce tarea: </h1>

        <TaskForm setTask={ setTask } />

        <div className="task__buttons">

          <button
            className="task__button add"
            onClick={ onAddTask }> Añadir </button>

          <button
            className="task__button delete"
            onClick={ onDeleteTask }> Eliminar </button>

          <button
            className="task__button update"
            onClick={ onUpdateTask }> Actualizar </button>

        </div>

    </section>
  )
}
