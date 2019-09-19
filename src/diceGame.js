import React ,{Component} from 'react';
import './dicegame.css' ;
import Die from './dice'
class Diegame extends Component {
render(){
return(
<div>
<Die face="one"/>
<Die face="two"/>
</div>
)}

}
export default Diegame ;