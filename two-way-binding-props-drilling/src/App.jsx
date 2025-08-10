import React,{useState} from 'react'
import Read from './components/Read'
import Create from './components/create'

const App = () => {
  const [user,setuser] = useState([
          {name:"John",age:18},
          {name:"raosahab",age:20},
          {name:"vipul",age:28},
        ])

  return (
    <>
    <Create/>
    <hr />
    <Read users = {user} setuser = {setuser}/>   {/*here we passing data with the help of props */}
    </>
    // Read(users,setusers)
  )
}

export default App