console.log("hello World")
let parse1 = 0;
let parse2 = 0;

// Time manager
function currentTime() {
    const dateTime = new Date() //set var to new current date object
    parse1 = Date.parse(dateTime)
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

// converts 24 Time into 12 hour time
function convertHour(hour) {
    if (hour > 12) {
        hour = hour - 12;
        // console.log('PM');
        return [hour, 'PM'];
    } if (hour == 0) {
        hour = 12;
        return [hour, 'AM']
    } else {
        // console.log('AM');
        return [hour, 'AM'];
    }
}

// Manages currentTime() and DOM live display of Time
function Start() {
    const global = currentTime();
    titleChangeDate(global);
    let globalsecond = global.currentSecond;
    const intervalID = setInterval(changeSecond, 999, globalsecond);
    Alarm()

    function changeSecond(second) {
        if (globalsecond > 59) {
            globalsecond = 0;
            titleChangeTime(global, globalsecond)
            clearInterval(intervalID)
            Start()
        }else{
            titleChangeTime(global, globalsecond)
            globalsecond = globalsecond + 1;
        }
    }

}

// function Alarm() {
//     alert('RING RING The Time is Now:')
// }

function askME() {
    input = prompt('something here');
    alert(`hey you typed ${input}`)
    const userDate = new Date(input)
    console.log(userDate)
}

function SetAlarm() {

}


// Changes Time on DOM
function titleChangeTime(titleHoldTime, titleSecond) {
    const titleTime = document.getElementById('titleTime');
    let hour = titleHoldTime.currentHour[0];
    let minute = titleHoldTime.currentMinute;

    if (hour < 10){
        hour = '0' + hour;
        
    }
    if (minute < 10){
        minute = '0' + minute;
        
    }
    if (titleSecond < 10){
        titleSecond = '0' + titleSecond;
        
    }
    titleTime.textContent = hour + ":" + minute + ":" + titleSecond + " " + titleHoldTime.currentHour[1];

}

// Changes Date on DOM 

function titleChangeDate(titleHoldDate) {
    const titleDate = document.getElementById('titleDate');
    titleDate.textContent = titleHoldDate.currentMonth + " " + titleHoldDate.currentDayNum + ", " + titleHoldDate.currentDayName + ", " +  titleHoldDate.currentYear;
}

// HTML Elements for Alarm Manager
const btnSetAlarm = document.getElementById('btnSetAlarm');
const btnSubmitAlarm = document.getElementById('btnSubmitAlarm');
const divSetAlarm = document.getElementById('setAlarmDivId');

const chooseDay = document.getElementById('chooseDayId');
const dayOfWeekId = document.getElementById('daysOfWeekId');

const onceBtnId = document.getElementById('onceBtnId')
const onceId = document.getElementById('onceId')

const everydayId = document.getElementById('everydayId')

const userTime = document.getElementById('userTime')

divSetAlarm.style.visibility = 'hidden'
dayOfWeekId.style.visibility = 'hidden'
onceId.style.visibility = 'hidden'

btnSetAlarm.addEventListener('click', () => {
    console.log('Testing setalarm button')
    divSetAlarm.style.visibility = 'visible'
});

btnSubmitAlarm.addEventListener('click', () => {
    console.log('Testing SubmitAlarmBtn')
    divSetAlarm.style.visibility = 'hidden'
    dayOfWeekId.style.visibility = 'hidden'
    onceId.style.visibility = 'hidden'

    console.log(userTime.value)
    console.log(onceId.value)
    if (onceBtnId.checked) {
        const userAlarm = onceId.value + "T" + userTime.value + ":00Z"
        const userparse = Date.parse(userAlarm)
        alarmOnce(userparse)
    }

});

chooseDay.addEventListener('click', () => {
    if (chooseDay.checked)
    {
        dayOfWeekId.style.visibility = 'visible'
        onceBtnId.disabled = true;
        everydayId.disabled = true;
    } else {
        dayOfWeekId.style.visibility = 'hidden'
        onceBtnId.disabled = false;
        everydayId.disabled = false;
    }
})

onceBtnId.addEventListener('click', () => {
    if (onceBtnId.checked)
    {
        onceId.style.visibility = 'visible'
        chooseDay.disabled = true;
        everydayId.disabled = true;
    } else {
        onceId.style.visibility = 'hidden'
        chooseDay.disabled = false;
        everydayId.disabled = false;
    }
})

everydayId.addEventListener('click', () => {
    if (everydayId.checked)
    {
        onceBtnId.disabled = true;
        chooseDay.disabled = true;
    } else {
        onceBtnId.disabled = false;
        chooseDay.disabled = false;
    }
})

// Alarm Manager
function Alarm() {
    if (parse1 > parse2 && parse1 !== 0 && parse2 !== 0){
        alert("RING RING !!!")
        parse1 = 0;
        parse2 = 0;
    }else{
        console.log("No Alarm")
    }
}

function alarmOnce(onceAlarm) {
    parse2 = onceAlarm;
}

Start()
