import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <>
      <div className="container">
        <h1>
          Haz completado <span>{completed}</span> de <span>{total}</span> TODO's
        </h1>
        ;
      </div>
    </>
  );
}

export { TodoCounter };
