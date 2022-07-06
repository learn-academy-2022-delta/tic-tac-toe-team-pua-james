import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'
import Board from './components/Board'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      userOne: true,
      userTwo: false
    }
  }

  //   componentDidMount() {
  //   let firstPlayer = 'X'(this.state.userOne)
  //   let secondPlayer = 'O'(this.state.userTwo)
  //   this.setState({userOne: firstPlayer, userTwo: secondPlayer})
  // }


  handleGamePlay = (index) => {
    const { squares, userOne, userTwo } = this.state
      if(index === userOne) {
        
     //user input to be one of the nulls, if index === any of the square values put X or O. How do we distinguish between users?   
      }
  }
  render() {
    
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className='gameboard'> 
        {this.state.squares.map((value, index) => {
          return(
        <Square 
        key={index}
        value={value}
        index={index}
        handleGamePlay= {this.handleGamePlay}
        />
        )
          })}
        </div>
      </>
    )
  }
}
export default App
