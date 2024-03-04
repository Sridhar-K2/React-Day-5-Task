import React from 'react';

function FilterTodos({ todos, setFilter }) {
  const handleChange = (e) => {
    const status = e.target.value;
    setFilter(status);
  };

  return (
    <select onChange={handleChange}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not completed">Not Completed</option>
    </select>
  );
}

export default FilterTodos;
