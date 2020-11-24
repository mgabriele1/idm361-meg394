// /* -------- STORAGE ------- */

var taskTitleArray = new Array();
var taskDateArray = new Array();
var taskTimeArray = new Array();
var taskDetailsArray = new Array();
var mainNdx = 0;

function readData() {
  console.log("readData called");
  // Does this browser support local storage?
  if (typeof (Storage) !== "undefined") {
    // Read data from local storage
    taskTitleStr = localStorage.my_taskTitle;
    taskDateStr = localStorage.my_taskDate;
    taskTimeStr = localStorage.my_taskTime;
    taskDetailsStr = localStorage.my_taskDetails;
    ndxStr = localStorage.my_Ndx;

    console.log("taskTitleStr is .. " + taskTitleStr);
    console.log("taskDateStr is .. " + taskDate);
    console.log("taskTimeStr is .. " + taskTime);
    console.log("taskDetailsStr is .. " + taskDetails);
    console.log("ndxStr is .. " + ndxStr);

    if (typeof (taskTitleStr) !== "undefined") {
      // Convert data string into array
      taskTitleArray = taskTitleStr.split(",");
      taskDateArray = taskDateStr.split(",");
      taskTimeArray = taskTimeStr.split(",");
      taskDetailsArray = taskDetailsStr.split(",");
      // Convert Ndx string into integer
      mainNdx = parseInt(ndxStr);
      // Display data screen
      taskTitle.value = taskTitleArray[mainNdx];
      taskDate.value = taskDateArray[mainNdx];
      taskTime.value = taskTimeArray[mainNdx];
      taskDetails.value = taskDetailsArray[mainNdx];
      ndx_result.value = mainNdx;
    } else {
      // Initize data if it is empty/invalid
      taskTitle.value = "";
      taskDate.value = "";
      taskTime.value = "";
      taskDetails.value = "";
      mainNdx = 0;
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

function writeData() {
  console.log("writeData called");
  if (typeof (Storage) !== "undefined") {

    //check the date
    setTaskDate = Date.parse(taskDate.value);
    console.log("date entered = " + setTaskDate);
    if (setTaskDate >= theDate) {
        if (taskTitle.value !== "") {
             // Add data to array
            taskTitleArray.push(taskTitle.value);
            taskDateArray.push(taskDate.value);
            taskTimeArray.push(taskTime.value);
            taskDetailsArray.push(taskDetails.value);
            // Increment array index number
            mainNdx = taskTitleArray.length - 1;
            // Convert arrays into data strings
            taskTitleStr = taskTitleArray.join();
            taskDateStr = taskDateArray.join();
            taskTimeStr = taskTimeArray.join();
            taskDetailsStr = taskDetailsArray.join();
            // save data strings to local storage
            localStorage.my_taskTitle = taskTitleStr;
            localStorage.my_taskDate = taskDateStr;
            localStorage.my_taskTime = taskTimeStr;
            localStorage.my_taskDetails = taskDetailsStr;
            localStorage.my_Ndx = mainNdx;
            //
            ndx_result.value = mainNdx;
            alert('Record ADDED.');
            createTask();
        } else {
            alert('Please add a title');
        }
    } else {
        alert('This date has already passed');
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

/* -------- TASK COLOR ------- */
var taskColor = document.getElementsByClassName("taskColors");

for (var i = 0; i < taskColor.length; i++) {
    taskColor[i].addEventListener("click", function(){
        whichColor = event.target.id;
        if (whichColor == "red") {
            theTaskColor = "var(--red)";
        } else if (whichColor == "orange") {
            theTaskColor = "var(--orange)";
        } else if (whichColor == "yellow") {
            theTaskColor = "var(--yellow)";
        } else if (whichColor == "green") {
            theTaskColor = "var(--green)";
        } else if (whichColor == "blue") {
            theTaskColor = "var(--blue)";
        } else if (whichColor == "purple") {
            theTaskColor = "var(--purple)";
        } else {
            alert("Please select a color");   
        }
    }, false);
}

/* -------- TASK CREATION ------- */
let mainContent = document.getElementById("main-content");
var taskCount = 0;
function createTask() {
    //create task div
    var newTask = document.createElement('div');
    newTask.className = 'task';
    mainContent.appendChild(newTask);
    //create color div
    var newTaskColor = document.createElement('div');
    newTaskColor.className = 'color';
    //to select correct color
    newTaskColor.style.backgroundColor = theTaskColor;
    newTask.appendChild(newTaskColor);
    //create paragraph div and fill with title
    var newTaskP = document.createElement('p');
    newTaskP.innerHTML = taskTitleArray[taskCount];
    newTask.appendChild(newTaskP);
    //bring up modal on click
    console.log("childrren " + mainContent.children);
    newTaskP.onclick = function() {
        console.log("hello!! " + evt);
        //display modal
        // addModal.style.display = "block";
        // // Update web form fields with new values
        // taskTitle.value = taskTitleArray[0];
        // taskDate.value = taskDateArray[0];
        // taskTime.value = taskTimeArray[0];
        // taskDetails.value = taskDetailsArray[0];
        // ndx_result.value = 0;
        // // Save current index to local storage
        // localStorage.my_Ndx = 0;
    };
    //create h3 div and fill with time
    var newTaskH3 = document.createElement('h3');
    newTaskH3.innerHTML = taskTimeArray[taskCount];
    newTask.appendChild(newTaskH3);
    //create checkbox div
    var newTaskCheck = document.createElement('div');
    newTaskCheck.className = 'checkbox';
    //checkbox functionality
    newTaskCheck.onclick = function() {
        event.target.parentNode.classList.toggle("task-toggle");
        event.target.firstChild.classList.toggle("check-toggle");
    };
    newTaskCheck.className = 'checkbox';
    newTask.appendChild(newTaskCheck);
    //checkbox image
    var newTaskGif = document.createElement('img');
    newTaskGif.src="img/check.gif";
    newTaskGif.className = 'checkimg';
    newTaskCheck.appendChild(newTaskGif);
    //increase count
    taskCount++;
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
    taskTitle.value = "";
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

//get header
let theHeader = document.getElementById("header");
//get main container
var theMain = document.getElementById("content");
//call function on scroll of main container
theMain.onscroll = function() {scrollFunction()};

//function changes header if page has been scrolled
function scrollFunction() {
    if (theMain.scrollTop > 30) {
        theHeader.style.backgroundColor = "var(--lightest2)";
        } else  {
        theHeader.style.backgroundColor = "unset";
        }
} 


