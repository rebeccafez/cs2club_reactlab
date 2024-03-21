import { useState } from "react";
import TodoListItem from "./TodoListItem";
import EntryForm from "./EntryForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const insertTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (idToDelete) => {
    setTodos(todos.filter((t) => t.id !== idToDelete));
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            Id={todo.id}
            Name={todo.name}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <EntryForm insertTodo={insertTodo} />
    </>
  );
};

export default TodoList;
