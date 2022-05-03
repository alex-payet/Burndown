import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./App.css"

import { Task } from "./components/task/Task"
import { AddTask } from "./components/task/AddTask"
import { addTask, removeTask } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const Tasks: readonly ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  )

  const dispatch: Dispatch<any> = useDispatch()

  const saveTask = React.useCallback(
    (Task: ITask) => dispatch(addTask(Task)),
    [dispatch]
  )

  return (
    <main>
      <h1>My Tasks</h1>
      <AddTask saveTask={saveTask} />
      {Tasks.map((task: ITask) => (
        <Task
          key={task.id}
          task={task}
          removeTask={removeTask}
        />
      ))}
    </main>
  )
}

export default App