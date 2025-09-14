import React from 'react'
import './Read.css'

const Read = (props) => {
    const todos = props.todos
    const settodos = props.settodos

    const DeleteHandler = (id)=>{
      const filteredtodo = todos.filter((todo) => todo.id != id);
      settodos(filteredtodo)
    }

    const rendertodos = todos.map((todo)=>{
    return <li key={todo.id}>
      {todo.title} {todo.isCompleted?"✅":"❌"} | <span onClick={()=>{DeleteHandler(todo.id)}}>Delete</span>
    </li>
  })

  return (
    <>
        <h1 className='read_list_heading'>Pending Todos</h1>
      <ol>{rendertodos}</ol>
    </>  // fragment tag or empty tags -> not show in real dom
  )
}

export default Read