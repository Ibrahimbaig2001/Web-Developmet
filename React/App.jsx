import { useState,useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('Harry')
  const [form,setForm] = useState({email:"", phone:""})
  // const [form.setForm] = useState({}) declaring form as an empty object
  //  one method is to use form?.email to avoid the error or use the below method
  // I we keep the form as empty then we wll use <input type="text" name='email' value={form.email?form.email:""} onChange={handleformChange}/>
  // Same for phone as well
  const handleClick = ()=>{
    alert("Hey I am clicked")
  }
  const handleMouseOver = ()=>{
    alert("Hey I am a red Div")
  }
  const handleChange = (e) =>{
    setName(e.target.value)
  }
  const handleformChange = (e) =>{
    setForm({...form,[e.target.name]:e.target.value})
  }
  
  return (
    <>
    <div className="button">
      <button onClick={handleClick}>Click Me</button>
      </div>
      <div className="red" onMouseOver={handleMouseOver}>I am a red Div</div>
      <input type="text" value={name} onChange={handleChange} />
      <input type="text" name='email' value={form.email} onChange={handleformChange}/>
      <input type="text" name='phone' value={form.phone} onChange={handleformChange} />
      </>
  )
}

export default App
