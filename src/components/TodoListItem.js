import { useState } from "react";
import CompleteButton from "./CompleteButton";
import DeleteButton from "./DeleteButton";

const TodoListItem = ({ Name, Id, deleteTodo }) => {
  const [complete, setComplete] = useState(false);

  const toggleComplete = () => setComplete(!complete);

  const id = Id;
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <li>
      <span>{Name}</span>&nbsp;
      <CompleteButton complete={complete} toggleComplete={toggleComplete} />
      <DeleteButton handleDelete={handleDelete} Id={id} />
    </li>
  );
};

export default TodoListItem;
