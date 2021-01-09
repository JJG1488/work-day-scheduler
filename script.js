// --------------------- task list for this file ----------------------------

// ------------------------------------------------Setting Time---------------------------------------------------------------------
// current time function
let currentDayAndTime = function () {
    // selects currentDay in html file and places the time in the elements space
    $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));

}


// setInterval function to refresh the time so that it stays current
// repeats the function currentDayAndTime every 1000 miliseconds
setInterval(currentDayAndTime, 50);


// ------------------------------------------------Code to load after document has fully loaded---------------------------------------------------------------------
$(document).ready(function () {

    // set saved task into local storage when the save button is pressed
    $("#9am-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved9am = document.getElementById("nineAM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved9am)
        localStorage.setItem('eventToBeSaved9am', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#10am-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved10am = document.getElementById("tenAM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved10am)
        localStorage.setItem('eventToBeSaved10am', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#11am-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved11am = document.getElementById("elevenAM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved11am)
        localStorage.setItem('eventToBeSaved11am', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#12pm-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved12pm = document.getElementById("twelvePM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved12pm)
        localStorage.setItem('eventToBeSaved12pm', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#1pm-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved1pm = document.getElementById("onePM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved1pm)
        localStorage.setItem('eventToBeSaved1pm', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#2pm-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved2pm = document.getElementById("twoPM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved2pm)
        localStorage.setItem('eventToBeSaved2pm', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#3pm-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved3pm = document.getElementById("threePM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved3pm)
        localStorage.setItem('eventToBeSaved3pm', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#4pm-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved4pm = document.getElementById("fourPM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved4pm)
        localStorage.setItem('eventToBeSaved4pm', serializedEventToBeSaved);

    })

    // set saved task into local storage when the save button is pressed
    $("#5pm-save").on('click', function () {
        // desired result is for the function to store event-to-be-logged input value to local storage
        let eventToBeSaved5pm = document.getElementById("fivePM-input").value;

        let serializedEventToBeSaved = JSON.stringify(eventToBeSaved5pm)
        localStorage.setItem('eventToBeSaved5pm', serializedEventToBeSaved);

    })

    // ---------------------------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------------------------

    const rows = document.getElementsByClassName("row");
    let currentHour = parseInt(moment().format('H'));

    Array.from(rows).forEach(row => {
        let
            rowIdString = row.id,
            rowHour;
        if (rowIdString) {
            rowHour = parseInt(rowIdString);
        }
        if (rowHour) {
            // Compares row id to current hour and sets color accordingly
            if (currentHour === rowHour) {
                setColor(row, "red");
            } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
                setColor(row, "green");
            } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
                setColor(row, "lightgrey");
            } else {
                setColor(row, "white");
            }
        }
    })

    function setColor(element, color) {
        element.style.backgroundColor = color;
    }

})


// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

    // let currentTime = $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm:ss a'));
    // var currentTime = moment().format("h")
    // var currentHour = currentTime;
    // var pastHours = pastHours < currentTime;
    // var futureHours =  futureHours < currentTime;
    // console.log(currentHour)
    // console.log(pastHours)
    // console.log(futureHours)

    // if (currentTime == currentHour) {
    //     // changed background color to yellow

    //     $(".row").addClass("grey");

    // } else if (currentHour < currentTime) {
    //     // change background color to red

    //     $(".row").addClass("red");

    // } else {
    //     // change background color to green
    //     $(".row").addClass("green");

    // }

    // ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// // make background color of / past hours gray / current hour red / future hours green
// var hourPast = hourPast < currentTime;
// var hourNow = currentTime;
// var hourFuture = hourFuture < currentTime;

// // if currentTime > hourNow make background color gray//

// var hourNow = currentTime;
// console.log(hourNow)
// console.log(currentTime)
//     function backgroundColorEdit(){
//         if (hourNow == currentTime){
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
//         }else if (hourNow < currentTime){
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
//         }else 
//         {
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
//         }
// }


// function updateBackground() {
//     var 
//       hr = (new Date()).getHours(),
//       body = document.body,
//       bstyle = body.style,    
//       hello = document.querySelector(".hello");    
//     if (hr < 10) {
//       bstyle.backgroundColor = "yellow";
//       bstyle.color = "black";
//       hello.innerText = "Have a good morning";
//     } else if (hr < 20) {
//       bstyle.backgroundColor = "green";
//       bstyle.color = "white";
//       hello.innerText ="Have a good day!";
//     } else {
//       bstyle.backgroundColor = "black";
//       bstyle.color = "white";
//       hello.innerText = "Have a good night!";
//     } 
//   }

//   setInterval(updateBackground, 1000 * 60);
//   updateBackground();