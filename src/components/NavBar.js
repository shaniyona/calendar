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
            <input type="button" value="Add Event"onClick={this.props.addEventHandler}></input>
            <div></div>
            <div></div>
            <span>{monthName} {this.props.date.getFullYear()}</span>
          
          </div>
        )
    }
}

export default NavBar;