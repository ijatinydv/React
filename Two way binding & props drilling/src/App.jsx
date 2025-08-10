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
  const [age, setage] = useState("")

  const SubmitHandler = (e)=>{
    e.preventDefault()
    const newuser = {fullname,age}
    console.log(newuser);  // this data will be shared in api backend database 
  }

  return (
    <>
    <h1>Register User</h1>
    <form onSubmit={SubmitHandler}>
      <input 
      onChange={(e)=> setfullname(e.target.value)}
      value={fullname}
      type="text" 
      placeholder='Full name'/>


      <input 
      onChange={(e)=> setage(e.target.value)}
      value={age}
      type="number" placeholder='Age'/>
      <button>Submit</button>

    </form>
    <hr />
      <h1>Userdata</h1>
      <ol>{renderUser}</ol>
    </>
  )
}

export default App