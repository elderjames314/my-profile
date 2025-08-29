class Todo {
  id: number;
  task: string;
  completed: boolean;

  constructor(id: number, task: string, completed: boolean = false) {
    this.id = id;
    this.task = task;
    this.completed = completed;
  }
}

export default Todo;
