import React ,{Component} from 'react';
import Cell from './cell'
import "./Board.css"
class Board extends Component {
    static defaultProps={
        nrows:5 ,
        nclos:5,
        chancelLightStartsOn :0.25
     }
    constructor(props){
        super(props);
        this.state ={
            hasWon : false,
            board : this.createBoard()
        }
        this.flipCellsAround =this.flipCellsAround.bind(this)

    }
    
    createBoard(){
        let board=[];
        for(let y=0 ; y< this.props.nrows ;y++){
            let row =[];
            for (let x = 0; x < this.props.nclos; x++){
                row.push(Math.random() < this.props.chancelLightStartsOn)     
            }
        board.push(row)
        }
        return board ;
    }
    flipCellsAround(coord) {
        console.log("flipping"+ coord);
        
        let {nclos, nrows} = this.props;
        let board = this.state.board;
        let [y, x] = coord.split("-").map(Number);
    
    
        function flipCell(y, x) {
          // if this coord is actually on board, flip it
    
          if (x >= 0 && x < nclos && y >= 0 && y < nrows) {
            board[y][x] = !board[y][x];
          }
        }
        flipCell(y,x)
        flipCell(y+1 ,x)
        flipCell(y,x+1)
        flipCell(y-1,x)
        flipCell(y,x-1)
        // TODO: flip this cell and the cells around it
    
        // win when every cell is turned off
        // TODO: determine is the game has been won
        let hasWon = board.every(row=> row.every (cell => !cell)) ;
        this.setState({board :board , hasWon:hasWon});
      }
    
    render(){

        if (this.state.hasWon){
            return <h1>YOU WON !! </h1>
        }
        
        let tblBoard=[]; 
        for (let y = 0; y < this.props.nrows; y++) {
            let row =[];
            for (let x = 0; x <this.props.nclos; x++) {
                let coord =`${y}-${x}`
                row.push(<Cell 
                    key={coord} 
                    isLit= {this.state.board[y][x]}
                    flipCellsAroundMe={()=> this.flipCellsAround(coord)}
                    />);
            }
            tblBoard.push(<tr key={y} >{row}</tr>)
        }
        return(
            <div>
                <div className="Board-title">
                   <div className="neon-orange">LIGHT</div> 
                   <div className="neon-blue">OUT</div>
                </div>
                
            <table className="Board">
                <tbody>{tblBoard}</tbody>
            </table>
            </div>
        )
    }
}
export default Board;