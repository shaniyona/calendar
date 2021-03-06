import React, { Component } from 'react';
import CalendarTile from '../components/CalendarTile.js'
import EventModal from './EventModal.js'
import NavBar from './NavBar.js'
import * as DateUtil from '../util/CalendarUtil.js';

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = this.setUpCalendar();
        this.state.isShowingModal = false;
        this.state.eventList = new Array(35);

        for (let i = 0; i < this.state.eventList.length; i++) {
            this.state.eventList[i] = new Array();
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 10000);
    }

    componentWillUnmount() {
    }

    setUpCalendar() {
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);

        return {
            date: date,
            firstDay: firstDay

        };
    }

    render() {
        const totNumDays = DateUtil.calculateNumDays(this.state.firstDay.getFullYear(), this.state.firstDay.getMonth());
        const totNumWeeks = Math.ceil(totNumDays / 7);
        let isFirstWeek = true;
        const weeks = [];

        let modal;

        if (this.state.isShowingModal) {
            const minutes = this.state.date.getMinutes();
            const hours = this.state.date.getHours();
            const day = this.state.clickedTile.day;
            const month = DateUtil.monthToNum(this.state.clickedTile.month) + 1;
            const year = this.state.clickedTile.year;

            const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes;
            const formattedHours = (hours < 10) ? `0${hours}` : hours;
            const formattedDay = (day < 10) ? `0${day}` : day;
            const formattedMonth = (month < 10) ? `0${month}` : month;
            const formattedDate = `${year}-${formattedMonth}-${formattedDay}`
            const formattedTime = `${formattedHours}:${formattedMinutes}`;

            if (this.state.clickedEvent) {
                modal = <EventModal
                    event={this.state.clickedEvent}
                    date={formattedDate}
                    index={this.state.clickedTile.index}
                    onCloseHandler={this.modalCloseHandler}
                    addEvent={this.addEvent}
                    editEvent={this.editEvent}
                    deleteEvent={this.deleteEvent}
                />;
            } else {
                modal = <EventModal
                    time={formattedTime}
                    date={formattedDate}
                    index={this.state.clickedTile.index}
                    onCloseHandler={this.modalCloseHandler}
                    addEvent={this.addEvent}
                    editEvent={this.editEvent}
                />;
            }


        }

        // start at 1 because firstday = 1, iterate by week by incrementing by 7
        let date = new Date(this.state.firstDay);

        //setting first day of week as date
        let diff = 0 - date.getDay();
        date.setDate(date.getDate() + diff);
        let index = 0;
        for (let i = 1; i <= totNumDays; i += 7) {
            const week = [];
            // iterate through days of week and populate week array
            for (let j = 0; j < 7; j++) {
                let newDate = new Date(date);

                // //arranging array with events by time
                // console.log(this.arrangeEvents(this.state.eventList[index], index));
                week.push(<CalendarTile index={index} date={newDate} isFirstWeek={isFirstWeek} events={this.state.eventList[index]} />);

                date.setDate(date.getDate() + 1);
                index++;
            }
            isFirstWeek = false;
            weeks.push(week);
        }

        return (
            <div>
                <NavBar addEventHandler={this.onAddEventClick} date={this.state.date}></NavBar>
                <div className="month" onClick={this.onTileClick}>
                    {weeks.map(el => <div className="week">{el}</div>)}
                    {modal}
                </div>
            </div>
        );
    }

    onTileClick = (e) => {
        // check to see if user is clicking outside the modal when it is showing, close modal if yes
        if (e.target.classList.contains("modal") === false && this.state.isShowingModal === true) {
            this.setState({ isShowingModal: false });
            return;
            // if you click on the modal and its open, leave it open/nothing happens
        } else if (e.target.classList.contains("modal") === true && this.state.isShowingModal === true) {
            return;
        }

        let calendarTile;
        // check to see if calendarTile or child/grandchild is clicked
        let clickedEvent = e.target;
        if (e.target.classList[0] === "calendarTile") {
            calendarTile = e.target;
        } else {
            /* 
            * TODO (shani): loop upwards from child to parent node until we reach 
            * calendarTile - helper func that will automatically loop until calTile reached
            */
            let isCalendarTile = false;
            while (!isCalendarTile) {
                if (e.target.classList[0] === "calendarTile") {
                    calendarTile = e.target;
                    isCalendarTile = true;
                } else {
                    e.target = e.target.parentNode;
                }
            }
        }

        let event;
        let eventIndex;
        if (clickedEvent.className === "calendarEventTile") {
            eventIndex = parseInt(clickedEvent.getAttribute("data-id"));
            const dateIndex = calendarTile.getAttribute("data-index");
            event = this.state.eventList[dateIndex][eventIndex];
        }

        if (event) {
            this.setState({
                isShowingModal: true,
                clickedTile: {
                    index: calendarTile.getAttribute("data-index"),
                    day: calendarTile.getAttribute("data-day"),
                    month: calendarTile.getAttribute("data-month"),
                    year: calendarTile.getAttribute("data-year"),
                },
                clickedEvent: {
                    title: event.title,
                    date: event.date,
                    time: event.time,
                    location: event.location,
                    index: eventIndex
                }
            });
        } else {
            this.setState({
                isShowingModal: true,
                clickedTile: {
                    index: calendarTile.getAttribute("data-index"),
                    day: calendarTile.getAttribute("data-day"),
                    month: calendarTile.getAttribute("data-month"),
                    year: calendarTile.getAttribute("data-year"),
                },
                clickedEvent: event
            });
        }
    }

    modalCloseHandler = (e) => {
        this.setState({ isShowingModal: false });
    }

    addEvent = (event) => {
        const eventDate = event.date.split('-');
        const eventMonth =  DateUtil.numToMonth(parseInt(eventDate[1])-1); 
        const eventDay = parseInt(eventDate[2]); 
        const selectedDate = document.querySelectorAll(`[data-day="${eventDay}"][data-month="${eventMonth}"]`);
        const eventIndex = selectedDate[0].getAttribute("data-index");

        this.state.eventList[parseInt(eventIndex)].push(event);
        this.setState({ eventList: this.state.eventList });
    }

    editEvent = (event) => {
        const eventDate = event.date.split('-');
        const eventMonth =  DateUtil.numToMonth(parseInt(eventDate[1])-1); 
        const eventDay = parseInt(eventDate[2]); 
        const selectedDate = document.querySelectorAll(`[data-day="${eventDay}"][data-month="${eventMonth}"]`);
        const eventIndex = selectedDate[0].getAttribute("data-index");

        this.state.eventList[parseInt(eventIndex)].push(event);
        this.state.eventList[parseInt(event.index)].splice(parseInt(event.eventIndex), 1);
        this.setState({ eventList: this.state.eventList });
    }

    deleteEvent = (event) => {
        this.state.eventList[parseInt(event.index)].splice(parseInt(event.eventIndex), 1);
        this.setState({ eventList: this.state.eventList });
    }

    onAddEventClick = () => {
        const date = new Date();
        const day = date.getDate();
        const month = DateUtil.numToMonth(date.getMonth());
        const year = this.state.date.getFullYear();
        const selectedDate = document.querySelectorAll(`[data-day="${day}"][data-month="${month}"]`);
        const eventIndex = selectedDate[0].getAttribute("data-index");

        this.setState({
            isShowingModal: true,
            clickedTile: {
                index: eventIndex,
                day: day,
                month: month,
                year: year,
            }
        });
    }
}

export default Calendar;