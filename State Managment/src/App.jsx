import { useState } from "react"

const App = () => {
  // let n = 12   // number
  // let s = "hello World"  //string
  // let b = false  // boolean  
  // let nu = null // null
  // let un = undefined // undefined
  // let arr = [12,"hello", true, null, undefined, "hii",<h1>Hello</h1>]
  // let obj = {name:"John",age:15}

  // null, true, undefined are the reserved keywords of javascript -- we can not display them in browser

  // const profiles = [
  //   {name:"kshitij",age:28},
  //   {name:"shubham",age:45},
  //   {name:"mishra",age:18},
  // ];

  // const updatedProfiles = profiles.map((profile,index)=>{
  //   return(
  //   <li key={index}>
  //     <span>Name:{profile.name}</span><br />
  //     <small>Age: {profile.age}</small>
  //   </li>
  //   )
  // })


  // let username = "raosahab"
  const [username, setUsername] = useState("Sarthak");
  // here username is read only we can not change it....to change it we use setUsername

  const changeHandler = ()=>{
    // username = "Jatin"   
    setUsername("Jatin")                

  //  // In this case react ko nhi pta hai ki kisi ka username change hua hai because ye react ka koi inbuilt element nhi hai...aur issi liye hm usestate ka use krte hai

}
console.log(username)


  return (
    <div>

      <h1>Username</h1>
      <h2>{username}</h2>
      <button onClick={changeHandler}>Change username</button>


      {/* <h1>Rendering Json</h1>
      <ol>
        {updatedProfiles}
      </ol> */}


      {/* <h1>Datatype</h1>
      <h2>Number : {n}</h2>
      <h2>String : {s}</h2>
      <h2>boolean : {b ? "hello" : "not hello"}</h2>
      <h2>null : {nu}</h2>
      <h2>undefined : {un}</h2>
      <h2>Array: {arr}</h2>
      <h2>Array: {obj.name} | {obj.age}</h2> */}

    </div>
  )
}

export default App