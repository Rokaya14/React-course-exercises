import React ,{Component} from 'react';
import './dicegame.css' ;
import Die from './die'
class Diegame extends Component {
    static defaultProps={
        faces : ["one","two","three","four","five","six"] 
    };
    constructor(props){
            super(props);
            this.state= { die1:"one", die2:"one" , rolling:false }
    }
    roll=(e)=>{
        //choose random die face
        const newdie1= this.props.faces[ Math.floor(Math.random()*this.props.faces.length) ]
        const newdie2= this.props.faces[ Math.floor(Math.random()*this.props.faces.length) ]
        //change the state of the die face
        this.setState({ die1:newdie1 , die2:newdie2 , rolling: true   })
        //wait one second then make rolling true
        setTimeout( ()=>{
            this.setState({rolling:false});
        },1000  )
    }
    render(){
        return(
        <div>
        <Die face={this.state.die1} Rolling={this.state.rolling}/>
        <Die face={this.state.die2} Rolling={this.state.rolling}/>
        <br/><button onClick={this.roll} disabled={this.state.rolling} > 
             {this.state.rolling ?  "Rolling..."  : "Roll die" } 
             </button>
        </div>
        )}
}
export default Diegame ;