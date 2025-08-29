import type Todo from "../../entities/todo_entity/Todo";
import TodoItem from "./TodoItem";

type TodoTableProps = {
  todos: Todo[];
  markIfCompleted: (id: number) => void;
};

export default function TodoTable({ todos, markIfCompleted }: TodoTableProps) {
  if (todos.length === 0) {
    return <p>No todos for now, please add</p>;
  }

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>todos</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem todo={todo} markIfCompleted={markIfCompleted} />
        ))}
      </tbody>
    </table>
  );
}
