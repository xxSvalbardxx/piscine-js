// dayOfTheYear(new Date('0001-01-01')) === 1

function dayOfTheYear(date) {
    let year = date.getFullYear();
    let days = 0;
    for (let i = 1; i < date.getMonth() + 1; i++) {
        days += new Date(year, i, 0).getDate();
    }
    days += date.getDate();
    console.log(days);
    return days;

}

dayOfTheYear(new Date('0001-01-01')) === 1