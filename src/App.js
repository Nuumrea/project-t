import React, { useState } from "react";
import "./App.css";
import Trash from "./assets/trash.png";

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
    <div className="wrapper">
      <div className="title">
        <span>Todo List</span>
      </div>
      <form onSubmit={handleSubmit} className="input-wrapper">
        <input
          className="input-field"
          type="text"
          placeholder="Veuillez renseigner une nouvelle tâche"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <input className="input-button" type="submit" value="Ajouter" />
      </form>

      <div>
        {todos.map((data, index) => {
          return (
            <div className="text-wrapper">
              <div>
                <input type="checkbox" />
                <span>{data}</span>
              </div>
              <div>
                <img src={Trash} alt="trash png" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
