function matchCron(cron, date) {
  var cronParts = cron.split(' ');
  var dateParts = [
    date.getSeconds(),
    date.getMinutes(),
    date.getHours(),
    date.getDate(),
    date.getMonth() + 1,
    date.getDay()
  ];
  for (var i = 0; i < cronParts.length; i++) {
    if (cronParts[i] != dateParts[i] && cronParts[i] != '*') {
      return false;
    }
  }
  return true;
}