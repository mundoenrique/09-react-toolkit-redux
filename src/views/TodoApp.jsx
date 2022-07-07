import React from 'react';
import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from '../store/apis';

export default function TodoApp() {
  const [todoId, setTodoId] = useState(1);
  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const PrevTodo = () => {
    if (todoId === 1) return;

    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>TodoApp</h1>
      <hr />
      <h4>isLoading: {JSON.stringify(isLoading).toLocaleUpperCase()}</h4>
      <button onClick={PrevTodo}>Previus todo</button>
      <button onClick={nextTodo}>Next todo</button>
      <pre> {JSON.stringify(todo)} </pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? 'DONE' : 'PENDING'} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  );
}
