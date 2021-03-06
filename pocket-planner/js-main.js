/* -------- STORAGE ------- */

var taskTitleArray = new Array();
var taskDateArray = new Array();
var taskDetailsArray = new Array();
var checkboxClickedArray = new Array();
var mainNdx = 0;
var checkboxClicked = "false";

//initialize strings
var taskTitleStr = '';
var taskDateStr = '';
var taskDetailsStr = '';
var checkboxClickedStr = '';
var ndxStr = '';

//READ DATA
function readData() {
  console.log("readData called");
  // Does this browser support local storage?
  if (typeof (Storage) !== "undefined") {
    // Read data from local storage
    taskTitleStr = localStorage.my_taskTitle;
    taskDateStr = localStorage.my_taskDate;
    taskDetailsStr = localStorage.my_taskDetails;
    checkboxClickedStr = localStorage.my_checkboxClicked;
    ndxStr = localStorage.my_Ndx;

    console.log("taskTitleStr is .. " + taskTitleStr);
    console.log("taskDateStr is .. " + taskDateStr);
    console.log("taskDetailsStr is .. " + taskDetailsStr);
    console.log("taskDetailsStr is .. " + checkboxClickedStr);
    console.log("ndxStr is .. " + ndxStr);

    if (typeof (taskTitleStr) !== "undefined") {
      // Convert data string into array
      taskTitleArray = taskTitleStr.split(",");
      taskDateArray = taskDateStr.split(",");
      taskDetailsArray = taskDetailsStr.split(",");
      checkboxClickedArray = checkboxClickedStr.split(",");
      // Convert Ndx string into integer
      mainNdx = parseInt(ndxStr);
      // Display data screen
      taskTitle.value = taskTitleArray[mainNdx];
      taskDate.value = taskDateArray[mainNdx];
      taskDetails.value = taskDetailsArray[mainNdx];
      checkboxClicked.value = checkboxClickedArray[mainNdx];
      ndx_result.value = mainNdx;
    } else {
      // Initize data if it is empty/invalid
      taskTitle.value = "";
      taskDate.value = "";
      taskDetails.value = "";
      checkboxClicked.value = "";
      mainNdx = 0;
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
  populateTasks();
}

//WRITE DATA
function writeData() {
  console.log("writeData called");
  if (typeof (Storage) !== "undefined") {
    //convert date string and current date string
    var setTaskDate = Date.parse(taskDate.value);
    if (parseInt(theNumber) < 10) {
      newnumber = theNumber*1;
      theNumber = "0" + newnumber; 
    }
    var theDateStr = theYear + "-" + (theMonthNumber +1) + "-" + theNumber;
    var theDate2 = Date.parse(theDateStr);
    //split date string, grab year, check length
    var theSetDate = taskDate.value.split("-");
    var theSetYear = theSetDate[0];
    console.log("checkin " + theSetYear.length);
    var yearLegnth = parseInt(theSetYear.length);
    console.log("current date first " + theDate2 + " set date" + setTaskDate + "CURRENT STRING " + theDateStr);
    //make sure year string is 4 characters
    if (yearLegnth == 4) {
      //make sure the date has not passed
      if (setTaskDate >= theDate2) {
        //make sure a title is entered
        if (taskTitle.value !== "") {
             // Add data to array
            taskTitleArray.push(taskTitle.value);
            taskDateArray.push(taskDate.value);
            taskDetailsArray.push(taskDetails.value);
            checkboxClickedArray.push("false");
            // Increment array index number
            mainNdx = taskTitleArray.length - 1;
            // Convert arrays into data strings
            taskTitleStr = taskTitleArray.join();
            taskDateStr = taskDateArray.join();
            taskDetailsStr = taskDetailsArray.join();
            checkboxClickedStr = checkboxClickedArray.join();
            // save data strings to local storage
            localStorage.my_taskTitle = taskTitleStr;
            localStorage.my_taskDate = taskDateStr;
            localStorage.my_taskDetails = taskDetailsStr;
            localStorage.my_checkboxClicked = checkboxClickedStr;
            localStorage.my_Ndx = mainNdx;
            //
            ndx_result.value = mainNdx;
            alert('Record ADDED');
            //add button and modal
            var addButton = document.getElementById("add");
            var addModal = document.getElementById("add-modal");
            //button on modal off on submit
            addModal.style.display = "none";
            addButton.style.display = "block";
            createTask();
            console.log(taskDate.value);
        } else {
            alert('Please add a title');
        }
      } else {
          alert('This date has already passed');
      }
    } else {
      alert('Please enter a valid year');
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

//UPDATE DATA
function writeNewData() {
  if (typeof (Storage) !== "undefined") {
    //convert date string and current date string
    var setTaskDate = Date.parse(taskDate.value);
    if (parseInt(theNumber) < 10) {
      newnumber = theNumber*1;
      theNumber = "0" + newnumber; 
    }
    var theDateStr = theYear + "-" + (theMonthNumber +1) + "-" + theNumber;
    var theDate2 = Date.parse(theDateStr);
    console.log("current date first " + theDate2 + " set date" + setTaskDate + "CURRENT STRING " + theDateStr);
    //split date string, grab year, check length
    var theSetDate = taskDate.value.split("-");
    var theSetYear = theSetDate[0];
    console.log("checkin " + theSetYear.length);
    var yearLegnth = parseInt(theSetYear.length);
    //make sure year string is 4 characters
    if (yearLegnth == 4) {
      //make sure the date has not passed
      if (setTaskDate >= theDate2) {
        //make sure a title is entered
        if (taskTitle.value !== "") {
          console.log("passed all " + thisIndx);
          var spliceValue = parseInt(thisIndx);
          console.log("passed all " + spliceValue);
          //replace data in array
          taskTitleArray.splice(spliceValue, 1, taskTitle.value);
          taskDateArray.splice(spliceValue, 1, taskDate.value);
          taskDetailsArray.splice(spliceValue, 1, taskDetails.value);
          //convert arrays into data strings
          taskTitleStr = taskTitleArray.join();
          taskDateStr = taskDateArray.join();
          taskDetailsStr = taskDetailsArray.join();
          // save data strings to local storage
          localStorage.my_taskTitle = taskTitleStr;
          localStorage.my_taskDate = taskDateStr;
          localStorage.my_taskDetails = taskDetailsStr;
          alert('Record EDITED');
          //add button and modal
          var addButton = document.getElementById("add");
          var addModal = document.getElementById("add-modal");
          //button on modal off on submit
          addModal.style.display = "none";
          addButton.style.display = "block";
          location.reload();
        } else {
            alert('Please add a title');
        }
      } else {
          alert('This date has already passed');
      }
    } else {
      alert('Please enter a valid year');
    }
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

function removeTask() {
  console.log("remove index records number " + thisIndx);
  var spliceValue = parseInt(thisIndx);
  //replace data in array
  taskTitleArray.splice(spliceValue, 1);
  taskDateArray.splice(spliceValue, 1);
  taskDetailsArray.splice(spliceValue, 1);
  checkboxClickedArray.splice(spliceValue, 1);
  //convert arrays into data strings
  taskTitleStr = taskTitleArray.join();
  taskDateStr = taskDateArray.join();
  taskDetailsStr = taskDetailsArray.join();
  checkboxClickedStr = checkboxClickedArray.join();
  // save data strings to local storage
  localStorage.my_taskTitle = taskTitleStr;
  localStorage.my_taskDate = taskDateStr;
  localStorage.my_taskDetails = taskDetailsStr;
  localStorage.my_checkboxClicked = checkboxClickedStr;
  alert('Record DELETED');
  location.reload();
}

/* -------- CREATE TASK ------- */
var createdTask = document.getElementsByClassName('task');
//new submit button
var addModalNewSubmit = document.getElementById("submitnew");

var mainContent = document.getElementById("main-content");
function populateTasks() {
  for (i = 0; i < taskTitleArray.length; i++) {
    //create task div
    var newTask = document.createElement('div');
    //check for checkbox click
    if (checkboxClickedArray[i] == "true") {
      newTask.className = 'task task-toggle';
    } else {
      newTask.className = 'task';
    }
    mainContent.appendChild(newTask);
    //create paragraph div and fill with title
    var newTaskP = document.createElement('p');
    newTaskP.innerHTML = taskTitleArray[i];
    newTask.appendChild(newTaskP);
    //bring up modal on click
    newTaskP.id = i;
    newTaskP.onclick = function() {
      thisIndx = event.target.id;
      //display modal
      addModal.style.display = "block";
      //get title and submit
      var addModalTitle = document.getElementById("add-title");
      var addModalSubmit = document.getElementById("submit");
      //edit title and button to say edit and turn on
      addModalTitle.innerHTML = "Edit Task";
      addModalSubmit.style.display = "none";
      addModalNewSubmit.style.display = "block";
      if (taskTitleArray[1] === undefined) {
        addModalDelete.style.display = "none";
      } else {
        addModalDelete.style.display = "block";
      }
      // Update web form fields with new values
      taskTitle.value = taskTitleArray[thisIndx];
      taskDate.value = taskDateArray[thisIndx];
      taskDetails.value = taskDetailsArray[thisIndx];
      ndx_result.value = thisIndx;
      // Save current index to local storage
      localStorage.my_Ndx = thisIndx;
    };
    //create h3 div and fill with date
    var newTaskH3 = document.createElement('h3');
    var theSetDate = taskDateArray[i].split("-");
    var theSetYear = theSetDate[0];
    var theSetMonth = theSetDate[1];
    if (theSetMonth.charAt(0) === 0) {
      theSetMonth = theSetMonth.substring(1);
    }
    var monthNumber = parseInt(theSetMonth) - 1;
    var monthAbbrev = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var theMonthAbbrev = monthAbbrev[monthNumber];
    var theSetDay = theSetDate[2];
    newTaskH3.innerHTML = theMonthAbbrev + " " + theSetDay + ", " + theSetYear;
    newTask.appendChild(newTaskH3);
    //create checkbox div
    var newTaskCheck = document.createElement('div');
    newTaskCheck.className = 'checkbox';
    newTaskCheck.id = i;
    //checkbox click
    newTaskCheck.onclick = function() {
      thisIndx = event.target.id;
      //get current array value
      isitClicked = checkboxClickedArray[thisIndx];
      //switch it
      if (isitClicked == "true") {
        createdTask[thisIndx].classList.toggle("task-toggle");
        isitClicked = "false";
      } else {
        createdTask[thisIndx].classList.toggle("task-toggle");
        isitClicked = "true";
      }
      //create splice value
      var spliceValue = parseInt(thisIndx);
      //change checkbox clicked to true in array
      checkboxClickedArray.splice(spliceValue, 1, isitClicked);
      //convert array into data strings
      checkboxClickedStr = checkboxClickedArray.join();
      // save data strings to local storage
      localStorage.my_checkboxClicked = checkboxClickedStr;
    };
    newTask.appendChild(newTaskCheck);
    //checkbox image
    var newTaskImg = document.createElement('div');
    newTaskImg.className = "checkimg";
    newTaskCheck.appendChild(newTaskImg);
  }
}

/* -------- TASK ADD ------- */
//check number of existing tasks
window.addEventListener("load", function() {
  createdTaskLength = document.getElementsByClassName('task').length;
  console.log(createdTaskLength);
});

function createTask() {
    //create task div
    var newTask = document.createElement('div');
    newTask.className = 'task';
    mainContent.appendChild(newTask);
    //create paragraph div and fill with title
    var newTaskP = document.createElement('p');
    newTaskP.innerHTML = taskTitleArray[createdTaskLength];
    newTask.appendChild(newTaskP);
    //bring up modal on click
    newTaskP.id = createdTaskLength;
    newTaskP.onclick = function() {
      var thisIndx = event.target.id;
      //display modal
      addModal.style.display = "block";
      //get title and submit
      var addModalTitle = document.getElementById("add-title");
      var addModalSubmit = document.getElementById("submit");
      //edit title and button to say edit and turn on
      addModalTitle.innerHTML = "Edit Task";
      addModalSubmit.style.display = "none";
      addModalNewSubmit.style.display = "block";
      // Update web form fields with new values
      taskTitle.value = taskTitleArray[thisIndx];
      taskDate.value = taskDateArray[thisIndx];
      taskDetails.value = taskDetailsArray[thisIndx];
      ndx_result.value = thisIndx;
      // Save current index to local storage
      localStorage.my_Ndx = thisIndx;
    };
    //create h3 div and fill with date
    var newTaskH3 = document.createElement('h3');
    var theSetDate = taskDateArray[createdTaskLength].split("-");
    var theSetYear = theSetDate[0];
    var theSetMonth = theSetDate[1];
    if (theSetMonth.charAt(0) === 0) {
      theSetMonth = theSetMonth.substring(1);
    }
    var monthNumber = parseInt(theSetMonth) - 1;
    var monthAbbrev = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var theMonthAbbrev = monthAbbrev[monthNumber];
    var theSetDay = theSetDate[2];
    newTaskH3.innerHTML = theMonthAbbrev + " " + theSetDay + ", " + theSetYear;
    newTask.appendChild(newTaskH3);
    //create checkbox div
    var newTaskCheck = document.createElement('div');
    newTaskCheck.className = 'checkbox';
    newTaskCheck.id = createdTaskLength;
    //checkbox click
    newTaskCheck.onclick = function() {
      var thisIndx = event.target.id;
      //get current array value
      isitClicked = checkboxClickedArray[thisIndx];
      //switch it
      if (isitClicked == "true") {
        createdTask[thisIndx].classList.toggle("task-toggle");
        isitClicked = "false";
      } else {
        createdTask[thisIndx].classList.toggle("task-toggle");
        isitClicked = "true";
      }
      //create splice value
      var spliceValue = parseInt(thisIndx);
      //change checkbox clicked to true in array
      checkboxClickedArray.splice(spliceValue, 1, isitClicked);
      //convert array into data strings
      checkboxClickedStr = checkboxClickedArray.join();
      // save data strings to local storage
      localStorage.my_checkboxClicked = checkboxClickedStr;
    };
    newTask.appendChild(newTaskCheck);
    //checkbox image
    var newTaskImg = document.createElement('div');
    newTaskImg.className = "checkimg";
    newTaskCheck.appendChild(newTaskImg);
    //reload page
    location.reload();
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
var xButton = document.getElementById("modal-x");

//modal
var addModal = document.getElementById("add-modal");

//get title and submit
var addModalTitle = document.getElementById("add-title");
var addModalSubmit = document.getElementById("submit");
//get remove
var addModalDelete = document.getElementById("remove");

//event listener - modal off, modal on for click
addButton.addEventListener("click", () => {
    taskTitle.value = "";
    taskDate.value = "";
    taskDetails.value = "";
    addButton.style.display = "none";
    addModal.style.display = "block";
    //edit title and button to say add and turn on
    addModalTitle.innerHTML = "Add Task";
    addModalSubmit.style.display = "block";
    addModalNewSubmit.style.display = "none";
    addModalDelete.style.display = "none";
}, false);

//event listener - x out
xButton.addEventListener("click", () => {
    addModal.style.display = "none";
    addButton.style.display = "block";
}, false);

/* -------- HEADER RESIZE ------- */

//get header
var theHeader = document.getElementById("header");
//get main container
var theMain = document.getElementById("content");
//call function on scroll of main container
theMain.onscroll = function() {
  scrollFunction();
};

//function changes header if page has been scrolled
function scrollFunction() {
    if (theMain.scrollTop > 30) {
        theHeader.style.backgroundColor = "var(--lightest2)";
        } else  {
        theHeader.style.backgroundColor = "unset";
        }
} 


