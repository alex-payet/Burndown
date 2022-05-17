import * as React from "react"

type Props = {
  saveTask: (Task: ITask | any) => void
}

export const AddTask: React.FC<Props> = ({ saveTask }) => {
  const [Task, setTask] = React.useState<ITask | {}>()

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...Task,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    saveTask(Task)
  }

  return (
    <form onSubmit={addNewTask} className="Add-Task">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleTaskData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleTaskData}
      />
      <button disabled={Task === undefined ? true : false}>
        Add Task
      </button>
    </form>
  )
}