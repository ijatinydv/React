import { useState } from "react"

const App = () => {

  const [todos,settodos] = useState([
    {id:1,title:"kaam krr le bhai",iscompleted:false}
  ])

  const [title  , settitle  ] = useState("")

  return (
    <div>
      <h1>Create task</h1>
      <form >

        <input  
        type="text" 
        placeholder="title"
        onChange={(e)=>{settitle(e.target.value)}}
        value={title} />

        <br /> <br />

        <input 
        type="checkbox" 
        onChange={(e)=>{console.log(e.target.checked)}}
        /> Completed

        <br /><br />
        
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default App