
import React, { useState } from "react";
import './../styles/App.css';

const Parent = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Write documentation', completed: false }
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="parent">
      <Child todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

const Child = ({ todos, handleComplete }) => {
  return (
    <div className="child">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => handleComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Parent;
