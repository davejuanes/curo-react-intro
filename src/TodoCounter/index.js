import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <>
      <div className="container">
        <h1>
          Haz completado <span>{completedTodos}</span> de{" "}
          <span>{totalTodos}</span> TODO's
        </h1>
        ;
      </div>
    </>
  );
}

export { TodoCounter };
