import React from 'react'

const Read = (props) => {
    const todos = props.todos
    const rendertodos = todos.map((todo)=>{
    return <li style={{color: todo.isCompleted? "green" : "red"}} key={todo.id}>
      {todo.title} {todo.isCompleted?"✅":"❌"}
    </li>
  })
  return (
    <>
        <h1 style={{color:"green"}}>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </>  // fragment tag or empty tags -> not show in real dom
  )
}

export default Read