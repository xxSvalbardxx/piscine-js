/*

function firstDayWeek(week,year){
    let time = new Date(year)
    if(week === 1){
        time.setHours(24)
        return formattedDate(time) 
    }
    let dayPlus = week*7*24
    time.setHours(dayPlus-123)
//    console.log(time)
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
                return res
            }
            time.setHours(-24)    
        }
        return time
    }
    // let date = new Date('0091-06-04')
    // console.log(date.getDay())
    // console.log(firstDayWeek(1, '1000'))

    */

function firstDayWeek(week,year){
    var anne = String(year)
    if (anne.length === 1) anne = '000' + anne;
    if (anne.length === 2) anne = '00' + anne;
    if (anne.length === 3) anne = '0' + anne;
    
    
    
    let time = new Date(anne);
    
    let day = (week-1)*7*24
    time.setHours(day)
    
    function formatDate(time) {
        let month = time.getMonth() + 1;
        let day = time.getDate()-1;
        
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        let rslt = `${day}-${month}-${anne}`;
        
        return rslt;
    }
    
    function getWeekDay(date) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        return days[date.getDay()];

    }
    
    for(let i = 0;i<7;i++){
        let today = getWeekDay(time)
        if(today === 'Monday'){
            let res = formatDate(time)
            console.log(res)        
            return res
        }
    }
    
    return time
}
