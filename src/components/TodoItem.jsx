import React from 'react';

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleStatusChange = () => {
    const updatedTodo = { ...todo, status: todo.status === 'completed' ? 'not completed' : 'completed' };
    updateTodo(todo.id, updatedTodo);
  };

  return (
    <div>
      <h3>{todo.taskName}</h3>
      <p>{todo.description}</p>
      <p>Status: {todo.status}</p>
      <button onClick={handleStatusChange}>Toggle Status</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TodoItem;
