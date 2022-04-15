import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand="Apple" price="5000"></MyComponent>
      <MyComponent brand="Microsoft" price="10000"></MyComponent>
      <MyComponent brand="Google" price="570"></MyComponent>
      <MyComponent></MyComponent>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>Users Loaded: {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h5>Name: {props.name}</h5>
      <p>Hi kaga! call me, {props.phone}</p>
    </div>
  )
}

function MyComponent(props) {
  const [points, setPoints] = useState(1);
  const myStyle = {
    backgroundColor: 'lightblue',
    padding: '5px',
    borderRadius: '15px',
    border: '3px solid blue',
    margin: '10px'
  }
  const handleAddPoint = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return (
    <div style={myStyle}>
      <h1>{props.brand} Saga Rega!! </h1>
      <p>Asking money: {props.price}, I have points {points}</p>
      <button onClick={handleAddPoint}>Add Points</button>
    </div>
  )
}

export default App;
