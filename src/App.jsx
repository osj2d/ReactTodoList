import React from "react";
import "./App.css";
import Todo from "./Components/Todo";

function App() {
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <Todo />
      </div>
    </>
  );
}

export default App;
