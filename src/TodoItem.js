import React from "react";
import './TodoItem.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

function TodoItem({text, completed}) {
  return (
    <li>
      <span className="check">
        <FaCheck className="icon-check" />
      </span>
      <p className="todo-text">New todo for styles</p>
      <span className="decline">
        <FaTimes className="icon-times" />
      </span>
    </li>
  );
}

export { TodoItem };
