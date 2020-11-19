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

//buttons
var addButton = document.getElementById("add");
var xButton = document.getElementById("modal-x")

//modal
var addModal = document.getElementById("add-modal");

//event listener - modal off, modal on for click, header change
addButton.addEventListener("click", () => {
    addButton.style.display = "none";
    addModal.style.display = "block";
    scrollFunction();
}, false);

//event listener - x out
xButton.addEventListener("click", () => {
    addModal.style.display = "none";
    addButton.style.display = "block";
    scrollFunction();
}, false);

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
    } else if (addModal.style.display == "block") {
    topLogo.style.width = "12%";
    topLogo.style.position = "absolute";
    topLogo.style.top = "8%";
    topLogo.style.left = "47%";
    topLogo.style.paddingTop = ".15rem";
    } else  {
    topLogo.style.width = "25%";
    topLogo.style.position = "static";
    theHeader.style.backgroundColor = "unset";
    }
}

/* -------- CHECK BUTTON FUNCTIONALITY ------- */
// let checkBox = document.getElementById("checkbox");
// let checkImg = document.getElementById("checkimg");

// checkBox.addEventListener("click", () => {
//     checkImg.style.display = "block";
// }, false);


// var checkBox = document.getElementsByClassName("checkbox");

// function addCheck(i) {
//     // checkImg.style.display = "block";
//     i.console.log(i);
// };

// for (var i = 0; i < checkBox.length; i++) {
//     checkBox[i].addEventListener('click', addCheck(i), false);
// }


