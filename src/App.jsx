import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setSuperPower] = useState('');
  const [displayCharacter, setDisplayCharacter] = useState(false);
  return (
    <div className="App">
      <h1>Build a hero</h1>
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="">Age:</label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label htmlFor="">Height:</label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        <label htmlFor="">Superpower:</label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setSuperPower(event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          setDisplayCharacter(true);
        }}
      >
        Display Character
      </button>
      <h2>Hero Info</h2>
      {displayCharacter && (
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Height: {height}</li>
          <li>Super power: {superPower}</li>
        </ul>
      )}
    </div>
  );
}
