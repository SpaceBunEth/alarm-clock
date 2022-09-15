console.log("hello World")

function currentTime() {
const dateTime = new Date() //set var to new current date object

const nameOfDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday', 
    'Saturday'
];

const nameOfMonth = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const holdTime = { // format dateTime object data to holdTime object
    currentYear: dateTime.getFullYear(),
    currentMonth: nameOfMonth[dateTime.getMonth()],
    currentDayName: nameOfDay[dateTime.getDay()],
    currentDayNum: dateTime.getDate(),
    currentHour: convertHour(dateTime.getHours()),
    currentMinute: dateTime.getMinutes(),
    currentSecond: dateTime.getSeconds()
};
return holdTime
}

function convertHour(hour) {
    if (hour > 12) {
        hour = hour - 12;
        console.log('PM')
        return hour
    } else {
        console.log('AM')
        return hour
    }
}

const global = currentTime();
console.log(global)




