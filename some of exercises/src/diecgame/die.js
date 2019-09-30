import React ,{Component} from 'react';
import './dicegame.css'

class Die extends Component {
render(){
return  <i className={ `die fas fa-dice-${this.props.face} ${this.props.Rolling? "shaking" : "" }` }></i>
}}
export default Die ;