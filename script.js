const calendar = document.querySelector("#calendar"),
date = document.querySelector(".date"),
daysContainer = document.querySelector(".days"),
prev = document.querySelector("#prev"),
next = document.querySelector("#next");
todayButton = document.querySelector("#today-btn")


let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// function to add days


function initCalendar(){

    // to get prev month days and current month all days and rem next month days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    const prevDays = prevLastDay.getDate();
    const lastDate = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const remainingDays = 42 - (firstDayIndex + lastDate);

    // updates date on top of the calendar
    date.innerHTML = months[month] + " " + year;

    // adding days on dom
    let days = "";

    // prev month days
    for (let x = firstDayIndex; x > 0; x--){
      days += `<div class = "day prev-date">${prevDays - x + 1}</div>`;
    }

    // current month days
    for (let i = 1; i <= lastDate; i++){
      // if day is today add class today
      if (i === new Date().getDate() && year === new Date().getFullYear() && month === new Date().getMonth()){
        days += `<div class = "day today">${i}</div>`;
      }
      else{
        days += `<div class = "day" >${i}</div>`;
      }
    }

    // next month days
    for (let i = 1; i <= remainingDays; i++){
      days += `<div class = "day next-date">${i}</div>`;
    }

    daysContainer.innerHTML = days;
}

initCalendar();
 
// prev month

function prevMonth(){
  month--;
  if (month < 0){
    month = 11;
    year--;

  }
  initCalendar();
}


// next month


function nextMonth(){
  month++;
  if (month > 11){
    month = 0;
    year++;
  }
  initCalendar();
}

// adding event listener of previous and next

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth)

todayButton.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
})



function initCard(){
  
}