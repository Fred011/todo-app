import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
