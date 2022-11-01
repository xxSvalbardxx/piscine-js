
function addWeek(date){
    let day0 = new Date('0001-01-01')
    let diff = diffDates(date,day0)%2
    console.log(diff)
    
    if(diff%2===0||diff<1){

        return getWeekDay(date)
    }
    else {
        let day = getWeekDay(date)
        return 'second'+day
    }
    
}
function getWeekDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
}

function diffDates(day_one, day_two) {
        return ((day_one-day_two) / (60 * 60 * 24 * 1000))/7  // WTF les millisecondes?

}

function timeTravel({date,hour,minute,second}){
   date.setHours(hour)
   date.setMinutes(minute)
   date.setSeconds(second)
   return date  // quelle est cette horreur de format de M**** ?
}
