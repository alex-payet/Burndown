interface ITask {
    id: number;
    sprintId: number;
    backlogItem?: string;
    storyPoint: StoryPoint;
    description: string;
    assign?: string;
    status?: string;
    moscow?: string;
    endDate?: Date;
    comments?: string;
}

type StoryPoint = 1 | 2 | 3 | 5 | 8 | 13 | 21;

type TaskState = {
    tasks: ITask[]
}

type TaskAction = {
    type: string;
    task: ITask
}

type DispatchType = (action: TaskAction) => TaskAction;

