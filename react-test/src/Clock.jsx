import React from 'react';

import AlarmClock from './AlarmClock';

export class Clock extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1 id="clock"> { this.state.date.toLocaleTimeString() }</h1>
        <AlarmClock date = { this.state.date.toLocaleTimeString() }/>
      </div> 
    );
  }
}

export default Clock;