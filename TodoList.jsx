import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="list">
      <li className="list-item">
        {props.item}
        <span className="icons">
          <i class="fa-solid fa-trash-can" onClick={e=>{
            props.deleteItem(props.index)
          }}></i>
        </span>
      </li>
    </div>
  );
};

export default TodoList;
