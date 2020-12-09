import React, { Component } from 'react';
import * as DateUtil from '../util/CalendarUtil.js';

class CalendarTile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const dayName = DateUtil.numToDay(this.props.date.getDay());

    const monthName = DateUtil.numToMonth(this.props.date.getMonth());
    
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
      </div>

    )
  }
}

export default CalendarTile;