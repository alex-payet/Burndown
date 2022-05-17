import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  task: ITask
  removeTask: (task: ITask) => void
}

export const Task: React.FC<Props> = ({ task, removeTask }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteTask = React.useCallback(
    (task: ITask) => dispatch(removeTask(task)),
    [dispatch, removeTask]
  )

  return (
    <div className="Task">
      <div>
        <h1>{task.id}</h1>
        <p>{task.description}</p>
      </div>
      <button onClick={() => deleteTask(task)}>Delete</button>
    </div>
  )
}