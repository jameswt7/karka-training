import React, {useState} from 'react'

export const State = ()=> {
    const [count, setCount] = useState("Hi");
    function Mm(){
        setCount("hello")
    }
    return (
      <>
        <h1>{count}</h1>
        <button onClick={Mm}>Click</button>
      </>
    )
  }