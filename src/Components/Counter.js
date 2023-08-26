import React,{useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    

    const increment =() =>{
        setCount(count + 1);
    };
    const decrement =() =>{
        setCount(count - 1);
    };
    return (
    <>
    <h1 className='head'>Counter App</h1>
    <p className='par'>Count:{count}</p>
    <button className='btn' onClick={increment}>Increment
    </button>
    <button className='btn' onClick={decrement}>Decrement
    </button>
    </>
  )
}
export default Counter