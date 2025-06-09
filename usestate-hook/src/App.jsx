import { useState } from 'react'
import './App.css'



function App() {
  const [name, setName] = useState('Tom');

  const chaneName = () => {
    setName('Jan');
  }

  return (
    <>
      <h1>{name}</h1>
      <button onClick={chaneName}>Change Name</button>
    </>
  )
}

export default App
