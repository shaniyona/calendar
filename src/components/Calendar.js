import React, { Component } from 'react';
import CalendarTile  from '../components/CalendarTile.js'
import {MONTH_MODE, WEEK_MODE, DAY_MODE} from '../ViewMode.js'
import EventModal  from './EventModal.js'

class Calendar extends Component {
    constructor(props) {
        super(props);
        // this.state = {isShowingModal: false};
        this.state = this.setUpCalendar();
        this.state.isShowingModal = false;
    }

    componentDidMount() {
        // console.log(this.state);

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

    calculateNumDays(year, month) {
        switch(month) {
            case 0: return 31;
            case 1: return(((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28);
            case 2: return 31;
            case 3: return 30;
            case 4: return 31;
            case 5: return 30;
            case 6: return 31;
            case 7: return 31;
            case 8: return 30;
            case 9: return 31;
            case 10: return 30;
            case 11: return 31;
            default:
                return 0;
        }
    }

    render() {
        const totNumDays = this.calculateNumDays(this.state.firstDay.getFullYear(),this.state.firstDay.getMonth());
        const totNumWeeks = Math.ceil(totNumDays / 7);
        let isFirstWeek = true;
        const weeks = [];

        let modal;
        if(this.state.isShowingModal){
            const minutes = this.state.date.getMinutes();
            const hours = this.state.date.getHours();
            const day = this.state.date.getDate();
            const month = this.state.date.getMonth() + 1;
            const year = this.state.date.getFullYear();

            const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes; 
            const formattedHours = (hours < 10) ? `0${hours}` : hours; 
            const formattedDay = (day < 10) ? `0${day}` : day;
            const formattedMonth = (month < 10) ? `0${month}` : month;
            const formattedDate = `${year}-${formattedMonth}-${formattedDay}`
            const formattedTime = `${formattedHours}:${formattedMinutes}`;

            modal = <EventModal clickedTile={this.state.clickedTile}
                                time={formattedTime}
                                date={formattedDate}
                                onCloseHandler={this.modalCloseHandler}
            />;
        }

        // start at 1 because firstday = 1, iterate by week by incrementing by 7
        let date = new Date(this.state.firstDay);

         //setting first day of week as date
        let diff = 0 - date.getDay();
        date.setDate(date.getDate() + diff);

        for(let i = 1; i <= totNumDays; i += 7) {
            const week = [];
            // iterate through days of week and populate week array
            for(let j = 0; j < 7; j++){
                let newDate = new Date(date);
                week.push(<CalendarTile date={newDate} isFirstWeek={isFirstWeek}/>);
                date.setDate(date.getDate() + 1);
            }
            isFirstWeek = false;
            weeks.push(week);
        }


        return (
            <div className="month" onClick={this.onTileClick}>
                {weeks.map(el => <div className="week">{el}</div>)}
                {modal}
            </div>
          );
    }

    
  onTileClick = (e) => {
     if(e.target.classList.contains("modal") === false && this.state.isShowingModal === true){
        this.setState({isShowingModal: false});
        return;
     } else if(e.target.classList.contains("modal") === true && this.state.isShowingModal === true){ 
        return;
     }
    this.setState({
        isShowingModal: true,
        clickedTile: {
            day: e.target.getAttribute("data-day"),
            month: e.target.getAttribute("data-month"),
            year: e.target.getAttribute("data-year")
        }
    });
  }

  modalCloseHandler = (e) => {
      this.setState({isShowingModal: false});
  }
}

export default Calendar;