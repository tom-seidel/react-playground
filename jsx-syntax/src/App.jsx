import './App.css'

const hello = 'Hello';
const world = 'World';

const element = <h1>{hello} {world}</h1>;

function App() {

  return (
    <>
      <h1>{hello} {world}</h1>
      {element}
    </>
  )
}

export default App
