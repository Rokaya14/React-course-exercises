import React ,{Component} from 'react';
import './Ballgame.css'

class Ball extends Component {
render(){
return  <div className='Ball'> {this.props.num >0 ? this.props.num : ""} </div>
}
}
export default Ball ;