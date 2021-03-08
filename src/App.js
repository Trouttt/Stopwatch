import React, { Component} from 'react';
import stopwatch from './assets/cronometro.png'
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="container">
        <img alt="stopwatch" src={stopwatch} className="img"/>
        <p className="timer">0.0</p>
        <div className="buttonArea">
          <button className="button">VAI</button>
          <button className="button">LIMPAR</button>
        </div>
      </div>
    )
  }
}
export default App;
