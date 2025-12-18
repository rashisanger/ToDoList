import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReduxUi from './ReduxExample/ReduxUi'
import TodoUI from './ToDoList/TodoUI'
function App() {
  const [count, setCount] = useState(0)

  return(
    <div>
      {/* <ReduxUi/> */}
      <TodoUI/>
    </div>
  )
   
}
 
export default App
