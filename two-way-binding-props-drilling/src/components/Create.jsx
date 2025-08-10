import React,{useState} from 'react'

const Create = (props) => {
    console.log(props)
     const [fullname, setfullname] = useState("")
      const [age, setage] = useState("")
    const SubmitHandler = (e)=>{
    e.preventDefault()
    const newuser = {fullname,age}
    console.log(newuser);  // this data will be shared in api backend database 
  }

  return (
    <div>
        <h1>Register user</h1>
        <form onSubmit={SubmitHandler}>
            <input type="text"
            placeholder='Full name'
            onChange={(e)=>{setfullname(e.target.value)}}
            value={fullname} />
            <input type="number"
            placeholder='Age'
            onChange={(e)=>{setage(e.target.value)}}
            value={age} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Create