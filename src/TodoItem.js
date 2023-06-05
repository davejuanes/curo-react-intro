import React from "react";
import './TodoItem.css';
import { FaCheck } from 'react-icons/fa';

function TodoItem({text, completed}) {
  return (
    <li>
      <span>
        <FaCheck className="icon-check" />
      </span>
      <p>New todo for styles</p>
      <span>
        {/* <FaTimes className="icon-times" /> */}
      </span>
    </li>
  );
}

export { TodoItem };
