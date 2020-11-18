/* -------- CURRENT WEEKDAY AND DATE ------- */

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


/* -------- ADD BUTTONS AND MODAL ------- */

//button
var addButton = document.getElementById("add");

//modal
var addModal = document.getElementById("add-modal");

//event listener - modal off, modal on for click
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


/* -------- HEADER RESIZE ------- */

//get logo
let topLogo = document.getElementById("top-logo");
//get header
let theHeader = document.getElementById("header");
//get main container
var theMain = document.getElementById("content");
//call function on scroll of main container
theMain.onscroll = function() {scrollFunction()};

//function changes header if page has been scrolled
function scrollFunction() {
  if (theMain.scrollTop > 40) {
   topLogo.style.width = "10%";
   topLogo.style.position = "absolute";
   topLogo.style.top = "3%";
   topLogo.style.left = "47%";
   topLogo.style.paddingTop = ".15rem";
   theHeader.style.backgroundColor = "var(--lightest2)";
  } else {
    topLogo.style.width = "25%";
    topLogo.style.position = "static";
    theHeader.style.backgroundColor = "unset";
  }
}





