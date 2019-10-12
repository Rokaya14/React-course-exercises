import React ,{Component} from 'react';
import Box from './Box'
import Newbox from './Newbox'
class Boxlist extends Component {
    constructor(props){
        super(props);
        this.state={boxes:[]}
        this.create=this.create.bind(this);
        this.remove=this.remove.bind(this);
    }
    create(newbox){
        this.setState({
            boxes:[...this.state.boxes , newbox ]
        });
    }

    remove(id){
        this.setState({
            boxes:this.state.boxes.filter(box => box.id !== id)
        })
    }
    render(){
        const Boxes = this.state.boxes.map(box=>(
            <Box 
            key={box.id} 
            width= {box.width}
            hight={box.hight} 
            color={box.color}
            removingitem={()=>this.remove(box.id)} 
            />
        ))
        return(
            <div>
                <Newbox creatNewBox = {this.create}/>
                {Boxes}
            </div>
        )
    }
}
export default Boxlist ;