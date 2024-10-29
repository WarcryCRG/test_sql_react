import { useState } from "react";
import { TaskItem } from "./TaskItem";

const tasks = [
    { name: 'Terminar PPC A320 Neo Assembly', description: 'Edu quiere que cambie el color de un boton a verde' },
    { name: 'Calculo A400M ASRM', description: 'Calcular ASRM desde la transformación' }
];

export const TaskViewer = () => {

    const [ search, setSearch ] = useState('');


    const onGetTask = () => {
        
    }

  return (
    <section className="task__viewer">
        <div className="task__search">
            <input
                type="text"
                value={ search }
                onChange={ ({ target }) => setSearch( target.value ) }/>
            <button onClick={ onGetTask }> Buscar </button>
        </div>

        <div class="task__list">
            { tasks.map( ({ name, description }) => <TaskItem 
                key={ name }
                name={ name }
                description={ description }
              />) 
            }
        </div>
        
    </section>
  )
}
