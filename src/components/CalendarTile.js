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

    let monthName;

    switch(this.props.date.getMonth()) {
      case 0: monthName = 'Jan'; break;
      case 1: monthName = 'Feb'; break;
      case 2: monthName = 'Mar'; break;
      case 3: monthName = 'Apr'; break;
      case 4: monthName = 'May'; break;
      case 5: monthName = 'Jun'; break;
      case 6: monthName = 'Jul'; break;
      case 7: monthName = 'Aug'; break;
      case 8: monthName = 'Sep'; break;
      case 9: monthName = 'Oct'; break;
      case 10: monthName = 'Nov'; break;
      case 11: monthName = 'Dec'; break;
      default: monthName = "";
    }
    
    console.log("before return statement");
    console.log(dayName);
    return (
      <div className="calendarTile" onClick={this.onTileClick}>
        {this.props.isFirstWeek
          ? <p>{dayName}</p>
          : null
        }
        {this.props.date.getDate() === 1
          ? <span>{monthName} </span>
          : null
        }
        <span>{this.props.date.getDate()}</span>
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