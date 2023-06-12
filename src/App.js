import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  { text: 'Diseño de proyecto', completed: true},
  { text: 'Diseño de Base de datos', completed: false},
  { text: 'Recopilación de requerimientos', completed: false},
  { text: 'Desarrollo', completed: false},
  { text: 'Implementación', completed: true},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(
    todo => !!todo.completed
    ).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan todos de ' + searchValue);

  return (
    <React.Fragment>
      <TodoCounter 
      completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
