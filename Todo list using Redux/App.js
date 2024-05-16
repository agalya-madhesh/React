import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,removeTodo } from './Action';
import './App.css'; 

function App() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;