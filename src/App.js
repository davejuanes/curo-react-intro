import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

const defaultTodos = [
  { text: 'Diseño de proyecto', completed: false},
  { text: 'Diseño de Base de datos', completed: false},
  { text: 'Recopilación de requerimientos', completed: false},
  { text: 'Desarrollo', completed: false},
  { text: 'Implementación', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
