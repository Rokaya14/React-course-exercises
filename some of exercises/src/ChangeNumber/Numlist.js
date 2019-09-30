import React ,{Component} from 'react';
import Numberitem from './Numberitem'
class Numlist extends Component {
    constructor(props){
        super(props);
        this.state= {Nums: [1 , 2 ,6 , 3 ,4 ]} ;
        this.remove = this.remove.bind(this)
    }

    remove (num){
        this.setState( st=> (
         { Nums : st.Nums.filter(n => n !== num )}
        ));
    }
    render(){
        let nums =this.state.Nums.map( n=> (
        <Numberitem key={n} value= { n  } remove={this.remove}/> 
         )) 
        return( 
            <div>
                <h1>First Number List </h1>
                {nums }
            </div>
        )
    }
}
export default Numlist ;