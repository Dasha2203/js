import React from 'react';


export class AlarmClock extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      currentTime: this.props.date,
      time: '',
      shouldAlarmShow: false,
    }
  }

  componentDidMount(){
    
      this.interval = setInterval(
        () => this.checkAlarmClock(),
        1000);
    
    //setInterval(console.log(this.props.date),1000);
    this.timerID = setInterval(
      () => this.setState({currentTime: this.props.date}),
      1000
    );
  }

  

  checkAlarmClock(){
    if(this.state.time == 'undefined' || !this.state.time) {
      this.alarmMessage = "Введите время будильника";
    } else {
      this.alarmMessage = "Время будильника: " + this.state.time;
      if(this.state.currentTime === this.state.time) {
        alert("Wake Up!");
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
      time: event.target.value +':00',
      shouldAlarmShow: true
    });
  }

  disableAlarm(){
    this.setState( {
      shouldAlarmShow: false
    })
  }


  render() {
    return(
      <div>
        <form>
          <input type="time" id="get-time" onChange={this.getTime}></input>
          <h3>{this.alarmMessage}</h3>
          <button>Turn Off</button>
        </form>
      </div>
    );
  }


}

export default AlarmClock;