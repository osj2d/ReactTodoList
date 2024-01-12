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
//   https://bobbyhadz.com/blog/react-remove-element-from-state-array conferir esta pagina!!!
  return (
    <div>
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <div>
        {todoList.map((todo) => (
          <ul key={todo.id}>
            <li className={completedTaskCount ? styles.completa : ""}>
              {todo.task}
            </li>
            <button onClick={() => setCompletedTaskCount((e) => !e)}>
              Complete
            </button>
            <button onClick={handleDeleteTodo} value={todo.id}>
              Delete
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todo;
