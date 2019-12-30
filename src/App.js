import React from 'react';
import './App.css';
import Card from './Card.js';
import {Suits, Numbers} from './constants.js';





function App() {
  return (
    <div className="App">
           <Card
            value="Back"
            isFacingFront={false}
           />

           <Card
            value="Sample Card"
            isFacingFront={true}
           />

           <Card
            value="Back"
            isFacingFront={false}
           />
    </div>
  );
}

export default App;
