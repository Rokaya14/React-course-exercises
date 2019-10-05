import React ,{Component} from 'react';
import "./Board.css"
class Cell extends Component {
    constructor(props){
        super(props);
        this.handelclick=this.handelclick.bind(this)
    }
    handelclick(evt){
        this.props.flipCellsAroundMe();
    }
    render(){       
        let classes = ` Cell + ${this.props.isLit? "Cell-lit": "" } `
       
        return(
            <td className={classes} onClick={this.handelclick}></td>
        )
    }
}
export default Cell ;