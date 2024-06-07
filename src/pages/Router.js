import React,{useState} from 'react'

export default function Router() {
    const [value,setCounter]=useState(0);
    const handleIncrease=()=>{
        setCounter(value+2)
    }
    const handleDecrease=()=>{
        setCounter(value-2)
    }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={handleIncrease}>Increase+2</button>
        <button onClick={handleDecrease}>Decrease-2</button>
    </div>
  )
}
