import React, {useState} from 'react'
import Create from './components/Create';
import Read from './components/Read';

const App = () => {

  const [todos, settodos] = useState([
    {id:1, title:"kaam krr le",isCompleted:false}
  ])

  return (
    <div className='w-screen h-screen bg-gray-800 flex p-10 text-white'>
      <Create todos = {todos} settodos = {settodos}/>
      <hr />
      <Read todos = {todos} settodos = {settodos}/>
    </div>
  )
}

export default App


/* 

Two way binding of form elements

const [gender, setGender] = useState("female")
  const [city, setcity] = useState("kolkata")

<input type="radio" 
        value="male" 
        onChange={(e)=>setGender(e.target.value)}
        checked = {gender == "male" && true}
        />
        male
        <input type="radio" 
        value="female"
        onChange={(e)=>setGender(e.target.value)}
        checked = {gender == "female" && true}
        />
        Female
        <br /><br />
        <select onChange={(e)=> setcity(e.target.value)} value={city}>
          <option value="delhi">Delhi</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">kolkata</option>
        </select>
 */