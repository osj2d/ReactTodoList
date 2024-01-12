import React from "react";

const Item = ({ id, task, complete }) => {
  return (
    <div>
      <h2>{id}</h2>
      <p>{task}</p>
      <button>{complete}</button>
      
    </div>
  );
};

export default Item;
