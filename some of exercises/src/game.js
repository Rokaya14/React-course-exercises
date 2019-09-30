import React ,{Component} from 'react';

class Game extends Component {
constructor(props){
    super(props);
    this.state={
    score : 1,};
    }
rondomnum= (e)=>{
    let rand = Math.floor(Math.random()*10 +1)
    this.setState({score : rand , clicked:true})
}


render(){
    return(
        <div>
        <h1>your Number is : {this.state.score}</h1>
        <div>
        
        { this.state.score === 7 ? <h1> You Win !</h1> :
       <button onClick={this.rondomnum}>Rondom Num</button> 
        }
        </div>
        </div>


         )
}
} 
export default Game ;