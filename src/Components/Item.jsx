import React from "react";
import styles from "./item.module.css";

const Item = ({  id, task, complete }) => {
  return (
    <div >
      <h2>{id}</h2>
      <p className={complete ? styles.completa : styles.completa1}>{task}</p>
    </div>
  );
};

export default Item;
