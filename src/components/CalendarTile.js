import React, { Component } from 'react';
import * as DateUtil from '../util/CalendarUtil.js';

class CalendarTile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dayName = DateUtil.numToDay(this.props.date.getDay());

    const monthName = DateUtil.numToMonth(this.props.date.getMonth());
    // console.log(this.props.events);

    let eventList = [];
    for(let i = 0; i < this.props.events.length; i++) {
      eventList.push(<div className="calendarEventTile">{this.props.events[i].title}</div>);
    }
    // if(this.props.events.length > 0){
    //   console.log(this.props.events[0].title);
    // }
    return (
      <div className="calendarTile" data-index={this.props.index} data-month={monthName} data-day={this.props.date.getDate()} data-year={this.props.date.getFullYear()}>
        {this.props.isFirstWeek
          ? <p>{dayName}</p>
          : null
        }
        {this.props.date.getDate() === 1
          ? <span>{monthName} </span>
          : null
        }
        <span>{this.props.date.getDate()}</span>
        {eventList}
      </div>

    )
  }
}

export default CalendarTile;