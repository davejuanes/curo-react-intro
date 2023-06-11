import React from "react";
import './TodoItem.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

function TodoItem({text, completed}) {
  return (
    <li>
      <span className="check">
        <FaCheck className={`icon-check  ${completed && "icon-check--active"}`} />
      </span>
      <p className={`todo-text ${completed && "TodoItem-p--complete"}`}>{text}</p>
      <span className="decline">
        <FaTimes className="icon-times" />
      </span>
    </li>
  );
}

export { TodoItem };
