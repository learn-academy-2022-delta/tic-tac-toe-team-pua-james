import React, { Component } from 'react'
import Square from './Square';

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null)
            // userOne: true,
        };
    }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.userOne ? 'X' : 'O';
    this.setState({
      squares: squares,
      userOne: !this.state.userOne,
    });
  }

  renderSquare(i) {
    return(
     <Square
     value = {this.state.squares[i]}
     onClick = {() => this.handleClick(i)}
     />
    );
  }
}
export default Board
