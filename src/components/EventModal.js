import React, { Component } from 'react';

class EventModal extends Component {
    constructor(props){
        super(props);
        this.state = {
          title: '',
          date: this.props.date,
          time: this.props.time,
          location: '' 
        }

    }
  render() {
    return (
        <div className="modal eventModalContainer">
          <div className="modal eventModalFormNavBar">
            <span className="modal" onClick={this.props.onCloseHandler}>X</span>
          </div>
          <form className="modal eventModalForm">
            <input className="modal" type="text" placeholder="Event title" onChange={this.handleEventTitleChange} required="required"></input>
            <input className="modal" type="date" defaultValue={this.props.date} onChange={this.handleDateChange}></input>
            <input className="modal" type="time" defaultValue={this.props.time} onChange={this.handleTimeChange}></input>
            <input className="modal" type="text" placeholder="Enter location" onChange={this.handleLocationChange}></input>
            <div className="modal eventModalFormFooter">
              <input className="modal" type="submit" onClick={this.onSaveModal} value="Save"></input>
            </div>
          </form>
        </div>
    )
  }
  onSaveModal = (e) => {
    e.preventDefault();
    this.props.addEvent(this.state);
    this.props.onCloseHandler();
  }

  handleEventTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleDateChange = (e) => {
    this.setState({date: e.target.value});
  }

  handleTimeChange = (e) => {
    this.setState({time: e.target.value});
  }

  handleLocationChange = (e) => {
    this.setState({location: e.target.value});
  }
}

export default EventModal;