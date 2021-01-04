// --------------------- task list for this file ----------------------------
// change to htmlH1InnerText.innerHTML = DateTime.local(); to reflect the current time (FORMAT IT)

let momentTime = moment();
let htmlH1InnerText = document.querySelector("#html-h1");


htmlH1InnerText.innerHTML = momentTime;


console.log(momentTime.toString());


$(document).ready(function(){
    // selects button from the dropdown menu and starts a function
$('#time-button-1').on('click', () => {
// allows user to toggle the menu button for a time selection
    $('#hour-dropdown').toggleClass('show');

})

//  selects the 9am - 10am button in the dropdown menu and starts a function
$('#nineToTen').on('click', () => {
    // when the 9am-10am button is clicked, ......

    // hide the dropdown menu
    $('#hour-dropdown').hide()
    // add selection to the 'time selected' slot
    $('#time-selected').append("9:00am - 10:00am");
    // hide the 'select event time' button
    $('#time-button-1').hide()

})

$('#tenToEleven').on('click', () => {
    // when the 10am-11am button is clicked.....

    // hide the dropdown menu
    $('#hour-dropdown').hide();
    // add the selected time to the 'time selected' slot
    $('#time-selected').append("10:00am - 11:00am");
    // hide the 'select event time' button
    $('#time-button-1').hide();

})

$('#elevenToTwelve').on('click', () => {
    // when the 11am-12pm button is clicked.....

    // hide the dropdown menu
    $('#hour-dropdown').hide();
    // add the selected time to the 'selected time' slot
    $('#time-selected').append('11:00am - 12:00pm');
    // hide the 'select event time' button
    $('#time-button-1').hide();

})

$('#twelveToOne').on('click', () => {
    // when the 12pm-1pm button is clicked.....

    // hide the dropdown menu
    $('#hour-dropdown').hide();
    // add the selected time to the 'selected time' slot
    $('#time-selected').append('12:00pm - 1:00pm');
    // hide the 'select event time' button
    $('#time-button-1').hide();

})

$('#oneToTwo').on('click', () => {
    // when the 1pm-2pm button is clicked.....

    // hide the dropdown menu
    $('#hour-dropdown').hide();
    // add the selected time to the 'selected time' slot
    $('#time-selected').append('1:00pm - 2:00pm');
    // hide the 'select event time' button
    $('#time-button-1').hide();
})




})
