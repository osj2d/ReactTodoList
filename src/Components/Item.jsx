import React from "react";
import styles from "./item.module.css";

const Item = ({  id, task, complete }) => {
  return (
    <div >
      <p className={`${styles.task} ${complete ? styles.completa : styles.completa1}`}>{task}</p>
    </div>
  );
};

export default Item;
