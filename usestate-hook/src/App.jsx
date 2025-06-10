import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Tom');
  const [counter, setCounter] = useState(0);
  
function changeName() {
  name === ('Tom') ? setName('Jan') : setName('Tom');
}


function decrement() {
  setCounter(counter - 1);
}

function increment() {
  setCounter(counter + 1);
}

  return (
    <>
      <h1>Change Name:</h1>
      <p>{name}</p>
      <button onClick={changeName}>Change Name</button>
      <h1>Counter:</h1>
      <p className='counter'>{counter}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App
