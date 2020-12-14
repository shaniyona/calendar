export function monthToNum(month){
    let monthNum;
    switch(month) {
        case 'Jan': monthNum = 0; break;
        case 'Feb': monthNum = 1; break;
        case 'Mar': monthNum = 2; break;
        case 'Apr': monthNum = 3; break;
        case 'May': monthNum = 4; break;
        case 'Jun': monthNum = 5; break;
        case 'Jul': monthNum = 6; break;
        case 'Aug': monthNum = 7; break;
        case 'Sep': monthNum = 8; break;
        case 'Oct': monthNum = 9; break;
        case 'Nov': monthNum = 10; break;
        case 'Dec': monthNum = 11; break;
        default: throw new Error('Invalid Month');
    }

    return monthNum;
}

export function numToMonth(monthNum) {
    let monthName;
    switch(monthNum) {
        case 0: monthName = 'Jan'; break;
        case 1: monthName = 'Feb'; break;
        case 2: monthName = 'Mar'; break;
        case 3: monthName = 'Apr'; break;
        case 4: monthName = 'May'; break;
        case 5: monthName = 'Jun'; break;
        case 6: monthName = 'Jul'; break;
        case 7: monthName = 'Aug'; break;
        case 8: monthName = 'Sep'; break;
        case 9: monthName = 'Oct'; break;
        case 10: monthName = 'Nov'; break;
        case 11: monthName = 'Dec'; break;
        default: throw new Error('Invalid Month');
    }

    return monthName;
}


export function numTofullMonthName(monthNum) {
    let monthName;
    switch(monthNum) {
        case 0: monthName = 'January'; break;
        case 1: monthName = 'February'; break;
        case 2: monthName = 'March'; break;
        case 3: monthName = 'April'; break;
        case 4: monthName = 'May'; break;
        case 5: monthName = 'June'; break;
        case 6: monthName = 'July'; break;
        case 7: monthName = 'August'; break;
        case 8: monthName = 'September'; break;
        case 9: monthName = 'October'; break;
        case 10: monthName = 'November'; break;
        case 11: monthName = 'December'; break;
        default: throw new Error('Invalid Month');
    }

    return monthName;
}

export function numToDay(dayNum){
    let dayName;
    switch(dayNum) {
        case 0: dayName = 'SUN'; break;
        case 1: dayName = 'MON'; break;
        case 2: dayName = 'TUE'; break;
        case 3: dayName = 'WED'; break;
        case 4: dayName = 'THU'; break;
        case 5: dayName = 'FRI'; break;
        case 6: dayName = 'SAT'; break;
        default: throw new Error('Invalid Day of Week');
    }

    return dayName;
}

export function calculateNumDays(year, month){
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
        default: throw new Error('Invalid Month');
    }
}
