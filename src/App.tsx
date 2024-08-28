"use client"
// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
// import { Amplify } from 'aws-amplify';


// const client = generateClient<Schema>();
// async function loadConfig() {
//   console.log(process.env.NODE_ENV);
//   if (process.env.NODE_ENV !== 'production') {
//     const outputs = await import('../amplify_outputs.json');
//     Amplify.configure(outputs);  
//   }    
// }

function App() {
    
  // loadConfig();
  // function deleteTodo(id: string) {
  //   client.models.Todo.delete({ id })
  // }

  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  return (
    <Authenticator /*socialProviders={["google"]}*/>
      {({ signOut, user }) => (
      <main>
        <h1>Hello {user?.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
        /* <button onClick={signOut}>Sign out</button>
        <h1>My todos</h1>
        <button onClick={createTodo}>+ new</button>
        <ul>
          {todos.map((todo) => (
            <li 
              onClick={() => deleteTodo(todo.id)}
              key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </main> */
      )}
    </Authenticator>
  );
}

export default App;