import React, {Component} from 'react'
const remote = window.require("electron").remote

class TitleBar extends Component {
  state = {}
  
  titleButtonHandler = (type) => {
    switch (type) {
      case 'quit':
        const window = remote.getCurrentWindow()
        window.close()
        break
      default:
        console.log('Weird click mate...', type)
    }
  }

  render () {
    const titleBarStyles = {
      WebkitAppRegion: 'drag',
      height: '24px',
      backgroundColor: 'darkviolet',
      padding: 'none',
      margin: '0px',
      color: '#00e390',
      fontWeight: 'bold'
    }

    const titleStyles = {
      position: 'fixed',
      top: '0px',
      left: '6px'
    }

    const titleButtonStyles = {
      WebkitAppRegion: 'no-drag',
      position: 'fixed',
      top: '0px',
      right: '6px'
    }

    const minimizeButtonStyles = {}
    const expandButtonStyles = {}
    const closeButtonStyles = {}

    return (
      <div style={titleBarStyles}>
        <div style={titleStyles}>Pomodoro Timer</div>
        <div style={titleButtonStyles}>
          <button type="button" style={minimizeButtonStyles}>-</button>
          <button type="button" disabled={true} style={expandButtonStyles}>+</button>
          <button type="button" style={closeButtonStyles} onClick={() => this.titleButtonHandler('quit')}>x</button>
        </div>
      </div>
    )
  }
}

export default TitleBar