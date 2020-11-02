//for weekday, month, day, and year
var theDate = new Date();

//get the weekday
var theWeekdayNumber = theDate.getDay();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var theWeekday = weekdays[theWeekdayNumber];

//get the month
var theMonthNumber = theDate.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var theMonth = months[theMonthNumber];

//get the day and year
var theNumber = theDate.getDate();
var theYear = theDate.getFullYear();

//output weekday to h1
document.getElementById("weekday").innerHTML = theWeekday;

//output full date to h2
document.getElementById("date").innerHTML = theMonth + " " + theNumber + ", " + theYear;

//get buttons
var dayButton = document.getElementById("day");
var weekButton = document.getElementById("week");
var monthButton = document.getElementById("month");
var categoriesButton = document.getElementById("categories");
var addButton = document.getElementById("add");

//get modals
var dayModal = document.getElementById("day-modal");
var weekModal = document.getElementById("week-modal");
var monthModal = document.getElementById("month-modal");
var categoriesModal = document.getElementById("categories-modal");
var addModal = document.getElementById("add-modal");

//event listener - modal and active off, modal and active on for click
dayButton.addEventListener("click", () => {
    offActive();
    isActive(dayButton);
    modalOn(dayModal);  
    addDisplay();  
}, false);
weekButton.addEventListener("click", () => {
    offActive();
    isActive(weekButton);
    modalOn(weekModal);
    addDisplay();
}, false);
monthButton.addEventListener("click", () => {
    offActive();
    isActive(monthButton);
    modalOn(monthModal);
    addDisplay();
}, false);
categoriesButton.addEventListener("click", () => {
    offActive();
    isActive(categoriesButton);
    modalOn(categoriesModal);
    addDisplay();
}, false);
addButton.addEventListener("click", () => {
    offActive();
    isActive(addButton);
    modalOn(addModal);
    addDisplay();
}, false);

// modal and active off
function offActive () {
    dayButton.classList.remove("active");
    weekButton.classList.remove("active");
    monthButton.classList.remove("active");
    categoriesButton.classList.remove("active");
    addButton.classList.remove("active");

    dayModal.style.display = "none";
    weekModal.style.display = "none";
    monthModal.style.display = "none";
    categoriesModal.style.display = "none";
    addModal.style.display = "none";
}

// active on for click
function isActive(button) {
   button.classList.add("active");
}

//modal on for click
function modalOn(modal) {
    modal.style.display = "block";
}

//add modal on, add button off {
function addDisplay() {
    if (addButton.classList.contains("active")) {
        addButton.style.display = "none";
    } else {
        addButton.style.display = "block";
    }
}





