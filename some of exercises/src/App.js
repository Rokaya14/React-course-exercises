import React,{Component} from 'react';
//import Pokemon from './pokemon';
//import Game from './game'
import './App.css';
//import Diegame from './diecgame/diceGame';
//import Lottery from './ballgame/lottery';
//import Numlist from './ChangeNumber/Numlist'
import Board from './lightGame/board'
class App extends Component {
  render(){
  return(
    <div className="App">
    <Board/>
    </div> 
  );
}} 

export default App;
/*<Pokemon 
      id = {4}
      name="CHARMENDAR *_*"
      />   */