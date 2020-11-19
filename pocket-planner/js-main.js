/* -------- STORAGE ------- */

// for each section of the form
var titleArray = new Array();
var dateArray = new Array();
var timeArray = new Array();
var colorArray = new Array();
var detailsArray = new Array();

//array integer number
var theIndex = 0;

//read data
function readData() {
    //to make sure its working
    console.log("read-data-called")
    if (typeof (Storage) !== "undefined") {
       titleStr = localStorage.titleArray;
       dateStr = localStorage.dateArray;
       timeStr = localStorage.timeArray;
       colotStr = localStorage.colorArray;
       detailsStr = localStorage.detailsArray;
       theIndexStr = localStorage.myIndex;
       //to make sure its working
       console.log(titleStr + dateStr + timeStr + colotStr + detailsStr + theIndexStr)

       if (typeof (titleStr) !== "undefined") {
           //data string to array
            titleArray = titleStr.split(",");
            dateArray = dateStr.split(",");
            timeArray = timeStr.split(",");
            colorArray = colorStr.split(",");
            detailsArray = detailsStr.split(",");
            //index string to integer
            theIndex = parseInt(theIndexStr);
            //display data
            taskTitle.value = titleArray[theIndex];
            taskDate.value = dateArray[theIndex];
            taskTime.value = timeArray[theIndex];
            taskColors.value = colorArray[theIndex];
            taskDetails.value = detailsArray[theIndex];
            //index result
            theIndexResult.value = theIndex;
       } else {
        //new data
        taskTitle.value = "";
        taskDate.value = 0;
        taskTime.value = 0
        // taskColors.value = "";
        taskDetails.value = "";
        //index result
        theIndex = 0;
       }
    } else {
        alert ('This browser does NOT support local storage');
    }
}

//write data
function writeData() {
    console.log("write-data-called");
    if (typeof (Storage) !== "undefined") {
        //add variables to end of array
        titleArray.push = (taskTitle.value);
        dateArray.push = (taskDate.value);
        timeArray.push = (taskTime.value);
        colorArray.push = (taskColors.value);
        detailsArray.push = (taskDetails.value);
        //legnth
        theIndex = titleArray.length - 1;
        //convert data to strings
        titleStr = titleArray.join();
        dateStr = dateArray.join();
        timeStr = timeArray.join();
        colotStr = colorArray.join();
        detailsStr = detailsArray.join();
        //save to local storage
        localStorage.taskTitle = titleStr;
        localStorage.taskDate = dateStr;
        localStorage.taskTime = timeStr;
        localStorage.taskColors = colotStr;
        localStorage.taskDetails = detailsStr;
        localStorage.myIndex = theIndex;
        alert("Record Added");
    
    } else {
        alert ('This browser does NOT support local storage');
    }
}


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
    if (window.matchMedia("(orientation: portrait)").matches) {
        if (theMain.scrollTop > 40) {
            topLogo.style.width = "10%";
            topLogo.style.position = "absolute";
            topLogo.style.top = "3%";
            topLogo.style.left = "47%";
            topLogo.style.paddingTop = ".15rem";
            theHeader.style.backgroundColor = "var(--lightest2)";
            topLogo.style.marginTop = "0";
            } else if (addModal.style.display == "block") {
            topLogo.style.width = "12%";
            topLogo.style.position = "absolute";
            topLogo.style.top = "8%";
            topLogo.style.left = "47%";
            topLogo.style.paddingTop = ".3rem";
            topLogo.style.marginTop = "0";
            } else  {
            topLogo.style.width = "25%";
            topLogo.style.position = "static";
            theHeader.style.backgroundColor = "unset";
            topLogo.style.marginTop = "0";
            topLogo.style.paddingTop = "0";
            }
    } else {
        if (theMain.scrollTop > 40) {
            topLogo.style.width = "5%";
            topLogo.style.position = "absolute";
            topLogo.style.top = "3%";
            topLogo.style.left = "47%";
            topLogo.style.marginTop = ".4rem";
            theHeader.style.backgroundColor = "var(--lightest2)";
            } else if (addModal.style.display == "block") {
            topLogo.style.width = "5%";
            topLogo.style.position = "absolute";
            topLogo.style.top = "8%";
            topLogo.style.left = "47%";
            topLogo.style.marginTop = "0";
            } else  {
            topLogo.style.width = "12%";
            topLogo.style.position = "static";
            topLogo.style.marginTop = "-1.5rem";
            theHeader.style.backgroundColor = "unset";
            }
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


