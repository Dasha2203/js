import React from 'react';


export class AlarmClock extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      currentTime: this.props.date,
      time: '',
      ST: false,
    }
  }

  checkTime() {
    //console.log(this.state.ST);

      this.interval = setInterval(
        () => this.checkAlarmClock(),
        1000);
      
  }

  componentDidMount(){
    setInterval(this.checkTime(),1000);
    //setInterval(console.log(this.props.date),1000);
    this.timerID = setInterval(
      () => this.setState({currentTime: this.props.date}),
      1000
    );
  }

  

  checkAlarmClock(){
    //console.log(this.state.ST);
    if(this.state.ST) {
      if(this.state.time == 'undefined' || !this.state.time) {
        this.alarmMessage = "Введите время будильника";
      } else {
        this.alarmMessage = "Время будильника: " + this.state.time;
        if(this.state.currentTime === this.state.time) {
          alert("Wake Up!");
        } 
      }  
    } 
  }

  componentWillUnmount(){
    clearInterval(this.clock);
    clearInterval(this.interval);
    clearInterval(this.timerID);
  }
  

  getTime = event => {
    this.setState({
      time: event.target.value + ':00',
      ST: true
    });
  }

  disableAlarm(){
    this.setState( {
      ST: false
    })
  }

  render() {
    return(
      <div>
        <form>
          <input type="time" id="get-time" onChange={this.getTime}></input>
          <h3>{this.alarmMessage}</h3>
          <h2>{this.state.shouldAlarmShow}</h2>
          <button onclick={this.disableAlarm}>Turn Off</button>
        </form>
      </div>
    );
  }

}

export default AlarmClock;