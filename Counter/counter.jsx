import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const addCount = () => {
        setCounter(counter + 1)
    }

    return (
      <div id='container'>
        <div id='navbar'>
          Counter.js
        </div>
        <div id='counter'>
          <h1>Count: {counter}</h1>
          <button onClick={addCount}>Increment</button>
        </div>
      </div>
    )
  }

  export default Counter;