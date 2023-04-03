// import React, { useState, useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetch("https://dummyjson.com/todos/random")
//       .then((res) => res.json())
//       .then((data) => {
//         const randomTodos = Array.from({ length: 10 }, () => data);
//         setTodos(randomTodos);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Random Todos</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             <p>{todo.todo}</p>
//             <p>Completed: {todo.completed.toString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
//with this code I always get same random todo

import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      const randomIndexes = Array.from({ length: 10 }, () =>
        Math.floor(Math.random() * data.todos.length)
      );
      const randomTodos = randomIndexes.map((index) => data.todos[index]);
      setTodos(randomTodos);
    };

    fetchTodos().catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>Random Todos</h1>
      <ul className="list">
        {todos.map((todo) => (
          <li className="item" key={todo.id}>
            <p>{todo.todo}</p>
            <p>Completed: {todo.completed.toString()}</p>
            <p>User ID: {todo.userId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
