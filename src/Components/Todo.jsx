import React, { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./Todo.module.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [id, setId] = useState(0);
  const [error, setError] = useState(false);

  function handleClick() {
    if (input.trim().length) {
      setId((prev) => (prev += 1));
      setTodoList((prev) => [
        ...prev,
        {
          id: id,
          task: input,
          complete: false,
        },
      ]);
      setInput("");
    } else {
      setError(true);
    }
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
    <div className="TodoContainer">
      <input
        type="text"
        value={input}
        onInput={(e) => setInput(e.target.value)}
      />
      <button className={`${styles.adicionar} btn`} onClick={handleClick}>
        Add
      </button>
      {error && <p className={styles.error}>Favor inserir um dado valido</p>}
      <ul>
        {todoList.map(({ id, task, complete }) => (
          <li key={id}>
            <Item id={id} task={task} complete={complete} />
            <div className={styles.btns}>
              <button
                className={`${styles.complete} btn`}
                value={id}
                onClick={handleClickComplete}
              >
                Completa
              </button>
              <button
                className={`${styles.delete} btn`}
                value={id}
                onClick={handleDeleteTodo}
              >
                Deleta
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
