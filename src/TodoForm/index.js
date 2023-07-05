import React from "react";
import "./TodoForm.css";

function TodoForm() {
  <form>
    <label>Escribe tu nuevo TODO</label>
    <textarea placeholder="Cortar cebolla para el almuerzo" />
    <div className="TodoForm-buttonContainer">
      <button className="TodoForm-button--cancel">Cancelar</button>
      <button className="TodoForm-button--add">Añadir</button>
    </div>
  </form>;
}

export { TodoForm };
