import { useState } from "react";
import TodoListItem from "./TodoListItem";
import EntryForm from "./EntryForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const insertTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem key={todo.key} Name={todo.name} />
        ))}
      </ul>
      <EntryForm insertTodo={insertTodo} />
    </>
  );
};

export default TodoList;
