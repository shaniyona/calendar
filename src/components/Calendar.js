import React, { Component } from 'react';
import CalendarTile  from '../components/CalendarTile.js'
import {MONTH_MODE, WEEK_MODE, DAY_MODE} from '../ViewMode.js'

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = this.setUpCalendar();
    }

    componentDidMount() {
        // console.log(this.state);

    }
  
    componentWillUnmount() {
    }

    setUpCalendar() {
        const date = new Date();
        const firstDay = new Date(date.getFullYear(), date.getMonth()+1, 1);

        return {date: firstDay};
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
        const weeks = [];

        // start at 1 because firstday = 1, iterate by week by incrementing by 7
        let date = new Date(this.state.date);

         //setting first day of week as date
        let diff = 0 - date.getDay();
        date.setDate(date.getDate() + diff);

        for(let i = 1; i <= 1; i += 7) {
            const week = [];
            // iterate through days of week and populate week array
            for(let j = 0; j < 7; j++){
                let newDate = new Date(date);
                week.push(<CalendarTile date={newDate}/>);
                date.setDate(date.getDate() + 1);
            }
            weeks.push(week);
        }


        return (
            <div className="month">
                {weeks.map(el => <div className="week">{el}</div>)}
            </div>
          );
    }
}

export default Calendar;