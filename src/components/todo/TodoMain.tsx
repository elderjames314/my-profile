import { useState } from "react";
import TodoEngine from "../../entities/todo_entity/TodoEngine";
import SaveTodo from "./SaveTodo";
import TodoHeader from "./TodoHeader";
import TodoTable from "./TodoTable";

export default function TodoMain() {
  const [todos, setTodos] = useState<TodoEngine["todos"]>([]);

  const handleSave = (task: string) => {
    const engine = new TodoEngine();
    engine.todos = todos;
    engine.save(task);
    setTodos(engine.get_all_todos()); // trigger re-render
  };

  const makeIfCompleted = (id: number) => {
    console.log("at the top");
    console.log(todos);
    const engine = new TodoEngine();
    engine.todos = todos;
    console.log("before you mark if complete");
    console.log(engine.get_all_todos());
    engine.make_if_completed(id);
    console.log(engine.get_all_todos());
    setTodos(engine.get_all_todos());
  };

  return (
    <div>
      <TodoHeader />
      <SaveTodo onSave={handleSave} />
      <TodoTable todos={todos} markIfCompleted={makeIfCompleted} />
    </div>
  );
}
