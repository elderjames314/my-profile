import { useState } from "react";

type SaveTodoProps = {
  onSave: (task: string) => void;
};

export default function SaveTodo({ onSave }: SaveTodoProps) {
  const [task, setTask] = useState("");

  const handleSave = () => {
    if (task.trim()) {
      onSave(task);
      setTask(""); // clear input
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <button onClick={handleSave}>Save Todo</button>
    </div>
  );
}
