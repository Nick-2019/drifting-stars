import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box/>

      </header>
    </div>
  );
}

export default App;
