const App = () => {
  let n = 12   // number
  let s = "hello World"  //string
  let b = false  // boolean  
  let nu = null // null
  let un = undefined // undefined
  let arr = [12,"hello", true, null, undefined, "hii"]

  // null, true, undefined are the reserved keywords of javascript -- we can not display them in browser

  return (
    <div>
      <h1>Datatype</h1>
      <h2>Number : {n}</h2>
      <h2>String : {s}</h2>
      <h2>boolean : {b ? "hello" : "not hello"}</h2>
      <h2>null : {nu}</h2>
      <h2>undefined : {un}</h2>
      <h2>Array: {arr}</h2>
    </div>
  )
}

export default App