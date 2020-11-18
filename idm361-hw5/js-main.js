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
var addButton = document.getElementById("add");

//get modals
var addModal = document.getElementById("add-modal");

//event listener - modal and active off, modal and active on for click
addButton.addEventListener("click", () => {
    offActive();
    isActive(addButton);
    modalOn(addModal);
    addDisplay();
}, false);

// modal and active off
function offActive () {
    addButton.classList.remove("active");
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

//resize header on scroll or on modal click
window.onscroll = function() {scrollFunction()};
let topLogo = document.getElementById("top-logo");
let theHeader = document.getElementById("header");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
   topLogo.style.width = "10%";
   topLogo.style.position = "absolute";
   topLogo.style.top = "3%";
   topLogo.style.left = "45%";
   theHeader.style.backgroundColor = "var(--lightest2)";
  } else {
    topLogo.style.width = "25%";
    topLogo.style.position = "static";
    theHeader.style.backgroundColor = "unset";
  }
}





