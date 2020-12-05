import React, { Component } from 'react';

class EventModal extends Component {
    constructor(props){
        super(props);

    }
  render() {
    console.log(this.props);
    return (
        <div className="eventModalContainer">
          <div className="eventModalFormNavBar">
            <span>X</span>
          </div>
          <form className="eventModalForm">
            <input type="text" placeholder="Event title"></input>
            <input type="date"></input>
            <input type="time"></input>
            <input type="text" placeholder="Enter location"></input>
          </form>
          <div className="eventModalFormFooter">
            <button type="button">Save</button>
          </div>
        </div>
    )
  }
}

export default EventModal;