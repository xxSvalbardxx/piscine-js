function matchCron(cron, date) {

    let cronArr = cron.split(' ')
    let cronMin = cronArr[0]
    let cronHour = cronArr[1]
    let cronDay = cronArr[2]
    let cronMonth = cronArr[3]
    let cronWeek = cronArr[4]

    let dateMin = date.getMinutes()
    let dateHour = date.getHours()
    let dateDay = date.getDate()
    let dateMonth = date.getMonth() + 1
    let dateWeek = date.getDay()

    if (cronMin === '*') {
        cronMin = dateMin
    }
    if (cronHour === '*') {
        cronHour = dateHour
    }
    if (cronDay === '*') {
        cronDay = dateDay
    }
    if (cronMonth === '*') {
        cronMonth = dateMonth
    }
    if (cronWeek === '*') {
        cronWeek = dateWeek
    }

    if (cronMin === dateMin && cronHour === dateHour && cronDay === dateDay && cronMonth === dateMonth && cronWeek === dateWeek) {
        return true
    } else {
        return false
    }


}