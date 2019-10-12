import React ,{Component} from 'react';
import './Box.css'
class Box extends  Component {
    render(){
        return(
            <div className="container">
                <div className="box"
                  style={
                    { height:`${this.props.hight}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.color 
                    }
                }/>
                <button onClick={ this.props.removingitem}>Remove </button>
            </div>
        )
    }
}
export default Box ;