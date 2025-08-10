import React, { useState } from 'react'
import { useFormState } from 'react-dom'

const App = () => {
  const [user,setuser] = useState([
    {name:"John",age:18},
    {name:"raosahab",age:20},
    {name:"vipul",age:28},
  ])

  const renderUser = user.map((user,index)=>{
    return <li key={index}>{user.name}</li>
  })

  const [fullname, setfullname] = useState("")

  const changeHandler = (e)=>{
    setfullname(e.target.value)
  }
console.log(fullname);

  return (
    <>
    <h1>Register User</h1>
    <form action="">
      <input 
      onChange={changeHandler}
      value={fullname}
      type="text" 
      placeholder='Full name'/>


      <input type="number" placeholder='Age'/>
      <button>Submit</button>

    </form>
    <hr />
      <h1>Userdata</h1>
      <ol>{renderUser}</ol>
    </>
  )
}

export default App