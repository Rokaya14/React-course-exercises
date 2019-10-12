import React ,{Component} from 'react';
import uuid from "uuid/v4"
class Form extends Component{
    constructor (props){
        super(props);
        this.state={userName: "", password:"" , email:"" ,id:uuid()}
        this.handelchange=this.handelchange.bind(this)
    }
    handelchange(evt){
        this.setState({ 
            [evt.target.name]:evt.target.value
        })
    }
    render(){    
    return(
        <div>
            <h1>Form-multible input</h1>
            <form>

                <input  type="text"
                        name="userName" 
                        value ={this.state.userName} 
                        onChange={this.handelchange}/>
                    
                <input  type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="email"
                        onChange={this.handelchange}/>

                <input  type="password" 
                        name="password" 
                        value={this.state.password} 
                        placeholder="password" 
                        onChange={this.handelchange} />
            </form>
        </div>
    )
}

}
export default Form ;