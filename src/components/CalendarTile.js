import React, { Component } from 'react';
import EventModal  from './EventModal.js'

class CalendarTile extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingModal: false};
    console.log(props);
  }

  render() {
    let modal;
    if(this.state.isShowingModal){
      // console.log("IN IF STATEMENT")
      modal = <EventModal />;
      // console.log(modal);
    }

    let dayName;
    console.log("before switch");

    switch(this.props.date.getDay()) {
      case 0: dayName = 'SUN'; break;
      case 1: dayName = 'MON'; break;
      case 2: dayName = 'TUE'; break;
      case 3: dayName = 'WED'; break;
      case 4: dayName = 'THU'; break;
      case 5: dayName = 'FRI'; break;
      case 6: dayName = 'SAT'; break;
      default: dayName = "";
    }
    
    console.log("before return statement");
    console.log(dayName);
    return (
      <div className="calendarTile" onClick={this.onTileClick}>
        {dayName.length > 0
          ? <p>{dayName}</p>
          : null
        }
        <p>{this.props.date.getDate()}</p>
        {modal}
      </div>

    )
  }

  onTileClick = (e) => {
    // console.log(e);
    this.setState({isShowingModal: true});
  }
}

export default CalendarTile;