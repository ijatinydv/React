const App = () => {
  // js logic
  // non paramatrized function
  const handleclick = ()=>{
    alert("button clicked")
  }
  const handleparaclick = (para)=>{
    alert(para)
  }
  
  return (
    <>
    <div>App</div>
    <div>Hello</div>
    <button onClick={handleclick}>click</button>
    <button onClick={()=>handleparaclick("hlo bhai log")}>click(para)</button>
    </>
  )
}

export default App


// a function component will always return html