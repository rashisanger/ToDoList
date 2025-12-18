import { useState } from 'react'
import './App.css'
import TodoUI from './ToDoList/TodoUI'
function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      <TodoUI/>
    </div>
  )
   
}
 
export default App
