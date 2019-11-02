import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/box'
import Window from './components/window'
import {useSelector, useDispatch} from 'react-redux'


function App() {

  const arr = useSelector(state => state.textBox)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Window/>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Box/>

      </header>
    </div>
  );
}

export default App;
