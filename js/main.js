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
        currentHourMilitary: dateTime.getHours(),
        currentMinute: dateTime.getMinutes(),
        currentSecond: dateTime.getSeconds(),
    };
    return holdTime;
}

function convertHour(hour) {
    if (hour > 12) {
        hour = hour - 12;
        console.log('PM');
        return [hour, 'PM'];
    } else {
        console.log('AM');
        return [hour, 'AM'];
    }
}

function Start() {
    const global = currentTime();
    console.log(global);
    let globalsecond = global.currentSecond
    console.log("Testing time",globalsecond)
    const intervalID = setInterval(changeSecond, 999, globalsecond);

    function changeSecond(second) {
        globalsecond = globalsecond + 1;
        console.log(globalsecond);
        if (globalsecond > 59) {
            clearInterval(intervalID)
            Start()
        }
    }

}

function Alarm() {
    alert('RING RING The Time is Now:')
}

function askME() {
    input = prompt('something here');
    alert(`hey you typed ${input}`)
    const userDate = new Date(input)
    console.log(userDate)
}

function SetAlarm() {

}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        