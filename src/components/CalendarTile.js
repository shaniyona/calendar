import React, { Component } from 'react';

class CalendarTile extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let dayName;

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
    
    return (
      <div className="calendarTile" data-month={monthName} data-day={this.props.date.getDate()} data-year={this.props.date.getFullYear()}>
        {this.props.isFirstWeek
          ? <p>{dayName}</p>
          : null
        }
        {this.props.date.getDate() === 1
          ? <span>{monthName} </span>
          : null
        }
        <span>{this.props.date.getDate()}</span>
      </div>

    )
  }
}

export default CalendarTile;