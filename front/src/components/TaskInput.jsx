import { useState } from "react";

export const TaskInput = ({ inputKey, name, setTask }) => {

    const [ value, setValue ] = useState('');

    const modifyInputValue = ({ target }) => {
        const inputValue = target.value;
        setValue( inputValue );
        setTask( value => ({
            ...value,
            [ inputKey ]: inputValue
        }));
    } 

  return (
    <div className="task__input">
        <span> { name } </span>
        <input
            type="text"
            onChange={ modifyInputValue }
            value={ value }/>
    </div>
  )
}
