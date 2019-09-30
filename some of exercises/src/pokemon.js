import React ,{Component} from 'react';

class Pokemon extends Component {
    static defaultProps = {
        pokemon :[
            {id:4 , name:"charmender" , type:"pokemooon"}
            ,{id:5 ,name:"bekaaatshoo", type:"pokee"}
        ]
        };
    render()
    {
     return ( 
      <div>

          <h1>pokeedex</h1>
            {this.props.pokemon.map((p)=>(
                <h1 className="pokee">ID:{p.id} <br/> name: {p.name}</h1>
              //  <p>nmae: </p>
            ))} 
 
      </div>
        )
    }

}

export default Pokemon 
/*  <div className="pokee">
            <p>  hello from pokemon ! ! !  </p>  
            <h1>{this.props.name}</h1>
            <img className="cho" src="https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/900px-004Charmander.png" />  
            <div>ID= {this.props.id}</div>
        </div> */