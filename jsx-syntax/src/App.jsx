import './App.css'

const hello = 'Hello';
const world = 'World';

const element = <h1>{hello} {world}</h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Tom',
  lastName: 'Seidel'
};

function App() {

  return (
    <>
      <h1>{hello} {world}</h1>
      {element}
      <h2>{formatName(user)}</h2>
    </>
  )
}

export default App
