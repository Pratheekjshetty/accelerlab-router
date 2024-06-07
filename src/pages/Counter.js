import React,{useState} from 'react'

export default function Counter() {
    const [value,setCounter]=useState(0);
    const handleIncrease=()=>{
        setCounter(value+1)
    }
    const handleDecrease=()=>{
        setCounter(value-1)
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleIncrease}>Increase+1</button>
        <button onClick={handleDecrease}>Decrease-1</button>
    </div>
    
  )
}
