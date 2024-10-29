export const TaskItem = ({ name, description }) => {
  return (
    <div className="task__item">
        <h5>{ name }</h5>
        <p>{ description }</p>
    </div>
  )
}
