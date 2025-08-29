import type Todo from "../../entities/todo_entity/Todo";

interface TodoProps {
  todo: Todo;
  markIfCompleted: (id: number) => void;
}

export default function TodoItem({ todo, markIfCompleted }: TodoProps) {
  return (
    <div>
      <tr key={todo.id}>
        <td>{todo.id}</td>
        <td>{todo.task}</td>
        <td>
          {todo.completed ? (
            "✅"
          ) : (
            <button onClick={() => markIfCompleted(todo.id)}>
              Mark if completed
            </button>
          )}
        </td>
      </tr>
    </div>
  );
}
