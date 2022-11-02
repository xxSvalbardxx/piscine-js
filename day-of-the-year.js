function dayOfTheYear(date) {
  let rslt = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24)
  console.log(rslt)
  return rslt;
}

dayOfTheYear(new Date('2020-10-01')) // === 1