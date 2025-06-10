import { useState } from 'react'
import './App.css'



function App() {
  const [name, setName] = useState('Tom');

function changeName() {
  if (name === 'Tom') {
    setName('Jan');
  } else {
    setName('Tom');
  }
}

  return (
    <>
      <h1>Change Name:</h1>
      <p>{name}</p>
      <button onClick={changeName}>Change Name</button>
    </>
  )
}

export default App
