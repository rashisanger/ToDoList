import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset,addbyValue } from './ReduxSlicer';

const ReduxUi = () => {
    const counterState=useSelector(state=>state.countRed.count);
    const dispatch=useDispatch();
  return (
    <div>
        <h2>Count:{counterState}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
        <button onClick={()=>dispatch(addbyValue(8))}>Add by value</button>
    </div>
  )
}

export default ReduxUi