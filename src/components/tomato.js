import React, { Component } from 'react'
import tomato from '../img/tomato.svg'

class Tomato extends Component {

  tomatoStyles = (angle) => ({
    width: '30%',
    height: 'auto',
    transform: `rotate(${angle}rad)`,
    transition: '300ms ease all'
  })

  clickHandler = () => console.log('Clicked!')
  render() {
    const { onTomatoClick, angle } = this.props
    const tomatoShadowStyles = {
      width: '95px',
      height: '5px',
      marginLeft: '43%',
      marginTop: '10px',
      position: 'absolute'
    }
    return (
      <div>
        <img src={tomato} alt="tomato" onClick={() => onTomatoClick()} style={this.tomatoStyles(angle)} />
        <div style={tomatoShadowStyles}></div>
      </div>
    )
  }
}

export default Tomato