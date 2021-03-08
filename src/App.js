import React, { Component} from 'react';
import stopwatch from './assets/cronometro.png'
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      number:0,
      button:'Start'
    }
    this.timer = null;
    this.start = this.start.bind(this);
    this.clean = this.clean.bind(this);
  }

  start(){
    let state = this.state
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.button = "Start"
    }else{
      this.timer = setInterval( () => {
        let number = this.state.number;
        number += 0.1;
        this.setState({number:number});
        this.setState({status:true});
      },100)
      state.button = "Pause"
    }
    this.setState(state);
  }
  clean(){
    if(this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    let state = this.state;
    state.number = 0.0;
    state.button = "Start";
    this.setState(state)
  }
  render(){
    return(
      <div className="container">
        <img alt="stopwatch" src={stopwatch} className="img"/>
        <p className="timer">{this.state.number.toFixed(1)}</p>
        <div className="buttonArea">
          <button className="button" onClick={this.start}>{this.state.button}</button>
          <button className="button" onClick={this.clean}>Clean</button>
        </div>
      </div>
    )
  }
}
export default App;
