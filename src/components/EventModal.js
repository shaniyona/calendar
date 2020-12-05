import React, { Component } from 'react';

class EventModal extends Component {
    constructor(props){
        super(props);

    }
  render() {
    return (
        <div className="modal eventModalContainer">
          <div className="modal eventModalFormNavBar">
            <span className="modal" onClick={this.props.onCloseHandler}>X</span>
          </div>
          <form className="modal eventModalForm">
            <input className="modal" type="text" placeholder="Event title"></input>
            <input className="modal" type="date" defaultValue={this.props.date}></input>
            <input className="modal" type="time" defaultValue={this.props.time}></input>
            <input className="modal" type="text" placeholder="Enter location"></input>
          </form>
          <div className="modal eventModalFormFooter">
            <button className="modal" type="button" onClick={this.props.onCloseHandler}>Save</button>
          </div>
        </div>
    )
  }
}

export default EventModal;