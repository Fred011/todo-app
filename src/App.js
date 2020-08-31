import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form setInputText={setInputText} inputText={inputText} setTodos={setTodos} todos={todos} setStatus={setStatus} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
