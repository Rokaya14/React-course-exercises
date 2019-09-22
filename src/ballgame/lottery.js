import React ,{Component} from 'react';
import Ball from './Ball';
import './Ballgame.css'

class Lottery extends Component {
    static defaultProps={
        maxnum: 20,
        maxball: 5
    }
    constructor(props){
        super(props); 
        this.state={nums:Array.from({length: this.props.maxball })} //empty array with length= maxball
    }



    generateRandomBalls=(e)=>{
        this.setState( currentState =>(
            {nums: currentState.nums.map(
                n=>Math.floor(Math.random()* this.props.maxnum) +1)
            }
            )
        )
    }
    render(){
        return(
            <section className="lottery">
                <h1>LottoOo</h1>
                <div>
                    {this.state.nums.map(n=>(
                    <Ball num={n}/>
                    ))}
                </div> 
                <br/><button onClick={this.generateRandomBalls}>Generate !</button>
            </section>
        )
    }
}
export default Lottery ; 
