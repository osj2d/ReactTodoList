import React, { useState } from "react";
import Item from "./Item";
import styles from "./Todo.module.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(false);

  function handleClick() {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    setInput("");
  }
  function handleDeleteTodo({ target }) {
    console.log(target.value);
    setTodoList((current) =>
      current.filter((todo) => {
        return todo.id != target.value;
      })
    );
  }
  function handleClickComplete(e) {
    console.log(e.target)
    setCompletedTaskCount((e) => !e);
  }
  //   https://bobbyhadz.com/blog/react-remove-element-from-state-array conferir esta pagina!!!
  return (
    <div>
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {/* {todoList.map((todo) => (
          <li
            key={todo.id}
            className={completedTaskCount ? styles.completa : ""}
          >
            <h2>{todo.task}</h2>

            <button value={todo.id} onClick={handleClickComplete}>Complete</button>
            <button onClick={handleDeleteTodo} value={todo.id}>
              Delete
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default Todo;
