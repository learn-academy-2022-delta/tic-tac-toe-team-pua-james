import React, { Component } from 'react'

class Square extends Component {

  handleClick = ()=> {
    alert(this.props.index)
  }

  render() {
    return(
      <>
       <button className='square' onClick={this.handleClick}>
          {this.props.value}
        </button>
      </>
    )
    }
} 
export default Square
