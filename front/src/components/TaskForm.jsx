import { TaskInput } from "./TaskInput";

const inputs = [
    { key: 'name', name: 'Nombre' },
    { key: 'description', name: 'Descripción' },
];

export const TaskForm = ({ setTask }) => {

  return (
    <div className="task__form">
        { inputs.map(({ key, name }) => <TaskInput
            key={ key }
            inputKey={ key }
            name={ name }
            setTask={ setTask }
          />)
        }
    </div>
  )
}
