import React from "react";
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return <h1>Haz completado {completed} de {total} TODOS</h1>;
}

export { TodoCounter };
