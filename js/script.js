// Declaring all the necessary variables and accessing the dom
let currentDate = new Date()
let dueDate = new Date();
let daysEl =  document.querySelector(".days")
let hoursEl = document.querySelector(".hours")
let minutesEl = document.querySelector(".minutes")
let secondsEl = document.querySelector(".seconds")
let dueDateEl = document.querySelector(".due-date")
let meridian = "am"


// Setting the due date to be 10 days after the window loads
dueDate.setDate(dueDate.getDate() + 10)

// calculating the seconds left
let secondsLeft = (Date.parse(dueDate) - Date.parse(currentDate)) / 1000;

// initialize the countdown
let countdown = setInterval(updateTimer, 1000);



function updateTimer(){
    secondsLeft--;
    if(secondsLeft <= 0){
        clearInterval(countdown);
        dueDateEl.innerText = "GIVEAWAY ENDED!"
        dueDateEl.style.fontSize = "2em"
        daysEl.classList.remove("animate")
        hoursEl.classList.remove("animate")
        minutesEl.classList.remove("animate")
        secondsEl.classList.remove("animate")
        return;
    }
    if(secondsLeft <= 60){
        daysEl.classList.add("animate")
        hoursEl.classList.add("animate")
        minutesEl.classList.add("animate")
        secondsEl.classList.add("animate")
    }
    let days = Math.floor(secondsLeft / 86400 )
    let hours = Math.floor(secondsLeft % (86400) / (3600))
    let minutes = Math.floor(secondsLeft % 3600 / 60)
    let seconds = Math.floor(secondsLeft % 60)
    
    daysEl.innerText = padZero(days)
    hoursEl.innerText = padZero(hours)
    minutesEl.innerText = padZero(minutes)
    secondsEl.innerText = padZero(seconds)
}

// function to turn all numbers to two-digit numbers
function padZero(string){
    string = string.toString()
    if(string.length < 2){
        return `0${string}`
    }else{
        return `${string}`
    }
}

// Array to use for the getMonth() function
const months = [
    'January',
    'February',
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
]

// Array to use for the getDay() function
const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

let h = dueDate.getHours()

let min = dueDate.getMinutes()

// miscellaneous code to change the displayed due date into a 12 hour timing system
if(h > 12){
    h = h % 12
}
if(dueDate.getHours() >= 12){
    meridian = "pm"
}

// Output the due date
dueDateEl.innerText = `The giveaway will end on ${weekDays[dueDate.getDay()]}, ${dueDate.getDate()} ${months[dueDate.getMonth()]} ${dueDate.getFullYear()} at ${ padZero(h) }:${padZero(dueDate.getMinutes())}${meridian}`
  