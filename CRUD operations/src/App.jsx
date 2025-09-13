import React, {useState} from 'react'

const App = () => {

  const [todos, settodos] = useState([
    {id:1, title:"kaam krr le",isCompleted:false}
  ])

  const [title, settitle] = useState("");
  const [completed, setcompleted] = useState(false)
  const [gender, setGender] = useState("female")
  const [city, setcity] = useState("kolkata")

  return (
    <div>
      <h1>Create Tasks</h1>
      <form>
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
        <br /><br />
        <button>Create Todo</button>
      </form>
    </div>
  )
}

export default App