import React, { Component } from 'react';

class EventModal extends Component {
    constructor(props){
        super(props);
        console.log("clicked in cal tile");

    }
  render() {
    return (
        <div className="eventModalContainer">
            <h1>WHATS UP</h1>
        </div>
    )
  }
}

export default EventModal;