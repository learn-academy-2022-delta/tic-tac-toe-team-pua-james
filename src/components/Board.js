import React, { Component } from 'react'

class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        };
    }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares :squares})
    // this.props.handleGamePlay(this.props.index)
  }

  renderSquare(i) {
    return(
     <Square
     value = {this.state.squares[i]}
     onClick = {() => this.handleClick(i)}
     />
    )
  }
}
export default Board
