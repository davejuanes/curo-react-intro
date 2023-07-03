import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="create-button"
      onClick={(event) => {
        console.log("Le diste click al boton")
        console.log(event)
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
