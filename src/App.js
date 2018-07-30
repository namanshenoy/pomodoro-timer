import React, { Component } from 'react'
import './App.css'
import Tomato from './components/tomato'
import TitleBar from './components/titlebar'

class App extends Component {
  state = {
    angle: 0,
    totalTime: 0,
    timeCompleted: 55,
    timer: null,
    tip: true
  }

  componentDidMount () {
    this.startHandler()
  }

  componentWillUnount () {
    this.clearInterval(this.state.timer)
  }

  tickHandler = () => {
    console.log('Tick!')
    this.setState({angle: this.state.angle + 0.10966219245, timeCompleted: this.state.timeCompleted + 1})
    this.getTime()
  }

  stopHandler = () => {
    clearTimeout(this.state.timer)
    this.setState({timer: null})
  }

  startHandler = () => {
    let timer = setInterval(this.tickHandler, 1000)
    this.setState({timer})
  }

  tomatoClickHandler = () => this.state.timer ? this.stopHandler() : this.startHandler()

  getTime = () => {
    const totalSeconds = this.state.timeCompleted
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds - minutes * 60
    const hours = Math.floor(totalSeconds/3600)
    
    const hoursText = hours > 0 ? `${hours}:`.padStart(3, '0') : ''
    const minutesText = hours > 0 || minutes > 0 ? `${minutes}:`.padStart(3, '0') : ''
    const secondsText = seconds.toString().padStart(2, '0')
    return `${hoursText}${minutesText}${secondsText}`
  }
  getAngle = () => this.state.angle

  render() {
    const toolTipStyles = {
      padding: '3%',
      color: 'red',
      fontWeight: 'bold',
      fontSize: '25px'
    }
    return (
      <div className="App">
        <TitleBar></TitleBar>
        {
          this.state.tip && 
          <div style={toolTipStyles}>
            Click the Tomato to start and stop the timer!
          </div>
        }
        <Tomato  angle={this.state.angle} onTomatoClick={this.tomatoClickHandler}></Tomato>
        <div>
          <h3>{this.state.timeCompleted > 59 ? <span>Seconds</span> : <span>Time</span> } completed: {this.getTime()}</h3>
        </div>
        {
          this.state.timer ?
            this.state.timer && <button type="button" onClick={this.stopHandler}>Stop!</button>
          :
            <button type="button" onClick={this.startHandler}>Start!</button>
        }
      </div>
    );
  }
}

export default App
