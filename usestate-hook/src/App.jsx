import { useState } from 'react'
import './App.css'



function App() {
  const [name, setName] = useState('Tom');

function changeName() {
  name == ('Tom') ? setName('Jan') : setName('Tom');
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
