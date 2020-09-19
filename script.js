$(document).ready(function(){

    // VAR deined
    var workHours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
    var rowDiv = $("<div id='row'>");
    var timeCol = $("<div id='col'>");
    var textArea = $("textarea");
    var saveBtn = $("button");
    
    // Add currentTime to <p> id Current day
    $('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

    // Create rows, columns, textarea, buttons
    for (let i = 0; i < workHours.length; i++) {
        
    }
    


})