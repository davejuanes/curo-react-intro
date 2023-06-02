# Clase 1

# Clase 2
## Que es un componente :rocket:
Los componente son elementos reutilizables para React.
## Elementos del Proyecto
### Readme
Nos da información basica del proyecto, datos tecnicos, librerias configuración
### Package.json
Nos muestra dependencias, scripts (funciones a ejecutar), configuraciones (eslint es una libreria que nos ayuda a corregir errores de sintaxis o escritura de codigo), browserlist (ayuda a transpilar el proyecto como servidor :3000).
### .gitignore
Configuración de git para limitar archivos y carpetas a ser subidos al repositorio.
### Carpeta public
Carpeta que contiene elementos publicos que seran accedidos por el navegador.
El dato esencial de React es que utiliza una plantilla base de HTML (`index.html`) con una etiqueta `div` dentro de `body`, esta etiqueta `div` tiene `id=root` (por lo general) y a travez de esta es que renderizamos todo el proyecto en react.

Adicionalmente el HEAD del archivo `index.html` tenemos estilos y el `manifest` que es el que nos ayudará a hacer `pwa` (paginas instalables en ordenadores incluso offline).
### Carpeta src
El archivo principal es `index.js` donde importamos todos los estilos y exportamos un componente `App.js`. Dentro de `App.js` importamos los estilos asignados al componente `App.css` luego encontramos una función con nombre iniciado con mayuscula por convención que puede o no recibir un parametro, dentro del `return` podemos ejecutar codigo `jsx` bajo la nomenclatura de `react`.

Adicionalmente podemos crear carpetas con una arquitectura con buenas practicas (hooks, services, api, etc.).

### Creamos un componente
Dentro de App antes del `export`:
```
function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Lorona</p>
      <span>X</span>
    </li>
  );
}
```
Y en el componente `App`, luego del primer `className`:
```
<TodoItem />
```
Luego de verificar la aplicación en el navegador, podemos aclarar que bajo un metood `render` (`root.render([<TodoCount />])`) podemos renderizar cuantas veces querramos componentes y utilizando `props` (propiedades) esta se utilizan como propiedades `HTML`:
```
<TodoCount completed={3} total={5} />
```
### Diferencia de componente y elemento
La funcion que empieza con mayuscula es un componente que reciben propiedades y no renderizan nada en el html, los elementos estan dentro de componente que luego se convertiran en html y estos procesan las propiedades recibidas.
### React DOM
Es el mecanismo de procesamiento donde ingresan los componentes y elementos de React y salen etiquetas HTML en la pagina hacia el usuario final.
# Clase 3 Componentes de TODO Machine
Lo primero en hacer es eliminar los elementos del componente `App.js`, dejandolo con la siguiente estructura:
```
import React from 'react'
import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
    <TodoItem />
    <TodoItem />
    <TodoItem />
      
    </div>
  );
};
function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Lorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
```
Ahora debajo del `div`, agregamos un componente `<TodoCounter />`
`<TodoSearch />` y luego agregamos un contenedor de los `` llamandolo 
```<TodoList>
  <TodoItem />
  <TodoItem />
  <TodoItem />
<TodoList/>
```
Luego al final agregamos el boton `<CreateTodoButton />`.
Ahora toca crear los componentes que fuimos construyendo (En el caso de tener el error por React debemos importarlo también se puede usar el shortcut `imr` ojo que necesita tener la extensión de react):
### Componente TodoCounter
```
import React from 'react'

function TodoCounter() {
  return (
    <h1>Haz completado 3 de 5 TODOS</h1>
  );
}

export { TodoCounter };
```
### Componente TodoList
En el caso de este componente enviamos las propiedades o `prop's` para ir renderizando los TODO's
```
import React from 'react'

function TodoList(props) {
  return (
    <ul>
      {props.children}
    </ul>
  )
}

export { TodoList };
```
### Componente Todo Search
```
import React from 'react'

function TodoSearch() {
  return (
    <input placeholder="Buscar..." />
  )
}

export { TodoSearch };
```
### Componente TodoItem
Este componente lo separamos del componente `App.js`
```
import React from "react";

function TodoItem() {
  return (
    <li>
      <span>V</span>
      <p>Llorar con la Lorona</p>
      <span>X</span>
    </li>
  );
}

export { TodoItem };

```
### Componente TodoButton
```
import React from "react";

function CreateTodoButton() {
  return <button>+</button>;
}

export { CreateTodoButton };
```
### Componente App Final
```
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButton />
    </div>
  );
}


export default App;
```
# Clase 4 Como se comunican los componentes? Props y atributos
Nuestro componente TodoCounter recibira 2 propiedades destructuras `total, completed`, modificamos el componente de manera de el texto hardcodeado quede asi `{completed}` y `{total}` para hacer dinamico nuestro componente.

Ahora dentro del componente `App.js` donde invocamos al componente TodoCounter lo definimos: `<TodoCounter completed={16} total={25}/>`.
Estos cambios podemos verlos con las devtools del navegador ya que las props no se muestran como atributos en el HTML.

### Propiedad Children
React automaticamente define como elementos hijo a los componentes y/o elementos que estan dentro de dos etiquedas `jsx`.

### React.Fragment
Por defecto todo componente require ser exportado a un solo objeto, por esto es que los componentes deben estar encapsulados en una etiqueta:
```
<React.Fragment>
  ...
  ...
  ...
</React.Fragment>
```
### Envio de arrays
Para poder enviar array definimos:
```
const defaultTodos = [
  { text: 'Diseño de proyecto', completed: false},
  { text: 'Diseño de Base de datos', completed: false},
  { text: 'Recopilación de requerimientos', completed: false},
  { text: 'Desarrollo', completed: false},
  { text: 'Implementación', completed: false},
]
```
Y luego dentro de nuestro componente `App` vamos definiendo las props que necesitaremos ver con `TodoItem`:
```
<TodoList>
  {defaultTodos.map(todo => (
    <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
    />
  ))}
</TodoList>
```
Ahora en `TodoItem` iremos definiendo las props que necesitaremos (en mi caso tuve que destructurarlas por unos errores que me mostraban las devtools):
```
function TodoItem({text, completed}) {
  return (
    <li>
      <span>V {completed}</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}
```
# Clase 5 Estilos CSS en React

La forma de utilizar los estilos en react es mediante objetos, debemos usar los estilo como objetos definidos como variables:
```
const estilos = {
  backgroundColor: 'red'
}
function TodoCounter({ total, completed }) {
  return <h1 style={estilos}>Haz completado {completed} de {total} TODOS</h1>;
}
```
Tambien podemos definir estilos directamente en el `JSX` con doble llave `{{  }}`, esto porque JSX nos permite usar javascript dentro de llaves y como enviamos otro objeto entre llaves tambien. Ademas React por defecto los valores numericos sin especificar el tipo fijo o relativo los pone en pixels, asi que es mejor definir las unidades que vayamos a usar.
De la otra manera importando un archivo `.css`, es mas sencillo usamos CSS normal en un archivo especifico
TodoCounter.css
```
h1 {
  font-size: "24px";
  text-align: "center";
  margin: 0;
  padding: "48px";
}
```
Import en TodoCounter.js
```
import './TodoCounter.css';
```
Y listo con eso el proyecto sigue identico.




# Repositorio base del Curso de Introducción a React.js en Platzi

¡Hola, Platzinauta!

En este repositorio encontrarás el código de todas las clases del [Curso de Introducción a React.js](https://platzi.com/reactjs). Para empezar solo debes clonar este repositorio (`git clone`), instalar sus dependencias (`npm i`) y ejecutar la aplicación (`npm start`).

La rama principal contiene el código con el que eempezamos el curso. En las demás ramas encontrarás el código de las siguientes clases y finalmente el deploy de la aplicación.

¡Mucha suerte aprendiendo React! #NuncaParesDeAprender

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
