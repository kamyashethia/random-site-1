import React from 'react';
import './App.css';


function Card(props) {
  return <div>Hello, {props.value}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Card
          value="Sample Card"
         >

	       </Card>
      </header>
    </div>
  );
}

export default App;
