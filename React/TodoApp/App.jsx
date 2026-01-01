import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import { v4 as uuidv4 } from 'uuid';


export default function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished,setshowFinished ] = useState(true)
  useEffect(() =>{
    let todoString = localStorage.getItem("todos")
    if (todoString){ 
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  },[])
  const saveTols = () => {
    localStorage.setItem("todos",JSON.stringify(todos))
    
  }
   
  const handleEdit = (e,id) =>{
    let t = todos.find(i => {return i.id === id})
    if (!t) return;
    setTodo(t.todo)
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveTols()

  }
  const handleDelete = (e,id) =>{
    //console.log("delete clicked")
    let index = todos.findIndex(item =>{
      return item.id === id
    
    })
    if(index === -1) return;
    let newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
    saveTols()
  

  }
  const handleAdd = () =>{
    setTodos([...todos,{id: uuidv4(),todo, isCompleted:false}])
    setTodo("")
    saveTols()
  }
  const handleChange = (e) =>{
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) =>{
    let id = e.target.name
    let index = todos.findIndex(item => item.id === id)
    if(index === -1) return;
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveTols()
  }
  const toggleFinish = (e) => {
    setshowFinished(!showFinished)


  }
  return (
    <>
      <Navbar/>
      <div className="container mx-auto bg-violet-100 my-5 rounded-xl p-5 text-center min-h-[80vh]">
        <div className="addTodo my-5">
          <h2 className="text-lg font-bold">Add a Todo</h2>
          <input onChange= {handleChange} value={todo} type="text"placeholder="Enter a new todo" className="w-1/2" />
          <button onClick={handleAdd} disabled={todo.length < 3} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-4 text-sm font-bold disabled:bg-violet-700">Add Todo</button>
        </div>
        <input type="checkbox" checked={showFinished} onChange={toggleFinish}/> Show Finished
          <h2 className="text-lg font-bold">Your Todos</h2>
          <div className="todos">
            {todos.length === 0 && <div className="m-5">No todos to display</div>}
            {todos.map(item =>{
            return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex w-1/4 my-3 justify-between">
              <input onChange={handleCheckbox}type="checkbox" checked={item.isCompleted} name={item.id} id="" />
              <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={(e) => handleEdit(e,item.id)} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold">Edit</button>
                <button onClick={(e)=>{handleDelete(e,item.id)}} className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-1 text-sm font-bold">Delete</button>
              </div>
            </div>
            
          })}
          </div>
      </div>
    </>
  )
}
