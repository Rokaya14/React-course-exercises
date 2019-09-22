import React,{Component} from 'react';
//import Pokemon from './pokemon';
//import Game from './game'
import './App.css';
//import Diegame from './diecgame/diceGame';
import Lottery from './ballgame/lottery';
class App extends Component {
  render(){
  return(
    <div className="App">
    <Lottery/>
    <Lottery maxball= {4}/>
    </div> 
  );
}} 

export default App;
/*<Pokemon 
      id = {4}
      name="CHARMENDAR *_*"
      />   */