import React, { Component } from 'react';
import * as DateUtil from '../util/CalendarUtil.js';


class NavBar extends Component {
    constructor(props) {
      super(props);
    }

    render(){
      const monthName = DateUtil.numTofullMonthName(this.props.date.getMonth());
        return(
          <div className="navBar">
            <button onClick={this.props.addEventHandler}>Add Event</button>
            <span>{monthName} {this.props.date.getFullYear()}</span>
            <div></div>
          </div>
        )
    }
}

export default NavBar;