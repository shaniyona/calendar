import React, { Component } from 'react';

class EventModal extends Component {
    constructor(props) {
        super(props);

        if (this.props.event) {
            this.state = {
                title: this.props.event.title,
                date: this.props.event.date,
                time: this.props.event.time,
                location: this.props.event.location,
                index: this.props.index,
                eventIndex: this.props.event.index

            }
        } else {
            this.state = {
                title: '',
                date: this.props.date,
                time: this.props.time,
                location: '',
                index: this.props.index
            }
        }
    }

    render() {
        return (
            <div className="modal eventModalContainer">
                <div className="modal eventModalFormNavBar">
                    <span className="modal" onClick={this.props.onCloseHandler}>X</span>
                </div>
                <form className="modal eventModalForm" onSubmit={this.onSaveModal}>
                    <input className="modal" type="text" value={this.state.title} placeholder="Event title" onChange={this.handleEventTitleChange} required></input>
                    <input className="modal" type="date" defaultValue={this.state.date} onChange={this.handleDateChange}></input>
                    <input className="modal" type="time" defaultValue={this.state.time} onChange={this.handleTimeChange}></input>
                    <input className="modal" type="text" value={this.state.location} placeholder="Enter location" onChange={this.handleLocationChange}></input>
                    <div className="modal eventModalFormFooter">
                        <input className="modal" type="submit" value="Save"></input>
                    </div>
                </form>
            </div>
        )
    }
    onSaveModal = (e) => {
        e.preventDefault();
        if (this.props.event) {
            this.props.editEvent(this.state);
        } else {
            this.props.addEvent(this.state);
        }
        this.props.onCloseHandler();
    }

    handleEventTitleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleDateChange = (e) => {
        this.setState({ date: e.target.value });
    }

    handleTimeChange = (e) => {
        this.setState({ time: e.target.value });
    }

    handleLocationChange = (e) => {
        this.setState({ location: e.target.value });
    }
}

export default EventModal;