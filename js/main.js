console.log("hello World")

// Time manager
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
    titleSetTimeDate(global)
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

// HTML H tag Time and Date 
function titleSetTimeDate(titleHoldTime) {
    const titleTime = document.getElementById('titleTime');
    if (titleHoldTime.currentMinute < 10){
        titleHoldTime.currentMinute = '0' + titleHoldTime.currentMinute
        console.log(titleHoldTime.currentMinute)
    }
    titleTime.textContent = "Time: "+ titleHoldTime.currentHour[0] + ":" + titleHoldTime.currentMinute + ":" + titleHoldTime.currentSecond + " " + titleHoldTime.currentHour[1];

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

