import React ,{Component} from 'react';

class Numberitem extends Component {
    constructor(props){
        super(props);
        this.handelclick=this.handelclick.bind(this)
    }
    handelclick(evt){
        this.props.remove(this.props.value)
         // when click on X behind 5   >>  remove( 5 )
    }
    render(){

        return(
            <li>
                 {this.props.value}   <emsp/> 
                <button onClick={this.handelclick} >  X</button>
            </li>
        )
    }
}

export default Numberitem ;