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
                    <input className="modal eventData" type="text" value={this.state.title} placeholder="Event title" onChange={this.handleEventTitleChange} required></input>
                    <input className="modal eventData" type="date" defaultValue={this.state.date} onChange={this.handleDateChange}></input>
                    <input className="modal eventData" type="time" defaultValue={this.state.time} onChange={this.handleTimeChange}></input>
                    <input className="modal eventData" type="text" value={this.state.location} placeholder="Enter location" onChange={this.handleLocationChange}></input>
                    <div className="modal eventModalFormFooter">
                        {this.props.event
                            ? <input className="delete" type="button" value="Delete" onClick={this.deleteEvent}/>
                            : null
                        }
                        <input className="modal submit" type="submit" value="Save"/>
                    </div>
                </form>
            </div>
        )
    }

    deleteEvent = (e) => {
        if(window.confirm("Are you sure you want to delete this event?")){
            this.props.deleteEvent(this.state);
        }
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