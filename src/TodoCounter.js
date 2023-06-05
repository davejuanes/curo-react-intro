import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <>
      <div className="container">
        <h1>
          Haz completado {completed} de {total} TODO's
        </h1>
        ;
      </div>
    </>
  );
}

export { TodoCounter };
