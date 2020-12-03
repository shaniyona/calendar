import React, { Component } from 'react';

class EventModal extends Component {
    constructor(props){
        super(props);

    }
  render() {
    console.log(this.props);
    return (
        <div className="eventModalContainer">
            <h1>{this.props.clickedTile.day}</h1>
        </div>
    )
  }
}

export default EventModal;