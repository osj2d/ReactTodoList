import React, { useState } from "react";
import Item from "./Item";
import styles from "./Todo.module.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);

  function handleClick() {
    // const id = todoList.length + 1;
    setId((prev) => prev +=1)

    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    console.log(todoList);
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
  function handleClickComplete({ target }) {
    const changeDone = todoList.map((info) => {
      if (info.id == target.value) {
        return { ...info, complete: !info.complete };
      }
      return info;
    });
    setTodoList(changeDone);
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      <ul>
        {todoList.map(({ id, task, complete }) => (
          <li key={id}>
            <Item id={id} task={task} complete={complete} />
            <button value={id} onClick={handleClickComplete}>Completa</button>
            <button value={id} onClick={handleDeleteTodo}>
              Deleta
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
