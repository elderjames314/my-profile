import Todo from "./Todo";

class TodoEngine {
  todos: Todo[];

  constructor() {
    this.todos = [];
  }
  save(task: string) {
    let lastTodoId: number;
    if (this.todos.length > 0) {
      lastTodoId = this.todos[this.todos.length - 1].id + 1;
    } else {
      lastTodoId = 1;
    }
    const newTodo = new Todo(lastTodoId, task, false);
    const newTodos = [...this.todos, newTodo];
    this.todos = newTodos;
  }

  delete() {}

  get_all_todos() {
    return this.todos;
  }
  //mark if completed

  make_if_completed(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
  }
}

export default TodoEngine;
