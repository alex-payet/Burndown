import * as actionTypes from "./actionTypes"

const initialState: TaskState = {
  tasks: [
    {
      id: 1,
      sprintId: 1,
      backlogItem: "1000",
      storyPoint: 1,
      description: "Description 1",
    },
    {
      id: 2,
      sprintId: 2,
      backlogItem: "2000",
      storyPoint: 3,
      description: "Description 2",
    },
  ],
}

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {

    case actionTypes.ADD_TASK:
      const id =  state.tasks.length + 1;
      const newTask: ITask = {
        id: id,
        sprintId: 1,
        backlogItem: "Description " + id,
        description: action.task.description,
        storyPoint: 1,
      }
      return {
        ...state,
        tasks: state.tasks.concat(newTask),
      }

    case actionTypes.REMOVE_TASK:
      const updatedTasks: ITask[] = state.tasks.filter(
        Task => Task.id !== action.task.id
      )
      return {
        ...state,
        tasks: updatedTasks,
      }
  }
  return state
}

export default reducer