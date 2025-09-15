import React,{useState} from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {
    const todos = props.todos
    const settodos = props.settodos
    const [title, settitle] = useState("");
      const [completed, setcompleted] = useState(false)
      
      const submitHandler = (e)=>{
          e.preventDefault();
          const newtodo = {
            id:nanoid(),
            title,
            isCompleted:completed
          }
      
          let copytodos = [...todos]
          copytodos.push(newtodo)
          settodos(copytodos)
      
          //settodos([...todos,newtodo])  // short form of doing same thing
      
          settitle("")
        }

    // const buttoncss = {
    //     color : "white",
    //     padding : "5px 10px",
    //     borderRadius : "10px",
    //     border : "none",
    //     backgroundColor : "black",
    //     fontSize : "18px"
    // }
  return (
    <div className='border w-[70%] p-10 text-center'>
        <h1>Create Tasks</h1>
      <form onSubmit={submitHandler}>
        <input type="text" 
        placeholder='title' 
        onChange={(e)=>settitle(e.target.value)}
        value={title}
        />
        <br /><br />
        <input type="checkbox"        //these properties of inputs are called props or attributes in html
        onChange={(e)=>setcompleted(e.target.checked)} 
        checked={completed}
        /> Completed
        <br /><br />
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default Create