
function firstDayWeek(week,year){
    let time = new Date(year)
    if(week === 1){
        time.setHours(24)
        return formattedDate(time) 
    }
    let dayPlus = week*7*24
    time.setHours(dayPlus-123)

        function getWeekDay(date) {
            let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            return days[date.getDay()-1];
        }
        function formattedDate(d) {
            let month = String(d.getMonth() + 1);
            let day = String(d.getDate()-1);
            let year = String(d.getFullYear());
            
            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            if (year.length === 1) year = '000' + year;
            if (year.length === 2) year = '00' + year;
            if (year.length === 3) year = '0' + year; 
            
            
            return `${day}-${month}-${year}`;
        }
        for(let i = 0;i<7;i++){
            let today = getWeekDay(time)
            if(today === 'Monday'){
                let res = formattedDate(time)
                console.log(res)
                return res
            }
            time.setHours(-24)    
        }
        console.log(time)
        return time
    }
    