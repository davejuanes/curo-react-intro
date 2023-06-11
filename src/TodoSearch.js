import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  return (
    <>
      <div className="container_search">
        <input type="search" placeholder="Search..."
        onChange={(event) => {
          console.log('Escribiste en el Todo Search')
          console.log(event)
          console.log(event.target);
          console.log(event.target.value);
        }} />
      </div>
    </>
  );
}

export { TodoSearch };
